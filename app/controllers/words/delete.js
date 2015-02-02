import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['words'],

  actions: {
    delete: function () {
      var word = this.get('model');
      word.deleteRecord();
      word.save();

      var wordsController = this.get('controllers.words');
      var list = wordsController.get('model');
      this.transitionToRoute('lists.show', list);
    },

    keep: function(){
      var wordsController = this.get('controllers.words');
      var list = wordsController.get('model');
      this.transitionToRoute('lists.show', list);
    }
  }
});