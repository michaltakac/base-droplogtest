/*
* Controller: Login
* Template: /client/views/public/login.html
*/

/*
* Created
*/

Template.login.onCreated(function(){
  // Code to run when template is created goes here.
});

/*
* Rendered
*/

Template.login.rendered = function(){
  $('#application-login').validate({
    rules: {
      username: {
        required: true
      },
      password: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Please enter your Runelytics username to login."
      },
      password: {
        required: "Please enter your password to login."
      }
    },
    submitHandler: function(){
      // Grab the user's details.
      user = {
        userName: $('[name="username"]').val(),
        password: $('[name="password"]').val()
      }

      // Log the user in.
      Meteor.loginWithPassword(user.userName, user.password, function(error){
        if(error){
          Bert.alert(error.reason, 'danger');
        } else {
          Router.go('/lists');
          Bert.alert('Logged in!', 'success');
        }
      });
    }
  });
}

/*
* Helpers
*/

Template.login.helpers({
  example: function(){
    // Code to run for helper function.
  }
});

/*
* Events
*/

Template.login.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
  }
});
