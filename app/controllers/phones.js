import Ember from 'ember';

export default Ember.Controller.extend({

  filteredPhones: [],
  orderBy: 'age',

  orderPhones() {
    let self = this;
    self.set('filteredPhones', self.get('filteredPhones').sortBy(self.get('orderBy')));
  },

  actions: {
    filterPhones(param) {
      let self = this;

      return new Ember.RSVP.Promise((resolve, reject) => {
        self.get('model').phones.then((res) => {
          let temp = res.filter((element) => {
            let reg = new RegExp(param, 'i');
            return reg.test(element.name);
          });
          self.set('filteredPhones', temp);
          self.orderPhones();
          resolve(self.get('filteredPhones'));
        });
      });
    },

    orderPhones(param) {
      let self = this;
      self.set('orderBy', param);
      self.orderPhones();
      return new Ember.RSVP.Promise((resolve, reject) => {
        resolve(self.get('filteredPhones'));
      });
    }
  }
});
