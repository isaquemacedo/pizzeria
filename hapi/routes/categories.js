'use strict';

var service = {},
  routes = [];
var fs = require('fs');
var path = require('path');
var _categories = fs.readFileSync(path.join(__dirname, '../payloads/categories.json'));

service = {
  cetegories: {
    description: 'Tamanho das pizzas',
    handler: function (req, h) {
      return h.response(_categories).code(200);
    }
  }
}

routes = [
  {
    path: '/categories',
    method: 'GET',
    config: service.cetegories
  }
];

module.exports.routes = routes;
