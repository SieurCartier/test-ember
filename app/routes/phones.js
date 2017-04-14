import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      phones: Ember.$.getJSON("/Phones/phones.json")
    }
  }
});
