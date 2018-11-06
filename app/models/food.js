import DS from 'ember-data';
// import {computed} from '@ember/object'; 

export default DS.Model.extend({
	name:DS.attr('string'),
	servings:DS.attr('number'),
	meal:DS.belongsTo('meal'),
	product:DS.belongsTo('product'),

	calories: Ember.computed('servings', 'product.calories', function(){
		return this.servings * this.product.get('calories')
	})


});
