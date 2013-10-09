Ext.define('TodosApp.form.login.LoginForm',{
	extend: 'Ext.form.Panel',
	xtype: 'loginform',
	requires:[
		'Ext.form.FieldSet',
		'Ext.field.Email',
		'Ext.field.Password'
	],
	config:{
		padding:'15 15 15 15',		
		items:[
			{
				xtype:'fieldset',
				defaults:{
					required:true,
					clearIcon:true
				},
				items:[
					{
						xtype:'emailfield',
						name:'email',
						placeHolder:'Email',
						value:'armando@cursa.me'
					},{
						xtype:'passwordfield',
						name:'password',
						placeHolder:'Password',
						value:'12345678'
					}
				]
			},{
				xtype:'fieldset',
				items:[
					{
						xtype:'button',
						text:'Login',
						ui:'btn-login-ui',
						handler:function(btn){

							var form = btn.up('formpanel');
								obj = form.getValues();

							// Conexion JsonP
							Ext.data.JsonP.request({
								url:'http://api-codetlan.herokuapp.com/api/tokens/create.json',
								params:{
									email: obj.email,
									password: obj.password
								},
								callback:function(c, action){
									// 1 == '1' -> true
									// 1 === '1' -> false
									// 1 === 1 -> true
									if (action.response.success === true) {
										form.fireEvent('logged', form, action.response.auth_token);
									}
									else
									{
										Ext.Msg.alert('Error', action.response.message);
									}


								}


							});

						}
					}
					
				]

			}
		]
	}

});