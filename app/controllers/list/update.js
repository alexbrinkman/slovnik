import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    update: function () {
      var title = this.get('title');
      var description = this.get('description');
      var list = this.get('content');

      list.set('title', title);
      list.set('description', description);
      list.save();
      this.transitionToRoute('lists');
    }
  }
});