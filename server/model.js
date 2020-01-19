const express = require ('express');
const db = require('../database/index.js');

module.exports = {

  getStock: (id) => db.Stock.findAll({attributes: ['date', 'close']})

};
