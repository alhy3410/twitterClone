TwitterClone.TweetsRoute = Ember.Route.extend({
  model: function(){
    return tweets;
  }
});
