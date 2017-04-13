import Ember from 'ember';

export function checkmark([value]) {
  return value ? '\u2713' : '\u2718';
}

export default Ember.Helper.helper(checkmark);
