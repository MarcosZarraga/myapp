import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addComidita()
		{
			var comidita= this.get('comidita');
			var meal= this.store.createRecord('meal', {name: comidita});
			var resultado=confirm("¿Añadir esta comida ? :( ");
			if (resultado) {
				console.log('Guardando');
				meal.save().then(()=>{
					console.log('Simona');
				}).catch((e)=>{
					console.log('Nelpas'+ e);
				});			
			}
			
		}
		

	}
});
