const Sequelize = require('sequelize');

const sequelize = new Sequelize('Stocks', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
    // This was true by default, but now is false by default
    timestamps: false
  }
});

const Stock = sequelize.define('stock', {
  date: { type: Sequelize.DATEONLY },
  open: { type: Sequelize.DECIMAL(10, 2)},
  close: { type: Sequelize.DECIMAL(10, 2)},
  high: { type: Sequelize.DECIMAL(10, 2)},
  low: { type: Sequelize.DECIMAL(10, 2)},
  volume: {type: Sequelize.INTEGER}
});



//This is called when server is running
module.exports = {
  initialize: () => {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize.sync({ force: false });
      });
  },
  Stock,
};




