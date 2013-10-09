Ext.define('TodosApp.controller.Main',{
	extend:'Ext.app.Controller',
	todosForm:undefined,
	config:{
		refs:{
			main:{
				selector:'main'
			},
			addButton:{
				selector:'titlebar #addTodo'
			},
			todosAddForm:{
				selector:'todosform'
			}
		},
		control:{
			'loginform':{
				logged: 'onLoginUser'
			},
			'titlebar #addTodo':{
				tap: 'showModalAddTodo'
			},
			'todosform #cancelarFormTodo':{
				tap: 'hideModalAddTodo'
			},
			'todosform #guardarTodo':{
				tap:'onSaveTodo'
			},
			'todoslist':{
				itemdoubletap:'onChangeTodoStatus',
				itemswipe:'onDeleteTodo'
			}
		}
	},
	onDeleteTodo:function (list,index,target,record) {
		var values = record.getData();

		Ext.Msg.confirm('Eliminar',
			'Quieres eliminar la tarea '+values.description,
			function (text) {
				if(text=='yes'){

					values = Ext.apply({
							auth_token: localStorage.getItem('token')
						},values);

					Ext.data.JsonP.request({
						url:'http://api-codetlan.herokuapp.com/api/api/delete_todo.json',
						params:values,
						callback:function (c, action) {
							if(action && action.response && action.response.success === true){
								Ext.getStore('Todos').remove(record);
							}
							else{
								Ext.Msg.alert('Error','Error al eliminar, intentelo de nuevo');
							}
							
						}
					});
				}
			});		
	},
	onChangeTodoStatus:function (list,index,target,record) {
		var values =  record.getData();
		
		values.done = (values.done === true) ? false : true;

		values = Ext.apply({
					auth_token: localStorage.getItem('token')
				},values);

		Ext.data.JsonP.request({
			url:'http://api-codetlan.herokuapp.com/api/api/add_todo.json',
			params:values,
			callback:function (c, action) {
				if(action && action.response && action.response.success === true){
					record.set('done',values.done);
					record.commit();
				}
				else{
					Ext.Msg.alert('Error','Error al cambiar el estatus, intentelo de nuevo');
				}				
			}
		});
	},
	onSaveTodo:function () {
		//var values = this.getTodosAddForm().getValues(),
		var values = {
				description : description,
				deadline: deadline,
				done:false
			},
			url = 'http://api-codetlan.herokuapp.com/api/api/add_todo.json';
		this.addTodoRequest(url,values);		
	},
	addTodoRequest:function (url,values) {
		var me = this;
		var params = Ext.apply({
			auth_token: localStorage.getItem('token')
		},values);

		Ext.data.JsonP.request({
			url:url,
			params:params,
			callback:function (argument) {
				Ext.getStore('Todos').load();
				me.hideModalAddTodo();
			}
		});
	},
	hideModalAddTodo:function() {
		this.getTodosAddForm().reset();
		this.todosForm.hide();
	},
	showModalAddTodo:function() {
		if(!this.todosForm){
			this.todosForm = Ext.Viewport.add({
				xtype:'panel',				
				modal:true,
				width:(Ext.os.deviceType === 'Phone') ? 300:400,
				height:340,
				layout:'fit',
				items:{
					xtype:'todosform'
				}
			});
		}
		this.todosForm.showBy(this.getAddButton());
	},
	onLoginUser:function(form,token){
		var me = this;
		localStorage.setItem('token',token);
		this.getMain().setActiveItem(1);
		Ext.getStore('Todos').load(me.listarTodosPendientes());
	},
	launch:function () {
		var me = this;
		if(localStorage.getItem('token')){
			this.getMain().setActiveItem(1);
			Ext.getStore('Todos').load(me.listarTodosPendientes());
		}
	},	
	listarTodosPendientes:function () {		
		Ext.getStore('Todos').clearFilter();
		Ext.getStore('Todos').filter('done',false);
	},
	listarTodosTerminados:function () {
		Ext.getStore('Todos').clearFilter();
		Ext.getStore('Todos').filter('done',true);
	},
	onLogoutUser:function () {
		localStorage.removeItem('token');
		this.getMain().setActiveItem(0);
	}
});