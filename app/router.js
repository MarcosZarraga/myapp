import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
this.route('lab',{path :'/lab'});
});

export default Router;

//se piden datos y se encarga de controlar la información 
