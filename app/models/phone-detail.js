import DS from 'ember-data';

export default DS.Model.extend({
  additionalFeatures: DS.attr(),
  android: DS.attr(),
  availability: DS.attr(),
  battery: DS.attr(),
  camera: DS.attr(),
  connectivity: DS.attr(),
  description: DS.attr(),
  display: DS.attr(),
  hardware: DS.attr(),
  id: DS.attr(),
  images: DS.attr(),
  name: DS.attr(),
  sizeAndWeight: DS.attr(),
  storage: DS.attr()
});
