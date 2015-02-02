import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['words'],

  actions: {
    update: function () {
      var word = this.get('word');
      var definition = this.get('definition');
      var model = this.get('content');

      model.set('word', word);
      model.set('definition', definition);
      model.save();

      var wordsController = this.get('controllers.words');
      var list = wordsController.get('model');
      this.transitionToRoute('lists.show', list);
    }
  }
});