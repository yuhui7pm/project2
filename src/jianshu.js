import React, { Component } from 'react';
import Header from './common/headerComponent/header.js';
import {BrowserRouter,Route} from 'react-router-dom';//4.2.2版本
import {GlobalStyle} from './style.js';
import store from './store/index.js';
import {Provider} from 'react-redux';
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write/write.js'

class App extends Component {
  render() {
    return (
    	<div>
    		<GlobalStyle/>
    		<Provider store={store}>
    				<BrowserRouter>
    					<Header/>
    					<Route path='/' exact component={Home}/>
    					<Route path='/detail/:id' exact component={Detail}/>
    					<Route path='/login' exact component={Login}/>
    					<Route path='/write' exact component={Write}/>
    				</BrowserRouter>
    		</Provider>
    	</div>
    );
  }
}
export default App;
