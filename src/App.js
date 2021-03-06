import React from 'react';
import './App.css';
import Nav from './components/Nav'
import News from './components/News'
import About from "./components/About";
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
