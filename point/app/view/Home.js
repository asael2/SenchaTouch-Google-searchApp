var homeView = Ext.define('searchapp.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homepanel',
		
	config:{
		cardSwitchAnimation: 'slide',
		title: 'Home',
    	iconCls: 'home',
		scrollable: true,
		styleHtmlContent: true,
    	items: [
	    	{
    			html: [
	            '<h1>Welcome to Search Application</h1>',
	            '<br>','<br>','<br>',
	            '<p>Please Login here:</p>'
	        	].join("")
	    	},
	    	{
		    	xtype: 'loginform',
		    	id:'userLogin',
	            height: '300px',
	            scrollable: false
			}
		]
	}

	
});

Ext.define('searchapp.form.Panel', {
	extend: 'Ext.form.Panel',
	xtype: 'loginform',
	id: 'userLoginForm',

	config: {
		title: 'Login',
		name:'laUserLoginForm',
		items: [
	    	//login form fields
	    	{
				xtype:'fieldset',
				id: 'userLoginFields',
				instructions: '(user1 / pass1)',
				items: [
		        	{
			        	xtype: 'textfield',
			        	name: 'uname',
			        	placeHolder: 'Username'
			        },
			        {
			        	xtype: 'passwordfield',
			        	name: 'upass',
			        	placeHolder: 'Password'
			        }	
	        	]
			},			
			//submit button
			{
				xtype: 'button',
				id: 'loginBtn',
				text: 'log in',
				formBind: true,
				ui: 'confirm'
				/*,handler: function() {
				    var values = this.up('loginform').getValues();     
				}*/
			}
		]
	}

});