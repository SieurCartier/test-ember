import Ember from 'ember';

export default Ember.Controller.extend({

  phones: [],
  filteredPhones: [],

  actions: {
    filterPhones(param) {
      let self = this;

      return new Ember.RSVP.Promise((resolve, reject) => {
        if (self.get('phones').length === 0) {
          $.getJSON("/Phones/phones.json").then((json) => {
            self.set('phones', json.sort((premier, deuxieme) => {
              return premier['age'] < deuxieme['age'];
            }));
            self.set('filteredPhones', self.get('phones'));
            resolve(self.get('filteredPhones'));
          });
        } else {
          self.set('filteredPhones', self.get('phones').filter((element) => {
            let reg = new RegExp(param, 'i');
            return reg.test(element.name);
          }));
          resolve(self.get('filteredPhones'));
        }
      });
    },

    orderPhones(param) {
      let self = this;

      return new Ember.RSVP.Promise((resolve, reject) => {
        self.set('filteredPhones', self.get('filteredPhones').sort((premier, deuxieme) => {
          return (param === 'age') ?
            premier[param] < deuxieme[param] :
            premier[param].localeCompare(deuxieme[param]);
        }));
        resolve(self.get('filteredPhones'));
      });
    }
  }
});
