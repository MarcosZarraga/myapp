import Ember from 'ember';

export default Ember.Controller.extend({
	cat: 'pelusa',

	weekDays : [
		'lunes',
		'martes',
		'miercoles',
		'jueves',
		'viernes',
		'sabadada',
		'dominguirri'

	],

	actions:
	 {
		doSomething() 
		{
			var cat= this.get('cat');
			console.log(cat);
		},

		valdiarUsuario()
		{
			var usuario= this.get('user');
			if(usuario=="A01271642" && this.get('password')==="1234"){
				console.log("usuario valido");
			}
			else {
				console.log("Usuario invalido");
			}

			this.set('user',"");
			this.set('password',"");
			
		},


		myLuckyDay(){
			var weekDays= this.get('weekDays');
			var n = Math.floor(Math.random() * weekDays.length);
			console.log(weekDays.objectAt(n));
		}

	}
});
