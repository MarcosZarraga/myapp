import Ember from 'ember';

export default Ember.Controller.extend({
	actions :
	{
		valdiarUsuario()
		{
			var usuario= this.get('user');
			if(usuario=="A01271642" && this.get('password')==="1234"){
				this.transitionToRoute('lab');	
				console.log("usuario valido");
			}
			else {
				alert('invalid user');
				console.log("Usuario invalido");
			}

			this.set('user',"");
			this.set('password',"");
			
		}
	}
	
});
