const db = require('../database/index.js');
const model = require('./model');

module.exports = {

  getStock: (id) =>{

    return Promise.resolve(model.getStock(id));

  }

};