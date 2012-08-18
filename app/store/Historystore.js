var historyStore =  Ext.define('searchapp.store.Historystore', {
    extend: 'Ext.data.Store',
    config:{
        model: 'searchapp.model.Agenda',
        autoLoad: true,
    }
});

