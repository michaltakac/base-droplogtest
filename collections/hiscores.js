Hiscores = new Meteor.Collection('hiscores');

/*
* Allow
*/

Hiscores.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

/*
* Deny
*/

Hiscores.deny({
  insert: function(){
    return false;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return false;
  }
});