Ext.define('searchapp.model.Search', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'GsearchResultClass',
            'unescapedUrl',
            'url',
            'visibleUrl',
            'cacheUrl',
            'title',
            'titleNoFormatting',
            'content'
        ],

        proxy: {
            type: "localstorage",
            id: "Searchstore"
        },
        identifier: {
            type: 'uuid'
        },

    }
});
