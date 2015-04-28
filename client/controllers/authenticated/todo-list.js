/*
*  Controller: Todo List
*  Template: /client/views/authenticated/todo-list.html
*/

/*
* Events
*/

Template.todoList.events({
  "click .delete": function () {
      Drops.remove(this._id);
  },
  "click .add-drop-to-db": function (event) {
      var key = event.currentTarget.title;
      var droplogId = TodoLists.findOne({});
      var dropObject = getDropTitle(key, droplogId.bossList);
      var total = dropObject.quantity * dropObject.price;

      console.log(droplogId._id)

      Drops.insert({
        droplogId: droplogId._id,
        title: dropObject.title, 
        quantity: dropObject.quantity, 
        price: dropObject.price, 
        totalPrice: total, // total price by multiplying quantity and price
        rarity: dropObject.rarity, 
        droprate: dropObject.droprate, 
        type: dropObject.type, 
        img: dropObject.img,
        game: dropObject.game,
        boss: dropObject.boss,
        npc: dropObject.npc,
        createdAt: new Date() // current time
      });
      
      setTimeout(function(){
        $("#rsdl-data").scrollTo("max", 500);
    }, 100);

      return false;
  },
  'click .delete-droplog': function() {
    var listId = this._id;
    console.log(listId)
    Meteor.call('removeTodoList', listId, function(error){
      if (error) {
        alert(error.reason);
      } else {
        Router.go('/lists');
      }
    });
  }
});

/*
* Helpers
*/

Template.todoList.helpers({
  dropImages: function() {

    switch(TodoLists.findOne({}).bossList) {
        // RS3
        case "BandosDropsRs3":
            return BandosDropsRs3;
            break;
        case "ZamorakDropsRs3":
            return ZamorakDropsRs3;
            break;
        case "SaradominDropsRs3":
            return SaradominDropsRs3;
            break;
        case "ArmadylDropsRs3":
            return ArmadylDropsRs3;
            break;
        case "ZamorakDropsRs3":
            return ZamorakDropsRs3;
            break;
        case "AraxxorDrops":
            return AraxxorDrops;
            break;
        case "NexDrops":
            return NexDrops;
            break;
        case "QbdDrops":
            return QbdDrops;
            break;
        case "RotsDrops":
            return RotsDrops;
            break;
        case "CorpDropsRs3":
            return CorpDropsRs3;
            break;
        case "TormentedDemonDropsRS3":
            return TormentedDemonDropsRS3;
            break;
        case "KalphiteKingDrops":
            return KalphiteKingDrops;
            break;
        case "KbdDropsRs3":
            return KbdDropsRs3;
            break;
        case "KalphiteQueenDropsRs3":
            return KalphiteQueenDropsRs3;
            break;
        case "VoragoDrops":
            return VoragoDrops;
            break;
        // OSRS
        case "ZulrahDrops":
            return ZulrahDrops;
            break;
        // If not met, break
        default:
            Router.go('/lists');
            break;
    }
  },
  currentTime: function() { 
    var time = setInterval( function () {
          Session.set("dateval",moment().format("HH:mm:ss"));
      }, 1000 );
      return Session.get("dateval");
  },
  itemCount: function() {
    return Drops.find({title: this.title}).count();
  },
  drops: function () {
    var loadDrops = Drops.find({}).fetch(),
        getDrops  = _.map(loadDrops, function(d, index) {
         return {
          _id: d._id,
          number: index+1,
          title: d.title,
          quantity: gpFormat(d.quantity), 
            price: kmFormat(d.price), 
            totalPrice: kmFormat(d.totalPrice), // total price by multiplying quantity and price
            rarity: d.rarity, 
            droprate: gpFormat(d.droprate), 
            type: d.type, 
            img: d.img, 
            createdAt: moment(d.createdAt).format("HH:mm:ss")
           };
    }); 
    return getDrops;
  },
  dropCount: function() {
      return Drops.find().count();   
  },
  totalGp: function() {
    var total = _.reduce(_.map(Drops.find({}).fetch(), function(doc){
                  //map
                  return doc.totalPrice
                }), function(memo, num){ 
                  //reduce
                  return memo + num;
                }, 0);
    return gpFormat(total);
  }
});
