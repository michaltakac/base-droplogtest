Drops = new Meteor.Collection('drops');

/*
* Allow
*/

Drops.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return true;
  }
});

/*
* Deny
*/

Drops.deny({
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