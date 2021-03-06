import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('word', params.word_id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
