/*
* Controller: Signup
* Template: /client/views/public/signup.html
*/

/*
* Created
*/

Template.signup.onCreated(function(){
  // Code to run when template is created goes here.
});

/*
* Rendered
*/

Template.signup.onRendered(function(){
  $('#application-signup').validate({
    rules: {
      username: {
        required: true,
        maxlength: 20
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      username: {
        required: "Please enter your Runelytics username.",
        maxlength: "Maximum length is 20 characters."
      },
      password: {
        required: "Please enter a password to sign up.",
        minlength: "Please use at least 6 characters."
      }
    },
    submitHandler: function(){
      // Grab the customer's details.
      var customer = {
        userName: $('[name="username"]').val(),
        password: $('[name="password"]').val()
      }

      // Create the user's account.
      Accounts.createUser({
        username: customer.userName,
        password: customer.password
      }, function(error){
        if(error){
          Bert.alert(error.reason, 'danger');
        } else {
          Router.go('/lists');
          Bert.alert('Welcome!', 'success');
        }
      });
    }
  });
});

/*
* Helpers
*/

Template.signup.helpers({
  example: function(){
    // Code to run for helper function.
  }
});

/*
* Events
*/

Template.signup.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
  }
});
