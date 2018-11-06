import DS from 'ember-data';
// import {computed} from '@ember/object';

export default DS.Model.extend({
	name:DS.attr('string'),
	createdAt: DS.attr('date'),
	foods: DS.hasMany('foods'),
	foodCalories: Ember.computed('foods.@each.calories', function(){
		return this.foods.mapBy('calories');
	}),
	totalCalories: Ember.computed.sum('foodCalories')
});
