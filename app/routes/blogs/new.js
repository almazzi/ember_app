import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.createRecord('blog');
  },
  actions:{
    saveBlog:function(newBlog){
      var _that = this;
      newBlog.save().then(function(response){
        _that.transitionTo('blogs.list');
      });
    },
    willTransition: function (transition) {
      var model = this.controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
