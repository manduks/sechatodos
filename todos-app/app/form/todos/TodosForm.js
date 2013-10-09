/**
 * @class  TodosApp.form.todos.TodosForm
 * @extends Ext.form.Panel
 * el formulario para dar de alta todos
 */

Ext.define('TodosApp.form.todos.TodosForm',{
	extend:'Ext.form.Panel',
	xtype:'todosform',

	requires:[
		'Ext.field.TextArea',
		'Ext.field.DatePicker'
	],

	config:{		
		items:[{
			xtype:'fieldset',
			defaults:{
				required:true,
				clearIcon:true
			},
			items:[{
				xtype:'textareafield',
				name:'description',
				placeHolder:'Descripción',
				listeners:{
					change:function (f, newValue, oldValue, eOpts) {						
						description = newValue;
					}
				}
			},{
				xtype:'datepickerfield',
				name:'deadline',
				value:new Date(),
				listeners:{
					change:function (f, newValue, oldValue, eOpts) {						
						deadline = newValue;
					}
				}
			}]
		},{
			xtype:'fieldset',
			padding:5,
			margin:5,
			items:[{
				xtype:'button',
				text:'Guardar',
				//ui:'confirm',
				cls:'btn-success',
				itemId:'guardarTodo'
			}]
		},{
			xtype:'fieldset',
			padding:5,
			margin:5,
			items:[{
				xtype:'button',
				text:'Cancelar',
				//ui:'decline',
				cls:'btn-cancel',
				itemId:'cancelarFormTodo'
			}]
		}]
	}
});