var searchQ = 'Sencha touch 2';

Ext.define("searchapp.view.Searchresults", {
    extend: 'Ext.navigation.View',
    xtype: 'sresultspanel',
     config:{
    	title: 'Blog',
    	iconCls: 'star',

    	items: {
    		xtype:'list',
    		itemTpl:'<h2>{title} </h2><br>{content}',
            title: searchQ,
    		store:{
    			autoLoad:true,
                model: 'searchapp.model.Search',
    			proxy: {
    				type:'jsonp',
                    url : 'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q='+searchQ,
                            reader: {
                                type: 'json',
                                rootProperty: 'responseData.results'
                            }
    			}
    		}

    	}
    }
   
});
