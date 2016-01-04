import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  postedData: DS.attr('date'),
  blog: DS.belongsTo('blog',{async: true}),
  text: DS.attr('string')
});
