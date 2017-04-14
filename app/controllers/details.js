import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getPhone() {
      return this.get('model').phoneDetails;
    }
  }
});
