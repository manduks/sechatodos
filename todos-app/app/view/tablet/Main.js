/**
 * @class TodosApp.view.tablet.Main
 * @extends TodosApp.view.Main
 * La vista principal de nuestra version de tableta
 */
Ext.define('TodosApp.view.tablet.Main',{
	extend:'TodosApp.view.Main',
	requires:['TodosApp.view.tablet.MenuList'],
	config:{
		layout:'card',
		activeItem:0,
		items:[{
			xtype:'container',
                  baseCls:'login-background', 
			layout:{
				type:'vbox',
				align:'stretch'
			},
			defaults:{				
				flex:1
			},
			items:[{
				xtype:'container'
			},{
				xtype:'loginform',
                        baseCls:'',
				flex:2
			},{
				xtype:'container'
			}]
		},{
            xtype:'container',
            layout:{
            	type:'hbox',
            	align:'stretch'
            },
            defaults:{
            	xtype:'container'
            },
          	padding:'3 3 3 3',
            items:[{
            	style:{
            		'background-color':'#5F96BF'
            	},
            	flex:1,
            	layout:'fit',
            	items:[{
            		xtype:'menulist'
            	},{
            		docked:'top',
            		xtype:'titlebar',
            		title:'Todos App'
            	}]
            },{
            	xtype:'panel',
            	title:'Todos',
            	style:{
            		'background-color':'#FFF',
            	},
            	flex:4,
            	layout:'fit',
            	items:[{
            		xtype:'todoslist'
            	},{
            		docked: 'top',
		            xtype: 'titlebar',
		            title:'Todos',
		            items:[{
		            	iconCls:'add',
                              //cls:'btn-add',
                              ui:'btn-add-ui',
		            	align:'right',
                              itemId:'addTodo'
		            }]	            
            	}]
            }]
        }]
	}
});