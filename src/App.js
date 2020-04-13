import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    data: null
  }
  
  componentDidMount() {
    axios
      .get("https://api.mlab.com/api/1/databases/lsat-questions/collections/logical-reasoning?apiKey=4iNzXeCdeXqVTbvK2ke2xpM8FoxnPkxD")
      .then((response) => {
        this.setState({data: response});
        console.log(response);
          }
        )
    }
  
  render() {
    return (
      <div>
        
      </div>
    );    
    
  }

}

export default App;
