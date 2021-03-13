import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Main from './components/pages/Main';
import Portfolio from './components/pages/Portfolio';
import Animation from './components/pages/Animation';
import Javascript from './components/pages/Javascript';

function App() {
  return (
    <Router>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/animation" exact component={Animation} />
        <Route path="/javascript" exact component={Javascript} />
    </Router>
  );
}

export default App;
