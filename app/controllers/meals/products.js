import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addProduct(){
			var name = this.get("name");
			var calories = this.get("calories");
			var product= this.store.createRecord('product', {name, calories});
			product.save().then(()=>{
				this.set('name',"");
				this.set('calories',"");
			})
		}
	}
});
