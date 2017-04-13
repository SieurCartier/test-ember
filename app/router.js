import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('phones');
  this.route('details', { path: '/details/:phoneId' });
});

export default Router;
