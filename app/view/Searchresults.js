Ext.define("searchapp.view.Searchresults", {
    extend: 'Ext.navigation.View',
    id:'resultsPanel',
    xtype: 'sresultspanel',
     config:{
        title: 'Saved Results',
        iconCls: 'star',
        items: {
            xtype:'list',
            itemTpl:'<h2>{title}:</h2> <p> {visibleUrl}</p>',
            id: 'resultsList',
            title:'Saved results',
            store: 'Searchstore',
            fullscreen: true,
            onItemDisclosure: true,
            style: 'font-size:0.9em;',
        },
    },
});