import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(params){
		return RSVP.hash(
				{
					meal: this.store.findRecord('meal', params.id),
					foods: this.store.query('food',{meal_id:params.id}),
					products: this.store.findAll('product')
				}
			);
		// return this.store.findRecord('meal', params.id),
		

	}
});
