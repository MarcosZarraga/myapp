import Ember from 'ember';

export default Ember.Service.extend({
	limit: null, 
	count:null,

	init(){
		this._super(...arguments);
		this.set('limit',1200);
		this.set('count',0);
	},
	add(calories){
		let count = this.get('count');
		this.set('count', count += calories);
	},
	remove(calories){
		let count= this.get('count');
		this.set('count', count-=calories);
	}, 
	inShape: Ember.computed('limit','count', function(){
		return this.get('limit')>this.get('count');
	}),
	remaining: Ember.computed('limit','count', function(){
		return this.get('limit')-this.get('count');
	}),
});
