Ext.define('searchapp.view.Main', {
    extend: 'Ext.tab.Panel', 
    id :'tabsPanel',
    config: {
    showAnimation :'slide',
        fullscreen: true,
        tabBar: {
            id: 'navBar',
            docked: 'top',
            layout: {
                pack: 'center'
            },
        },
        items: [
            {   
                xtype:'searchpanel'
            },
            {   
                xtype:'sresultspanel'
            },
        ]
    }
});


