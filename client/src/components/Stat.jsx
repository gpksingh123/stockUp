import React from 'react';
import axios from 'axios';


class Stat extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
     <div id = "right">
         <div id="Stats">

          <h1><a href="http://www.snap.com/en-US/news">Snap</a></h1>
          <h3>Open	6.05</h3>
          <h3>High	6.11</h3>
          <h3>Low	6.01</h3>
          <h3>Mkt cap	25.20B</h3>
          <h3>Prev close	5.99</h3>
          <h3>52-wk high	18.36</h3>
          <h3>52-wk low	5.63</h3>
        </div>
        <div>
          <h1>Prediction</h1>
          <h3>Predicted Stock Price Next Week: 6.45</h3>
          <h3>Reccomendation: Buy Now</h3>

        </div>
     </div>





    );
  }
}
export default Stat;