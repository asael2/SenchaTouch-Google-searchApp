Ext.define('searchapp.controller.Main', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.form.Panel',
        'Ext.DataView',
        'Ext.List',
        'Ext.data.Store',
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.data.identifier.Uuid',
    ], 
    config: {    
        views : ['Home', 'Main', 'Search', 'Searchresults'],
        stores: ['Userstore', 'Searchstore', 'Historystore'],
        models: ['User', 'Search', 'Agenda'],
        refs: {
            TabsPanel: '#tabsPanel',
            LoginForm: 'loginform',
            loginBtn: '#loginBtn',
            searchBtn: '#searchBtn',
            LaNavBar: '#navBar'
        },
        control: {
            loginBtn: {
                tap: 'logUser'
            }
        }    
    },
    loginUser: function(){
        this.getTabsPanel().setActiveItem(1); //default loggedin panel
        
    },

    logUser: function() {
        var loginData, user, password;        
        var userfound = false;
        loginData = this.getLoginForm().getValues();
        user = loginData.uname;
        password = loginData.upass ;
        elStore = Ext.getStore('Userstore');

        elStore.each(function(item){
                    if (item.data.uname == user){
                        userfound = true;
                        if (item.data.upass == password){
                            this.loginUser();                        
                        };
                       return false;               
                    }
        },this); //each eof

        if ( userfound == false){
            Ext.Msg.alert("Please check Username/Password");   
        };

    }
});