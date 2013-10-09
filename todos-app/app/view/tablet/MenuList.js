/**
 * @class TodosApp.view.tablet.MenuList
 * @extends Ext.List
 *
 *	Lista del menu de nuesta aplicación para tablet
 */

Ext.define('TodosApp.view.tablet.MenuList',{
	extend:'Ext.List',
	xtype:'menulist',
	config:{
		itemTpl:'<div>{option}</div>',
		data: [
			{option:'Pendientes'},
			{option:'Terminados'},
			{option:'Salir'}
		]
	}
});