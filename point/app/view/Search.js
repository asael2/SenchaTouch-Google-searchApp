var searchQ ='Sencha Touch 2'; //search value
Ext.define('searchapp.view.Search', {
    extend: 'Ext.Panel',
    xtype:'searchpanel',
    //requires: ['Ext.dataview.List'], 
    id: 'searchViewPanel',
    config: {
        //stores: ['Searchstore'],
        title: 'Web Search',
        items: [
            {
                html :'holaaa debajo del'
            },
            {
                xtype: 'searchfield',
                name: 'q',
                id: 'query',
                value: searchQ
            },
            {
                xtype: 'button',
                id: 'searchBtn',
                text: 'Search',
                ui: 'confirm',
                //formBind: true,
                /*handler: function() {
                    var values = this.up('searchpanel').getValues();     
                    console.log('elnombre es: ',  values.uname, 'y el password es: ', values.upass);
                }*/
            },
        
        ]
      
    }
   
});

