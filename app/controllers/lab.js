import Ember from 'ember';

export default Ember.Controller.extend({
	cat: 'pelusa',

	tweets :[
	],

	weekDays : [
	{
		day: 'monday',
		number: '1',
		'mi propiedad':'hola'
	},
	{
		day: 'martes',
		number: '2',
		'mi propiedad':'hola'
	},
	{
		day: 'miercoles',
		number: '3',
		'mi propiedad':'hola'
	},
	{
		day: 'jueves',
		number: '4',
		'mi propiedad':'hola'
	},
	{
		day: 'viernes',
		number: '5',
		'mi propiedad':'hola'
	},
	{
		day: 'sabado',
		number: '6',
	'mi propiedad':'hola'
	},
	{
		day: 'domingo',
		number: '7',
		'mi propiedad':'hola'
	}



	],
	isSaving:false,

	actions:
	 {
		doSomething() 
		{
			var cat= this.get('cat');
			console.log(cat);
		},

		


		myLuckyDay(){
			var weekDays= this.get('weekDays');
			var n = Math.floor(Math.random() * weekDays.length);
			console.log(weekDays.objectAt(n)['day']);
		},
		addDay(){
			var newDay=this.get('newDay');
			var weekDays=this.get('weekDays');

			weekDays.pushObject({
				day: newDay,
				//number:Math.floor(Math.random()*100),
				'mi propiedad': 'hola'
			});
		},

		addTweet(){
			var newTweet=this.get('newTweet');
			var tweets=this.get('tweets');

			tweets.pushObject({
				'usuario' : 'Marcos',
				'descripcion':  newTweet
			});
			this.set('newTweet', "");	

		},

		deleteTweet(tweet)
		{
			var tweets = this.get('tweets');
			let result = confirm('Seguro weon? :( ' + tweet.descripcion);
			if(result)
			{
				tweets.removeObject(tweet);
			}
			
			
		},
		addComidita()
		{
			var comidita= this.get('comidita');
			var meal= this.store.createRecord('meal', {name: comidita});
			//var resultado=confirm("¿Añadir esta comida ? :( ");
			var isSaving= this.get('isSaving');
			this.set(isSaving, true);
			if (resultado) {
				console.log('Guardando');
				meal.save().then(()=>{
					console.log('Simona');
				}).catch((e)=>{
					console.log('Nelpas'+ e);
				}).finally(()=>{
					this.set(isSaving, false);
				})					
			}
			
		},
		editarComidita(comidita)
		{
			var resultado=confirm("¿Seguro ? :( ");
			if (resultado) {
				comidita.save();
			}
			
		},
		eliminarComidita(comidita)
		{
			var resultado=confirm("¿Seguro que quieres borrar? :( ");
			if (resultado) {
				comidita.destroyRecord();
			}
			
		}	

	}
});
