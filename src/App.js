import React, { createContext, useState } from 'react';
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
import Login from './Components/Auth/Login/Login';
import PrivateRoute from './Components/Auth/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import OrderForm from './Components/DashBoard/OrderForm/OrderForm';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({isSignedIn: true});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
           <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/services/:title">
             <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/order">
             <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/service-list">
             <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/review">
             <DashBoard></DashBoard>
          </PrivateRoute>
           <Route exact path="/">
             <Home></Home>
           </Route>
         </Switch>
       </Router>
    </UserContext.Provider>
  );
};

export default App;
