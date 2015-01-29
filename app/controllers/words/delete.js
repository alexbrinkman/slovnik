import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    delete: function () {
      var word = this.get('model');
      word.deleteRecord();
      word.save();
      this.transitionToRoute('lists.show');
    },
    keep: function(){
      this.transitionToRoute('lists.show');
    }
  }
});