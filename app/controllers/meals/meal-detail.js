import Ember from 'ember';

export default Ember.Controller.extend({
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
					this.transitionToRoute("meals")
				}).catch((e)=>{
					console.log(e);
				})
			}
			
		}	
	}
});
