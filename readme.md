## koa-grace-model

KOA-grace绑定默认controller组件，需要与koa-grace-router配合使用（use时放在koa-grace-router之前）

### Install

    $ npm install koa-grace-model --save

### Usage

```
ctrl(app, options)
```
- app: {Object} koa instance.
- options: {Object|String->root}
  - root: {String} model directory

**app.js**

```
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
```

### Test

    npm test

### License

MIT