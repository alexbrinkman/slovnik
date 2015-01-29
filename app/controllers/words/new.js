import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['list'],

  actions: {
    create: function () {
      var word = this.get('word');
      var definition = this.get('definition');

      var listController = this.get('controllers.list');
      var list = listController.get('model');

      var newWord = this.store.createRecord('word', {
        word: word,
        definition: definition,
        complete: false,
        list: list
      });

      newWord.save();

      list.get('words').addObject(newWord);
      this.transitionToRoute('list.show');

    }
  }
});
