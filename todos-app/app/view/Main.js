Ext.define('TodosApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'TodosApp.form.login.LoginForm',
        'TodosApp.view.todos.TodosList',
        'Ext.TitleBar'
    ]    
});
