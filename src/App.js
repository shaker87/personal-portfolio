import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AboutPages from './Components/AboutPages/AboutPages';
import ServicePages from './Components/ServicePages/ServicePages';
import PortFolioPages from './Components/PortFolioPages/PortFolioPages';
import BlogPages from './Components/BlogPages/BlogPages';
import ContactPages from './Components/ContactPages/ContactPages';

const App = () => {
  return (
    <>
       <Router>
         <Switch>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route path="/about">
             <AboutPages></AboutPages>
           </Route>
           <Route path="/service">
             <ServicePages></ServicePages>
           </Route>
           <Route path="/portfolio">
             <PortFolioPages></PortFolioPages>
           </Route>
           <Route path="/blog">
             <BlogPages></BlogPages>
           </Route>
           <Route path="/contact">
             <ContactPages></ContactPages>
           </Route>
           <Route exact path="/">
             <Home></Home>
           </Route>
         </Switch>
       </Router>
    </>
  );
};

export default App;
