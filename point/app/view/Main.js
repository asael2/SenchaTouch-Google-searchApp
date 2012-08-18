Ext.define('searchapp.view.Main', {
    extend: 'Ext.tab.Panel', 
    id :'tabsPanel',
    config: {
        fullscreen: true,

        tabBar: {
            id: 'navBar',
            docked: 'top',
            layout: {
                pack: 'center'
            },
            hidden:true
        },
        items: [
            {
                xtype:'homepanel'
            }, 
            {   
                xtype:'searchpanel'
            },
            {   
                xtype:'sresultspanel'
            }
        ]
    }
});


