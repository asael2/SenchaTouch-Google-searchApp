var searchStore =  Ext.define('searchapp.store.Searchstore', {
    extend: 'Ext.data.Store',
    config:{
        model: 'searchapp.model.Search',
        autoLoad: true,
    }
});