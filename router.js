TwitterClone.Router.map(function(){
  this.resource('tweets', {path: '/'});
  this.resource('tweet', {path: 'tweet/:tweet_id'});
  this.resource('newTweet');
});
