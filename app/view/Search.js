Ext.define('searchapp.view.Search', { 
    extend: 'Ext.Panel',
    xtype:'searchpanel',
    layout: 'fit',
    id: 'searchViewPanel',
    config: {
        title: 'Web Search',
        xtype: 'panel',
        iconCls: 'search',
        items: [
            //toolbar button
            {   
                xtype: 'toolbar',
                //docked:'bottom',

                layout: { 
                    pack: 'right' 
                },
                items:[
                    {
                        text:'Clear History',
                        action: 'clearHistory',
                        align: 'right',
                    }
                ]
            },      
            //Header (Google logo)
            {
                html :'<img src="resources/images/logolog.png" />',
                style: 'background-color: #fff; text-align:center; padding:12px 6px;',
            },
            //Search Form (SearchPanel)
            {
                xtype:'searchform',
                scrollable: false,
                style: 'padding:8px;',
            },
            //History List
            {
                xtype: 'panel',
                id: 'historyListContainer',
                layout: 'fit',
                height: 400,
                items:{
                    xtype:'list',
                    style: 'background-color: #fff; font-size:0.8em; margin-top:8px',
                    id:'historyList',
                    store: 'Historystore',
                    itemTpl:'<b>{sQuery}</b> <br> <small>{reqTime}</small>',
                }
            },
        ],      
    }
});

//Search Form
Ext.define('searchapp.form.SearchPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'searchform',
    id: 'googleSearchForm',
    config: {
        items: [
            //fieldset
            {
                xtype:'fieldset',
                items: [
                    {
                        xtype: 'searchfield',
                        name: 'q',
                        id: 'queryId',
                        value: '',
                        placeHolder: 'write your search',
                    }, 
                ]
            },
            //submit button
            {
                xtype: 'button',
                value:'submit',
                action: 'submit',
                ui: 'confirm',
                id: 'searchBtn',
                text: 'Search',
                style:'margin: 10px;',
                /*handler: function(){
                },*/
            },
        ]
    }
});
