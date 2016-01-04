import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('blogs', function() {
    this.route('list');
    this.route('new');
  });

  this.route('blog',{path:'/blog/:blog_id'},function(){
    this.route('new');
    this.route('list');
  });



});

export default Router;
