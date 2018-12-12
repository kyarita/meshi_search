var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const result = searchTweet('新宿', prepareTweet());
  console.log(result);
  res.render('index', { title: 'Express' });
});

//検索するツイートを整形
function prepareTweet() {
  let tweets = [];
  twitClient.get('statuses/user_timeline', {screen_name : "muni_gurume", count : 1000}, (error, data, response) => {
    if (error) {
      console.log(error);
      tweets.push[{'error': 'hogehogehugahgua'}];
      return tweets;
    }
    data.forEach( content => {
      //駅名を切り出して配列にpush
      const station = content.text.slice(content.text.indexOf('：'), content.text.indexOf('駅'));
      tweets.push({station: station, text: content.text, urls: content.entities.urls});
    });
    return tweets;
  });
}

//検索ワードでヒットしたツイートを配列に入れて返す
// word: 駅名, tweets: 整形したツイートの配列
function searchTweet(word, tweets){
  let result = [];
  tweets.forEach( tweet => { 
    if (tweet.station === word) {
      result.push(tweet);
    }
  });
  return result;
}

module.exports = router;
