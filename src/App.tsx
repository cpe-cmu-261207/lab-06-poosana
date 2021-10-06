import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About';
import Current from './components/Current';
import Historical from './components/History';
import Result from './components/Result';

function App() {
  return (
    <Router>
    <Navbar />

    <Switch>
       {/* template for /current */}
      <Route exact path='/'>
        <Current/>
      </Route>

      <Route path='/current'>
        <Current/>
      </Route>

      {/* template for /history/select */}
      <Route path='/history/select'>
        <Historical/>
      </Route>

       {/* template for /history/result */}
      <Route path='/history/result'>
        <Result/>
      </Route>

      {/* template for about me */}
      <Route path='/about'>
        <About />
      </Route>

    </Switch>

    
  </Router>
  );
}

export default App;
