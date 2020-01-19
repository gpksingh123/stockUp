import React from 'react';
import axios from 'axios';


class Form extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div id="form">
        <form>
          <label>
            Name:
      <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Form;