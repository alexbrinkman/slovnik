import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['words'],

  actions: {
    create: function () {
      var word = this.get('word');
      var definition = this.get('definition');

      var wordsController = this.get('controllers.words');
      var list = wordsController.get('model');

      var newWord = this.store.createRecord('word', {
        word: word,
        definition: definition,
        complete: false,
        list: list
      });

      newWord.save();

      debugger;
      list.get('words').addObject(newWord);
      this.transitionToRoute('lists.show', list);
    }
  }
});
