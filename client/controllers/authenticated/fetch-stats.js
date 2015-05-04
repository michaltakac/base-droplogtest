Template.fetchStats.events({
  'submit form': function(e) {
    event.preventDefault();
    event.stopPropagation();
    return false; 
  },
  'click .saveUsername': function(e) {
    var rsn = $("#username").val();
    var game = $("#game").val();
    Session.set('username', rsn);
    Session.set('game', game);

    Meteor.call('lookup', Session.get('username'), Session.get('game'), function(error, result) {
      if (error) {
        console.error(error);
      }
      Session.set('data', result);
    });
  }
});

Template.fetchStats.helpers({
  getRsn: function() {
    return Session.get('username');
  }
});