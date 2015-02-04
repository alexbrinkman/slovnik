import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    lists: function(){
      this.transitionToRoute('lists');
    },
    about: function () {
      this.transitionToRoute('about');
    }
  }
});
