import React from 'react';
import axios from 'axios';
import Line from './Line.jsx';
import Form from './Form.jsx';
import Stat from './Stat.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data : {},
      isLoggedIn : false
    }
    this.handleClick=this.handleClick.bind(this);
  }


  componentDidMount() {
    axios.get('/stock/apple').then((stocks)=> {
      console.log("I got data", stocks.data)
      let x = stocks.data;
      this.setState({data : x},()=>
      console.log("I set the state", this.state.data)
      );
    }).catch(function (err) {
      console.log("I got an error", err)
    })
  }

  handleClick(e){
    e.preventDefault()
    this.setState({isLoggedIn:true})
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let display;

    if (isLoggedIn) {
      display = <Line data = {this.state.data}></Line>
    } else {
      <h1>Stocks</h1>
    }

    return (
  <div>
    <h1 id='Title'>StockUp</h1>
    {/* <Form></Form> */}
    <div>
        <form>
          <label>
            Enter Stock Name:
      <input type="text" name="name" />
          </label>
          <button onClick={(e) => this.handleClick(e)}>
        Submit
      </button>
        </form>
      </div>
    {display}

  </div>
    );
  }
}
export default App;
