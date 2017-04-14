import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return {
      phoneDetails: Ember.$.getJSON("/Phones/" + params.phoneId + '.json')
    }
  }
});
