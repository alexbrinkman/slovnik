import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    update: function () {
      var word = this.get('word');
      var definition = this.get('definition');
      var model = this.get('content');

      model.set('word', word);
      model.set('definition', definition);
      model.save();
      this.transitionToRoute('lists.show');
    }
  }
});