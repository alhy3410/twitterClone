TwitterClone.Router.map(function(){
  this.resource('tweets', {path: '/'});
  this.resource('tweet', {path: 'tweet/:tweet_id'}, function() {
    this.resource('replies');
  });
  this.resource('newTweet');
});
