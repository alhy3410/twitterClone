TwitterClone.NewTweetController = Ember.ArrayController.extend({
  actions:{
    tweets: function(){
      var tweetDate = new Date();
      var month = tweetDate.getUTCMonth();
      month += 1;
      var date = tweetDate.getUTCDate();
      var year = tweetDate.getUTCFullYear();
      var addTweet = {id: (tweets.length + 1).toString(), tweet: this.get('tweet'), timeStamp: (month.toString() + "/" + date.toString() + "/" + year.toString())};
      tweets.addObject(addTweet);
    }
  }
});
