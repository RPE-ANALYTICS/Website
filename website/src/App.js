import React from 'react';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Operations from './pages/Operations';
import Digital from './pages/Digital';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';

import './styles/style.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import { withRouter } from "react-router";
// const HeaderWithRouter = withRouter(NavigationBar);


function App() {
  return (
      <div className="mainContainer">
      <Router basename="/">
      <NavigationBar/>
      {/* <HeaderWithRouter /> */}
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/operations' component={Operations}></Route>
            <Route exact path='/analytics' component={Analytics}></Route>
            <Route exact path='/digital' component={Digital}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/career' component={Career}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route path="*" component={ErrorPage}></Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
