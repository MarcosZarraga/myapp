import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr('string'),
	servings:DS.attr('number'),
	meal:DS.belongsTo('meal'),
	product:DS.belongsTo('product')



});
