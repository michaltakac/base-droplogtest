/*
* Data: Remove Todo Lists
* Method for removing todo lists from the database.
*/

Meteor.methods({
  removeTodoList: function(list){
    // Check our list ID against our expected pattern.
    check(list, String);

    // If argument is valid, perform the removal. 
    TodoLists.remove(list, function(error){
      if (error) {
        console.log(error);
      } 
    });
  }
});
