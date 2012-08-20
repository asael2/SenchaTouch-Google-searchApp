var searchController = Ext.define('searchapp.controller.Search', {  
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.form.FieldSet',
        'Ext.form.Panel',
        'Ext.DataView',
        'Ext.List',
        'Ext.data.Store',
        'Ext.TitleBar',
        'searchapp.store.Searchstore',
    ], 
    config: {    
        views : ['Search', 'Searchresults'],
        models: ['Search'],
        stores: ['Searchstore'],
        refs: {
            TabsPanel: '#tabsPanel',
            ResultsPanel: '#searchViewPanel',
            ResultsList: 'sresultspanel list',
            Resultados:'#resultsPanel',
            searchQuery:'#queryId',
            sBtn: '#searchBtn',

        },
        control: {
            sBtn: {
                tap: 'doSearch'
            },
            '#historyList': {
                itemtap: 'reSearch'
            },
            ResultsPanel:{
                submit: 'doSearch'
            },
            ResultsList:{
                itemtap: 'resultDetails'  
            }
        }    
    },

    doSearch : function(query){        
        var searchQ = this.getSearchQuery().getValue(); 
        if(searchQ !== ''){
            this.searchRequest(searchQ);
        }else{
            Ext.Msg.alert("Please write a search");
        };
    },
    resultDetails: function(list, index, node, record){       
        var eltitle = record.data.title;
        var elcontent = record.data.content;
        var elUrl = record.data.url;
        
        // search > result > details : panel 
        this.getResultados().push({
            xtype:'panel',
            title: eltitle,
            html: elcontent,
            scrollable:true,
            styleHtmlContent:true,

        });

    },
    reSearch: function(list, index, node, record){
      this.searchRequest(record.get('sQuery'));
    },

    searchRequest : function(searchQ, lastStore){ 

        var loadingMask =  this.getResultsPanel();

        loadingMask.setMasked({
            xtype: 'loadmask',
            message: 'Loading...', 
        });

        var petition = Ext.data.JsonP.request({
            url: 'https://ajax.googleapis.com/ajax/services/search/web?v=1.0',
            callbackName: 'cbName',
            params: {
                q: searchQ,
                format: 'json',
                num_of_days: 5,
                limit:8,
                reader:{
                    rootProperty:'responseData',
                    type: 'json'
                },
            },
            success : function(results) {           
                var resultados = results.responseData.results;
                addSearch(resultados, searchQ);  

                loadingMask.setMasked(false);

            },
            error: function(){
                Ext.Msg.alert("No data response");
            }
        });

        var addSearch = function(resultados, searchQ) {
            var getDate = function(){    
                var myDate = new Date();
                var dateString = myDate.toLocaleDateString() + " " + myDate.toLocaleTimeString();
                return dateString
            };
            
            // add and sort search History record
            var addHistory =  Ext.getStore('Historystore').add({'sQuery': searchQ, 'reqTime': getDate(), });
            var sortResults = Ext.getStore('Historystore').sort('reqTime', 'DESC'); 
            
            //update results store
            var clearStore =  Ext.getStore('Searchstore').removeAll();
            var addResults =  Ext.getStore('Searchstore').add(resultados);
            var saveResults = Ext.getStore('Searchstore').sync();
            
            var showResults = Ext.getCmp('tabsPanel').setActiveItem(1);

            //var toolbar = Ext.ComponentQuery.query('toolbar')[0],

            //var toolbarTitle = Ext.ComponentQuery.query('resultsBar').getTitle();



      //newTitle = searchQ; 


        //    toolbar.setTitle(newTitle);  
        };

    }

});

