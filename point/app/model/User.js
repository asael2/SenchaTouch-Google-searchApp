Ext.define("searchapp.model.User", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            {name: 'uname', type: 'string'},
            {name: 'upass',  type: 'string'}
        ]
    }
});