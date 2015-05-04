/*
* Routes: Authenticated
* Routes that are only visible to authenticated users.
*/

Router.route('fetchStats', {
  path: '/hiscores',
  template: 'fetchStats',
  onBeforeAction: function(){
    Session.set('currentRoute', 'hiscores');
    this.next();
  }
});

Router.route('todoLists', {
  path: '/lists',
  template: 'todoLists',
  subscriptions: function(){
    var subs = [
      Meteor.subscribe('userLists')
    ]
    return subs;
  },
  onBeforeAction: function(){
    Session.set('currentRoute', 'lists');
    this.next();
  }
});

Router.route('todoList', {
  path: '/lists/:_id',
  template: 'todoList',
  subscriptions: function(){
    var subs = [
      Meteor.subscribe('list', this.params._id),
      Meteor.subscribe('drops', this.params._id)
    ]
    return subs;
  },
  data: function(){
    return TodoLists.findOne({"_id": this.params._id});
  },
  onBeforeAction: function(){
    Session.set('currentRoute', 'todoLists');
    this.next();
  }
});
