import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    delete: function () {
      var word = this.get('model');
      word.deleteRecord();
      word.save();
      this.transitionToRoute('list.show');
    },
    keep: function(){
      this.transitionToRoute('list.show');
    }
  }
});