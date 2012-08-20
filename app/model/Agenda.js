Ext.define('searchapp.model.Agenda', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id',
            'sQuery',
            'reqTime',
        ],

        proxy: {
            type: "localstorage",
            id: "Agenda"            
        },

        identifier: {
            type: 'uuid'
        },
    }
});

