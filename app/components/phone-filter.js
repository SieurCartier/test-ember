import Ember from 'ember';

export default Ember.Component.extend({
  value: '',
  orderBy: '',
  results: [],
  orders: [
    {value: 'name', label: 'Alphabetical'},
    {value: 'age', label: 'Newest'}
  ],

  init() {
    this._super(...arguments);
    let self = this;
    self.get('filter')('').then((results) => self.set('results', results));
    self.set('orderBy', 'age');
  },

  actions: {
    handleOrderEntry(value){
      let self = this;
      let orderAction = self.get('order');
      orderAction(value).then((orderResults) => {
          self.set('results', orderResults);
        }
      );
    },

    handleFilterEntry() {
      let self = this;
      let filterInputValue = self.get('value');
      let filterAction = self.get('filter');
      filterAction(filterInputValue).then((filterResults) => {
          self.set('results', filterResults.sort());
        }
      );
    }
  }
});
