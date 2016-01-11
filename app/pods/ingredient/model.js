import DS from 'ember-data';

const ingredient = DS.Model.extend({
  name: DS.attr('string'),
  potion: DS.belongsTo('potion', {async: true}, { inverse: 'ingredients' })
});

export default ingredient;