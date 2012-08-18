var searchStore =  Ext.define('searchapp.store.Searchstore', {
    extend: 'Ext.data.Store',
    config:{
        model: 'searchapp.model.Search',
        autoLoad: true,
    }
});



var historyStore =  Ext.define('searchapp.store.Historystore', {
    extend: 'Ext.data.Store',
    config:{
        model: 'searchapp.model.Agenda',
        autoLoad: true,
    }
});

