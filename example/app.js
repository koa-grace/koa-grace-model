var koa = require('koa');
var ctrl = require('..');
var router = require('koa-grace-router');

var app = koa();

app.use(ctrl(app, {
  root: './example/model'
}));

app.use(router(app, {
  root: './example/controller'
}));

app.listen(3000, function() {
  console.log('Listening on 3000!');
});