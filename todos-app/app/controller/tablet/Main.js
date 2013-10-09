/**
 * @class TodosApp.controller.tablet.Main
 * @extends TodosApp.controller.Main
 * El controler de nuestra version de telefono
 */
Ext.define('TodosApp.controller.tablet.Main',{
	extend:'TodosApp.controller.Main',
	config:{
		refs:{
			menuList:{
				selector:'menulist'
			}
		},
		control:{
			'menulist':{
				itemtap:'onMenuListTap'
			}
		}
	},
	onMenuListTap:function (list,index,target,record){
		switch(record.get('option')){
			case 'Pendientes': this.listarTodosPendientes(); break;
			case 'Terminados':this.listarTodosTerminados(); break;
			case 'Salir': this.onLogoutUser();break;
		}
	},	
	listarTodosPendientes:function () {
		this.getMenuList().selectRange( 0, 0,false);
		this.callParent();
	}
});