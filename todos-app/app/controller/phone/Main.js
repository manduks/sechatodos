/**
 * @class TodosApp.controller.phone.Main
 * @extends TodosApp.controller.Main
 * El controler de nuestra version de telefono
 */
Ext.define('TodosApp.controller.phone.Main',{
	extend:'TodosApp.controller.Main',
	config:{
		control:{
			'titlebar #pendientes':{
				tap:'listarTodosPendientes'
			},
			'titlebar #terminados':{
				tap:'listarTodosTerminados'
			},
			'titlebar #salir':{
				tap:'onLogoutUser'
			}
			// de esta manera podemos cubrir los casos de arriba
			// 'titlebar button':{ 
			// 	tap:'listarTodosPendientes'
			// }
		}
	}
});