Ext.define('TodosApp.profile.Tablet',{
	extend:'Ext.app.Profile',

	config:{
		name:'tablet',
		namespace:'tablet',
		controllers:['Main'],
		views:['Main']
	},

	isActive: function () {
		return !Ext.os.is.Phone;
	},

	launch: function(){
		Ext.Viewport.add(Ext.create('TodosApp.view.tablet.Main'));
	}
});