import Ember from 'ember';

export default Ember.Component.extend({

  results: {},
  mainImg: '',

  init(){
    this._super(...arguments);
    let self = this;
    this.get('oui')().then((res) => {
      self.set('results', res);
      self.set('mainImg', res.images[0]);
    });
  },

  mainImgUrl: Ember.computed('mainImg', function () {
    return '/' + this.get('mainImg');
  }),

  actions: {
    setImage(img) {
      this.set('mainImg', img)
    }
  }
});
