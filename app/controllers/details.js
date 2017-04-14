import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    oui() {
    return this.get('model').phoneDetails;
    }
  }
});
