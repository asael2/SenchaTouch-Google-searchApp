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
        views : ['Home'],
        stores: ['Userstore', 'Historystore'],
        models: ['User', 'Agenda'],
        refs: {
            LoginForm: 'loginform',
            loginBtn: '#loginBtn',
        },
        control: {
            loginBtn: {
                tap: 'logUser'
            }
        }    
    },
    loginUser: function(){
        var paneltab = Ext.create('searchapp.view.Main');
        Ext.getCmp('loginPanel').destroy();
        Ext.Viewport.add(paneltab);
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