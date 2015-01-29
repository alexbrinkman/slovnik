import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('list', params.list_id);
  },
  afterModel: function(list) {
    return this.store.find('word');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});