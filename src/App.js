import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import Button from './components/Button/Button';

import '../node_modules/spectre.css/dist/spectre.min.css';

class App extends Component {
  state = {
    button1Status: undefined,
    button2Status: undefined,
  };

  render() {
    const { button1Status, button2Status } = this.state;
    
    return (
      <div className="container" style={{padding: '100px'}}>
        <div style={{marginBottom: '15px'}}>
          <Button size="small" onClick={this.handleClickResolve} status={button1Status}>This will succeed</Button>
        </div>
        <div style={{marginBottom: '15px'}}>
          <Button size="small" onClick={this.handleClickReject} status={button2Status}>This will fail</Button>
        </div>
        <div style={{marginBottom: '15px'}}>
          <Button href="https://github.com" target="_blank">Go to github</Button>
        </div>
        <div style={{marginBottom: '15px'}}>
          <Button type="primary" loading>Button numero 2</Button>
        </div>
        <div style={{marginBottom: '15px'}}>
          <Router>
            <Button linkComponent={<Link to="/about">About</Link>}>Button numero 2</Button>
          </Router>
        </div>
      </div>
    );
  }

  handleClickResolve = () => {
    this.setState({
      button1Status: 'loading'
    });
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success');
      }, 1000);
    }).then(response => {
      if (response === 'success') {
        this.setState({
          button1Status: 'success'
        });
      }
    });
  };
  
  handleClickReject = () => {
    this.setState({
      button2Status: 'loading'
    });
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('error');
      }, 1000);
    })
    .catch(error => {
      this.setState({
        button2Status: 'error'
      });
    })
  };
}

export default App;
