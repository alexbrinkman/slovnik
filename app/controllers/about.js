import Ember from 'ember';

export default Ember.ObjectController.extend({
  currentYear: function() {
    return new Date().getFullYear();
  }.property()
});
