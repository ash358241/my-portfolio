import './App.css';
import {
BrowserRouter as Router,
Switch,
Route,
Link,
 } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Navbar from './components/Navbar/Navbar';  
import Blogs from './components/Home/Blogs/Blogs';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/about">
        <About></About>
        </Route>
        <Route path="/contact">
        <Contact></Contact>
        </Route>
        <Route path="/portfolio">
        <Portfolio></Portfolio>
        </Route>
        <Route path="/blogs">
        <Blogs></Blogs>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
