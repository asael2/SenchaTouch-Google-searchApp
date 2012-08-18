Ext.define('searchapp.controller.Search', {
   
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.form.FieldSet',
        'Ext.form.Panel',
        'Ext.DataView',
        'Ext.List',
        'Ext.data.Store',
        'Ext.TitleBar'
    ], 
    config: {    
        views : ['Search', 'Searchresults'],
        models: ['Search'],
        refs: {
            TabsPanel: '#tabsPanel',
            ResultsPanel: '#resultsPanel',
            searchQuery:'#query',
            sBtn: '#searchBtn'
        },
        control: {
            sBtn: {
                tap: 'doSearch'
            }
        }    
    },
    doSearch : function(){
        var mysearchQuery = this.getSearchQuery().getValue();
        searchQ = mysearchQuery;
        this.getTabsPanel().setActiveItem(2); //default loggedin panel
        
        busqueda(searchQ);
        
        console.log('En doSearch.controller<< ', mysearchQuery);

    }



});