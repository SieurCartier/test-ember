import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('phone-filter', 'Integration | Component | phone filter', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{phone-filter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#phone-filter}}
      template block text
    {{/phone-filter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
