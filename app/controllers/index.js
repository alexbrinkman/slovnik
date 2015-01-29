import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    lists: function(){
      this.transitionToRoute('lists');
    },
    quiz: function () {
      this.transitionToRoute('quiz');
    },
    about: function () {
      this.transitionToRoute('about');
    }
  }
});
