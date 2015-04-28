/*
* Data: Insert Todo Lists
* Method for inserting new todo lists into the database.
*/

Meteor.methods({

  insertTodoList: function(userId, list) {
    check(list, Object);
    // Because our method needs to operate with and without a userId, make sure
    // that if one is passed, we check it against our expected pattern. If not,
    // we just get the current logged in user.
    if (userId) {
      check(userId, String);
      list.owner = userId;
    } else {
      var user = Meteor.userId();
      list.owner = user;
    }

    // Once we've confirmed the insert is valid, push the drop into the
    // collection.
    var newList = TodoLists.insert(list, function(error){
      if (error) {
        console.log(error);
      } 
    });

    return newList;
  }

});
