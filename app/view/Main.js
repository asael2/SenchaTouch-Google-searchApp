Ext.define('searchapp.view.Main', {
    extend: 'Ext.tab.Panel', 
    id :'tabsPanel',
    config: {
        fullscreen: true,

        tabBar: {
            id: 'navBar',
            docked: 'bottom',
            layout: {
                pack: 'center'
            },
            //hidden:true
        },

        items: [
            {
                xtype:'homepanel'
            }, 
            {   
                xtype:'sresultspanel'
            },
            {   
                xtype:'searchpanel',
                socrollable:false,
            },
        ]
    }
});


