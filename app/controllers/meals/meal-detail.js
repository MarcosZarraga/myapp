import Ember from 'ember';

export default Ember.Controller.extend({

	calculator: Ember.inject.service(),
	actions:{
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
				comidita.destroyRecord().then(()=>{
					 this.calculator.remove(comidita.totalCalories);
					this.transitionToRoute("meals");

				}).catch((e)=>{
					console.log(e);
				})
			}
			
		}	
	}
});
