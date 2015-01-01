var express = require('express');
//* Use yo-angular's static files
// var routes = require('./routes');
// var user = require('./routes/user');
var http = require('http');
var path = require('path');

//+
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//* Use yo-angular's static files
//- var routes = require('./routes/index');
//- var users = require('./routes/users');
//=

var app = express();

//- all environments
//- app.set('port', process.env.PORT || 3000);
//+ view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//* Use yo-angular's favicon.ico
//- app.use(express.favicon());
//+ uncomment after placing your favicon in /public
//+ app.use(favicon(__dirname + '/public/favicon.ico'));

//-
// app.use(express.logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.methodOverride());
// app.use(app.router);
//=

//+
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//=

//* Use yo-angular's static files
//- app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  //- app.use(express.errorHandler());
  //*
  app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
  app.use(express.static(path.join(__dirname, '.tmp')));
  app.use(express.static(path.join(__dirname, 'app')));
} else {
  app.use(express.static(path.join(__dirname, 'dist')));
}

//* Use yo-angular's static files
//- app.get('/', routes.index);
//- app.get('/users', user.list);

//-
// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });
//=

//+
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
//=
