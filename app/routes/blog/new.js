import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    var blog_id = this.paramsFor('blog').blog_id;
    var blog = this.store.findRecord('blog',blog_id);
    return Ember.RSVP.hash({
      newPost:this.store.createRecord('post'),
      blog:blog
    });
  },
  users: Ember.computed.alias('model.users'),
  newProject: Ember.computed.alias('model.newPost'),

  actions: {
    savePost: function (newPost) {
      var _that = this;

      newPost.save().then(function (response) {
        _that.transitionTo('/');
      })
    },

    willTransition: function (transition) {
      var model = this.controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
