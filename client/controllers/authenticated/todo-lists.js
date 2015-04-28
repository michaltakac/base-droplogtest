/*
*  Controller: Todo Lists
*  Template: /client/views/authenticated/todo-lists.html
*/

/*
* Helpers
*/

Template.todoLists.helpers({
  lists: function(){
    // Get our current user and return all of the lists in the database owned
    // by that user.
    var user  = Meteor.userId(),
        lists = TodoLists.find({"owner": user});

    // If we have lists, return them.
    if (lists) {
      return lists;
    }
  },
  dropLists: function() {
    return getAllDroplists();
  }
});

/*
* Events
*/

Template.todoLists.events({
  'click .new-droplog': function(event) {
    event.preventDefault();
    var droplist = event.currentTarget.id;
    var title = event.currentTarget.title;
    console.log(droplist)
    console.log(title)

    var list = {
      name: title + " - " + moment().format("Do MMM YYYY, HH:mm:ss"),
      bossList: droplist,
      owner: null
    }

    Meteor.call('insertTodoList', Meteor.userId(), list, function(error,response){
      if (error) {
        alert(error.reason);
      } else {
        Router.go('/lists/' + response);
      }
    });
  }
});
