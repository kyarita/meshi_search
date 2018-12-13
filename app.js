var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Twitter = require('twitter');
var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'dist')));

const twitClient = new Twitter({
});

app.get('/search/:word', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  twitClient.get('statuses/user_timeline', {screen_name : "muni_gurume", count : 1000}, (error, data, response) => {
    tweets = [];
    if (error || !data) {
      console.log(error);
      tweets.push({'error': error});
      res.json(tweets);
      res.end();
      return ;
    }
    console.log("=================")
    console.log(data);
    console.log("==================");
    data.forEach( content => {
      //駅名を切り出して配列にpush
      const station = content.text.slice(content.text.indexOf('：'), content.text.indexOf('駅'));
      if (station === word) {
        tweets.push({station: station, text: content.text, urls: content.entities.urls});
      }
    });
    res.json(tweets);
    res.end();
    return ;
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

//検索するツイートを整形
async function searchTweet(word) {
  let tweets = [];
  
}
module.exports = app;
