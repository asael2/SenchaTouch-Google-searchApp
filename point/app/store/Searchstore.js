function busqueda(searchQ){
    console.log('searchQ::::',searchQ),
    Ext.define('searchapp.store.Searchstore', {
        extend: 'Ext.data.Store',
        config:{
            model: 'searchapp.model.Search',
            proxy: {
                type: 'jsonp',
                url : 'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q='+searchQ,
                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            },
            
        autoSync : true,
        autoLoad: true
        }
    })
}
busqueda();