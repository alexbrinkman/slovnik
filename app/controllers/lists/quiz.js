import Ember from 'ember';

export default Ember.ObjectController.extend({

  word : null,
  remaining : null,
  totalCount : null,
  isStarted : false,
  isComplete : false,
  hasWords: false,

  inProcess: function() {
    return this.get('isStarted') && !this.get('isComplete');
  }.property('isStarted', 'isComplete'),

  hasWordsUpdate: function() {
    var self = this;
    this.get('words').then(function(words){
      self.set('hasWords', words.get('length') > 0);
    });
  }.observes('words'),

  actions: {

    start: function(){
      this.set('isStarted', true);
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
    },

    restart: function(){
      this.get('words').then(function(words){
        words.setEach('complete', false);
      });
      this.set('isComplete', false);
      this._getRandomWord();
    }
  },

  _getRandomWord : function(){
    var self = this;
    this.get('words').then(function(words){
      var wordsLeft = words.filterBy('complete', false);
      var remaining = wordsLeft.length;

      if(remaining === 0){
        self.set('isComplete', true);
        self.set('remaining', remaining);
        self.set('totalCount', words.get('length'));
      }

      var randomNumber = Math.floor(Math.random() * remaining);
      var chosenWord = wordsLeft.objectAt(randomNumber);
      self.set('word', chosenWord);
      self.set('remaining', remaining);
      self.set('totalCount', words.get('length'));
    });
  }

});