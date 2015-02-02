import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('list', params.list_id);
  },
  afterModel: function() {
    return this.store.find('word').then(function(words) {
      words.forEach(function(word) {
        word.set('complete', false);
      });
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
