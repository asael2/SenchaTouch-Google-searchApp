
Ext.define('searchapp.view.Search', { 
    extend: 'Ext.form.FormPanel',
    xtype:'searchpanel',
    //requires: ['Ext.dataview.List'], 

    layout: 'fit',
    id: 'searchViewPanel',
    
    config: {
        title: 'Web Search',
        xtype: 'panel',
        iconCls: 'search',
        socrollable:false,
        //fullscreen:true,
        items: [
            {
                html :'<img src="resources/images/logolog.png" />',
                style: 'background-color: #fff; text-align:center; padding:8px',
            },

            {
                xtype:'panel',
                id:'searchform',
                items:[
                    {
                        xtype: 'searchfield',
                        name: 'q',
                        id: 'queryId',
                        value: '',
                        placeHolder: 'write your search'
                    },
                    {
                        xtype: 'button',
                        id: 'searchBtn',
                        text: 'Search',
                        ui: 'action',
                        style:'margin:10px;'
                    },
                ]
            },  
            {
                xtype: 'panel',
                id: 'historyListContainer',
                flex: 2,
                    layout: 'fit',
                style: 'background-color: red;',
                height: 400,
                items:{
                    xtype:'list',
                    style: 'background-color: #fff; text-align:center; padding:8px',
                    id:'historyList',
                    store: 'Historystore',
                    itemTpl:'<b>{sQuery}</b> <br> <small>{reqTime}</small>',
                }

            }
        
        ],
        
        submit:function(){
            console.log('en submit');
        },
      
    }
   
});

