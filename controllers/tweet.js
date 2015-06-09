TwitterClone.TweetController = Ember.ObjectController.extend({
  isOpen: false,
  isReplied: false,
  actions: {
    replyToTweet: function(){
      this.set('isReplied', true);
      var tweetDate = new Date();
      var month = tweetDate.getUTCMonth();
      month += 1;
      var date = tweetDate.getUTCDate();
      var year = tweetDate.getUTCFullYear();
      var repliedTweet = {id: (repliedTweets.length + 1).toString(), replyTweet: this.get('repliedTweet'), timeStamp: (month.toString() + "/" + date.toString() + "/" + year.toString())};
      repliedTweets.addObject(repliedTweet);
    },

    openReplyForm: function(){
      this.set('isOpen', true);
    }
  }
});
