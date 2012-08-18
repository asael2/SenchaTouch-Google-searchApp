Ext.define("searchapp.view.Searchresults", {
    extend: 'Ext.navigation.View',
    id:'resultsPanel',
    xtype: 'sresultspanel',

     config:{
        title: 'Results',
        iconCls: 'star',

        items: {
            xtype:'list',
            itemTpl:'<h2>{titleNoFormatting} </h2><p>{content}</p>',
            title: 'Searchresults',
            store: 'Searchstore',
            fullscreen: true,  
        }
    }
   
});
