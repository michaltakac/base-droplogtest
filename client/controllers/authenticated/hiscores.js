Template.hiscores.helpers({
  getData: function() {
    var data = Session.get('data');
    var game = Session.get('game');
    var array = _.map( skills[game], function(skillName){
      var skill = data[skillName];
      return {
               name: skillName.charAt(0).toUpperCase() + skillName.slice(1),
               rank: numeral(skill.rank).format('0,0'),
               level: skill.level,
               xp: numeral(skill.xp).format('0,0')
             };
    });
    return array;   
  }
});