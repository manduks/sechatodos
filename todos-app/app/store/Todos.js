/**
 * @class  TodosApp.store.Todos
 * @extends Ext.data.Store
 *
 * El store para los todos
 */

Ext.define('TodosApp.store.Todos',{
	extend:'Ext.data.Store',
	requires:['TodosApp.model.Todo'],
	config:{
		model:'TodosApp.model.Todo',
		listeners:{
			beforeload: function (store,operation, ops) {
				var obj = {
					auth_token: localStorage.getItem('token')
				};
				store.getProxy().setExtraParams(obj);
			}
		}
	}	
});