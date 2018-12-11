const http    = require('http');
const fs      = require('fs'); 
const Twitter = require('twitter');

const app = http.createServer();
const twitClient = new Twitter({
});
const port = process.env.PORT || 8123;

console.log("サーバは" + port + "番ポートで走っとるで");

process.on('uncaughtException', (err) => {
    console.log(err.stack);
});

app.on('request', (req, res) => {
  if(req.url === "/" && req.method === "GET") { 
    res.writeHead(200, {"Content-Type" : "text/html"});
    searchTweet("新宿");
    res.end();
    return;
  }
  return;  
}).listen(port);

//検索するツイートを整形
function prepareTweet() {
  let tweets = [];
  twitClient.get('statuses/user_timeline', {screen_name : "muni_gurume", count : 1000}, (error, data, response) => {
    if (error) {
      console.log(error);
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

