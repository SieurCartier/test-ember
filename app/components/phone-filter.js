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
    let self = this;
    this._super(...arguments);
    this.get('filter')('').then((results) => self.set('results', results));
    this.set('orderBy', 'age');
  },

  actions: {
    handleOrderEntry(){
      let self = this;
      let orderSelectValue = this.get('orderBy');
      let orderAction = this.get('order');
      orderAction(orderSelectValue).then((orderResults) => {
          self.set('results', orderResults);
        }
      );
    },

    handleFilterEntry() {
      let self = this;
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => {
          self.set('results', filterResults);
        }
      );
    }
  }
});
