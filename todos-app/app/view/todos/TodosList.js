/**
 * @class  TodosApp.view.todos.TodosList
 * @extends Ext.List
 * Lista para mostrar los todos de nuestra aplicación
 */
Ext.define('TodosApp.view.todos.TodosList',{
	extend:'Ext.List',
	alias:'widget.todoslist',
	//xtype:'todoslist',
	requires:['Ext.plugin.PullRefresh'],
	config:{
		scrollable:{
			direction:'vertical'
		},
		itemTpl:'<div>{description}</div>',
		store:'Todos',
		plugins:[{
			type:'pullrefresh',
			pullText: 'Bajar para cargar mas pendientes'
		}]
	}
});