/**
 * @class TodosApp.view.phone.Main
 * @extends TodosApp.view.Main
 * La vista principal de nuestra version de telefono
 */
Ext.define('TodosApp.view.phone.Main',{
	extend:'TodosApp.view.Main',
	config: {
        layout:'card',
        activeItem:0,
        items: [{
                xtype:'loginform',
                baseCls:'login-background'
           },{
                xtype:'container',
                layout:'fit',
                items:[{
                	xtype:'todoslist'
                },{
                	xtype:'titlebar',
                	docked:'top',
                	title:'Todos',
                	items:[{
                		text:'Salir',
                		itemId:'salir',
                		align:'right'
                	},{
                		iconCls:'add',
                		align:'left',
                        ui:'btn-add-ui',
                        itemId:'addTodo'
                	}]
                },{
                	xtype:'titlebar',
                	docked:'bottom',
                	items:[{
                		text:'Pendientes',
                		itemId:'pendientes',
                        ui:'btn-danger-ui',
                		align:'left'
                	},{
                		text:'Terminados',
                		itemId:'terminados',
                        ui:'btn-done-ui',
                		align:'right'
                	}]
                }]
           }]
    }
});