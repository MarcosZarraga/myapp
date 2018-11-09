import Ember from 'ember';
// import {inject as service} from '@ember/service';

export default Ember.Component.extend({
	classNameBindings:["inShape:green:red"],

	calculator: Ember.inject.service(),

	inShape: Ember.computed(function(){
		return this.calculator.inShape;
	}),	

});
