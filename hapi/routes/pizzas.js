'use strict';

var service = {},
  routes = [];
var fs = require('fs');
var path = require('path');
var _1 = fs.readFileSync(path.join(__dirname, '../payloads/flavors/1.json'));
var _2 = fs.readFileSync(path.join(__dirname, '../payloads/flavors/2.json'));
var _3 = fs.readFileSync(path.join(__dirname, '../payloads/flavors/3.json'));
var _notFound = fs.readFileSync(path.join(__dirname, '../payloads/flavors/notFound.json'));

service = {
  pizzas: {
    description: 'Sabores das pizzas',
    handler: function (req, h) {
      const param = req.params.type;

      switch(param) {
        case "1": 
          return h.response(_1).code(200);
          break;
        case "2": 
          return h.response(_2).code(200);
          break;
        case "3": 
          return h.response(_3).code(200);
          break;
        default: return h.response(_notFound).code(201); 
      }
    }
  }
}

routes = [
  {
    path: '/pizzas/{type}',
    method: 'GET',
    config: service.pizzas
  }
];

module.exports.routes = routes;
