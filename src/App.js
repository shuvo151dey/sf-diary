import React from 'react';
import './Stylesheets/base.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Components/Landing'
import {PrivateRoute} from './utility/PrivateRoute'
import CTM from './Components/ctm'
import CTH from './Components/cth'

function App() {
  return (
  	<BrowserRouter>
  		<Switch>
		    <Route exact path = '/' component = {Landing} />
		    <PrivateRoute path = '/ctm' component = {CTM} />
		    <PrivateRoute path = '/cth' component = {CTH} />
		    <Route component = {Landing} />
	    </Switch>
    </BrowserRouter>
  );
}

export default App;
