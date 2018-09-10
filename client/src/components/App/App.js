import React, { Component } from 'react';
import styles from './App.sass';
import { hot } from "react-hot-loader";
import {StoreConsumer} from '../../Store';
import { Route, Switch } from 'react-router-dom';

import TopNav from '../TopNav/TopNav';
import Main from '../Main/Main';

class App extends Component {
  render() {
    const {topNav} = this.props.context
    return (
      <div className={styles.App}>
        <TopNav data={topNav}/>
        <Switch>
          <Route exact path={"/"} component={Main} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(React.forwardRef((props, ref) => (
	<StoreConsumer>
		{context => <App {...props} context={context} ref={ref} />}
	</StoreConsumer>
)));
