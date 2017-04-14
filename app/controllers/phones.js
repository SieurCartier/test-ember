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

      return new Ember.RSVP.Promise((resolve) => {
        self.get('model').phones.then((res) => {
          self.set('filteredPhones',res.filter((element) => {
            let reg = new RegExp(param, 'i');
            return reg.test(element.name);
          }));
          self.orderPhones();
          resolve(self.get('filteredPhones'));
        });
      });
    },

    orderPhones(param) {
      let self = this;
      self.set('orderBy', param);
      self.orderPhones();
      return new Ember.RSVP.Promise((resolve) => {
        resolve(self.get('filteredPhones'));
      });
    }
  }
});
