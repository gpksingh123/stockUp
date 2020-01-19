/* eslint-disable func-style */
const controller = require('./controller');
const express = require('express');
const fetch = require('node-fetch');
const db = require('../database/index.js')
const path = require('path');
const app = express();
const port = 3000;

function ComputeSMA(data, window_size, cb) {
  let r_avgs = [], avg_prev = 0;
  let avgAndRealSP = { avg: [],
                    data: data};
    console.log(avgAndRealSP);
  for (let i = 0; i <= data.length - window_size; i++) {
    let curr_avg = 0.00, t = i + window_size;
    for (let k = i; k < t && k <= data.length; k++) {
      curr_avg += data[k]['y'] / window_size;
    }
    r_avgs.push({ set: data.slice(i, i + window_size), y: curr_avg });
    avg_prev = curr_avg;
  }
  console.log("r_avgs", r_avgs.length, data.length);
  let obj;
  for (let i = 0; i < r_avgs.length; i++) {
      obj = {
        x: data[i].x,
        y: r_avgs[i].y.toFixed(2)
      }
      avgAndRealSP.avg.push(obj);
  }
  console.log(avgAndRealSP);
  let newAvgReal = {
    avg : avgAndRealSP.avg.reverse(),
    data: avgAndRealSP.data.reverse()
  }
  cb(newAvgReal);
  return r_avgs;
}


app.listen(port, () => {

  console.log('Server is running on: ', port);
  db.initialize();

});
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));


app.get('/stock/:stockName/', (req, res) => {
  controller.getStock(req.params).then(data => {
    console.log(data);
    let stocks = [];
    let restocks = [];
    let obj = {};
    // console.log(data[0]);
    for (var i = 0; i < data.length; i++) {
      stocks.push(data[i].dataValues);
    }
    for (var j = 0; j < stocks.length; j++) {
      obj = {
        x: stocks[j].date,
        y: Number(stocks[j].close)
      };
      restocks.push(obj);
    }
    ComputeSMA(restocks, 5, ((avgs) => {
      res.send(avgs);
    }));

  }).catch(err => console.log("ERROR", err));
});
app.get('/', (req, res) => {

  res.send(200);


});
module.exports = app;