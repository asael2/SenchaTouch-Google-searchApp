var mystore = Ext.define("searchapp.store.Userstore", {
    extend: 'Ext.data.Store',
    config: {
        model: 'searchapp.model.User',
        proxy: {
            type: 'ajax',
            url : 'app/services/users.json',
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
        },
    autoLoad: true
    }
});
