import Ember from 'ember';

export default Ember.Controller.extend({
	calculator: Ember.inject.service(),
	actions:{
		addComidita()
		{
			var comidita= this.get('comidita');
			var meal= this.store.createRecord('meal', {name: comidita});
			var resultado=confirm("¿Añadir esta comida ? :( ");
			if (resultado) {
				console.log('Guardando');
				meal.save().then(()=>{
					 this.calculator.add(comidita.totalCalories);
				}).catch((e)=>{
					console.log('Nelpas'+ e);
				});			
			}
			
		}
		

	}
});
