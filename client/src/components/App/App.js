import React, { Component } from 'react';
import styles from './App.sass';
import { hot } from "react-hot-loader";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>elo</div>
    );
  }
}

export default hot(module)(App);