import Ember from 'ember';

export default Ember.Object.extend({
  render(schema, component) {
    component.$().alpaca(schema);
  }
})
