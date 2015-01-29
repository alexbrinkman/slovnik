import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    create: function () {
      var title = this.get('title');
      var description = this.get('description');

      var list = this.store.createRecord('list', {
        title: title,
        description: description,
      });

      list.save();
      this.transitionToRoute('lists');
    }
  }
});