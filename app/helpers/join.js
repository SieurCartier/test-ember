import Ember from 'ember';

export function join(params/*, hash*/) {
  return params.join(', ');
}

export default Ember.Helper.helper(join);
