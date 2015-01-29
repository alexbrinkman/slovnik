import Ember from 'ember';

export default Ember.Controller.extend({
  showHeaderLinks: function(){
    var currentPath = this.get('currentPath');
    if(currentPath === 'index'){
      return false;
    }
    return true;
  }.property('currentPath')
});
