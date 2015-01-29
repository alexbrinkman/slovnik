import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {title: '', description: ''};
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
