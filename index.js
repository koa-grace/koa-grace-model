'use strict';

const debug = require('debug')('koa-grace:model');

/**
 * 生成路由控制
 * @param  {string} app     context
 * @param  {object} options 配置项
 *         {string} options.root model路径
 * @return {function}       
 */
function model(app, options) {

  const root = options.root + '/defaultCtrl';

  return function* ctrl(next) {
    if (this.bindDefault) return yield next

    let dc = require(root);

    /**
    * bindDefault
    */
   
    Object.assign(this, {
      bindDefault: dc
    })

    yield next;
  };
};

module.exports = model