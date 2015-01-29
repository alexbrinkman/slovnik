import DS from 'ember-data';

export default DS.Model.extend({
  word: DS.attr('string'),
  definition: DS.attr('string'),
  complete: DS.attr('boolean'),
  list: DS.belongsTo('list')
});
