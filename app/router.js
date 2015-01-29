import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('lists');
  this.resource('list', function(){
    this.route('new');
    this.route('show', {path: ':list_id'});
    this.route('update', {path: ':list_id/update'});
    this.route('delete', {path: ':list_id/delete'});
    this.route('quiz', {path: ':list_id/quiz'});
    this.resource('words', {path: ':list_id/words'}, function(){
      this.route('new');
      this.route('delete', {path:':word_id/delete'});
      this.route('update', {path:':word_id/update'});
    });
  });
  this.route('about');
});

export default Router;

