const faker = require('faker');
const db = require('./index.js');
const fetch = require('node-fetch');


const apiData = [];

const url = new URL(
  "https://api.worldtradingdata.com/api/v1/history"
);

let params = {
  "symbol": "SNAP",
  "api_token": "VretzKqIjolzJUp3UBEI0xe7gQUE222X7CLT2xC6ThDbtXRqoiVNCbvQTozP",
  "date_from": '2018-01-09',
  "date_to": '2019-01-10',
};
Object.keys(params)
  .forEach(key => url.searchParams.append(key, params[key]));
fetch(url, {
  method: "GET",
})
  .then(response => response.json())
  .then(json => {
    console.log(json.history);

    for (var i in json.history) {
      dayData = {
        "date": i,
        "open": json.history[i].open,
        "close": json.history[i].close,
        "high": json.history[i].high,
        "low": json.history[i].low,
        "volume": json.history[i].volume
      };
      apiData.push(dayData);
    }
    console.log(apiData.length);
    console.log(apiData[4]);
    db.Stock.sync({ force: false }).then(() => {
      db.Stock.bulkCreate(apiData, { logging: false });
    });
  }).catch(err =>{
    console.log(err);
  });



module.exports.apiData = apiData;

