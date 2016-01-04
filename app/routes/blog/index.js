import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var blog_id = this.paramsFor('blog').blog_id;
    return this.store.findRecord('blog', blog_id);
  }
});
