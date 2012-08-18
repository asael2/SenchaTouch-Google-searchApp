Ext.define("searchapp.view.Searchresults", {
    extend: 'Ext.navigation.View',
    id:'resultsPanel',
    xtype: 'sresultspanel',

     config:{
        title: 'Saved Results',
        iconCls: 'star',

        items: {
            xtype:'list',
            itemTpl:'<h2>{title}:</h2> <p> {content}</p>',
            title: 'Last Results',
            store: 'Searchstore',
            fullscreen: true,
            style: 'font-size:0.9em;',
        }
    }
   
});
