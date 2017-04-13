import DS from 'ember-data';

export default DS.Model.extend({
  age: DS.attr(),
  id: DS.attr(),
  imageUrl: DS.attr(),
  name: DS.attr(),
  snippet: DS.attr()
});
