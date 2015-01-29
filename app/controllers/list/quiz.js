import Ember from 'ember';

export default Ember.ObjectController.extend({

  word : null,
  remaining : null,
  totalCount : null,

  actions: {

    start: function(){
      Ember.$('button').toggle();
      this._getRandomWord();
    },

    show: function(){
      Ember.$('#definition').show();
    },

    correct: function(){
      Ember.$('#definition').hide();
      var word = this.get('word');
      word.set('complete', true);
      word.save();
      this._getRandomWord();
    },

    incorrect: function(){
      Ember.$('#definition').hide();
      this._getRandomWord();
    }
  },

  _getRandomWord : function(){
    var self = this;
    this.get('words').then(function(words){
      var wordsLeft = words.filterBy('complete', false);
      var remaining = wordsLeft.length;
      var randomNumber = Math.floor(Math.random() * remaining);
      var chosenWord = wordsLeft.objectAt(randomNumber);
      self.set('word', chosenWord);
      self.set('remaining', remaining);
      self.set('totalCount', words.get('length'));
    });
  }

});