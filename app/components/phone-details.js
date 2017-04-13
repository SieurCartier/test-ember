import Ember from 'ember';

export default Ember.Component.extend({
  mainImageUrl: '',
  phoneDetails: {},

  init() {
    this._super(...arguments);
    console.log(this.get('phoneId'));
    console.log(param.phoneId);
  },

  model(param){
    console.log(param);
    console.log(param.phoneId);
  },

  actions: {}

});
