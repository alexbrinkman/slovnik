import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    delete: function(){
      var list = this.get('model');
      list.deleteRecord();
      list.save();
      this.transitionToRoute('lists');
    },
    keep: function(){
      this.transitionToRoute('lists');
    }
  }
});