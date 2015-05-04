/*
* Methods: Hiscores lookup
* Methods for getting hiscore stats.
*/

Meteor.methods({  
  lookup: function(player, game) {
    check(player, String);
    check(game, String);

    if (!urls.hasOwnProperty(game)) {
      game = 'rs3';
    }
    var url = urls[game].concat(encodeURIComponent(player));
    result = Meteor.http.get(url);
    $ = cheerio.load(result.content);
    body = $.html();
    parsed = Meteor.call('parseStats', body, skills[game]);
    return parsed;
  },
  parseStats: function(raw, skillsList) {
    check(raw, String);
    check(skillsList, Array);

    var stats = raw.split('\n').slice(0, skillsList.length);
    var statsObj = { };
    stats.forEach(function(stat, index) {
      var chunk = stat.split(',');
      statsObj[skillsList[index]] = {
        rank: +chunk[0],
        level: +chunk[1],
        xp: +chunk[2]
      };
    });
    return statsObj;
  }
});