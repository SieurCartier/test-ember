import Ember from 'ember';

export default Ember.Component.extend({

  results: {},
  mainImg: '',

  mainImgUrl: Ember.computed('mainImg', function () {
    return '/' + this.get('mainImg');
  }),

  init(){
    this._super(...arguments);
    let self = this;
    self.get('getPhone')().then((res) => {
      self.set('results', res);
      self.set('mainImg', res.images[0]);
    });
  },

  actions: {
    setImage(img) {
      this.set('mainImg', img)
    }
  }
});
