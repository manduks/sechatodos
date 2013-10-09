/**
 * @class  TodosApp.model.Todo
 * @extends Ext.data.Model
 *
 * Este es el modelo para los pendientes ("todos")
 */

Ext.define('TodosApp.model.Todo',{
	extend:'Ext.data.Model',
	config:{
		fields:[{
			name:'id',
			type:'int'
		},{
			name:'description',
			type:'string'
		},{
			name:'deadline',
			type:'date'
		},{
			name:'done',
			type:'boolean'
		}],
		proxy:{
			type:'jsonp',
			url:'http://api-codetlan.herokuapp.com/api/api/list_todos.json',
			reader:{
				type:'json',
				rootProperty:'todos'
			}
		}
	}
});