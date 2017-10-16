// BrowserRouter, the root routing component, that keeps your UI in sync with URL and
// Route, which is responsible for rendering a component in your app, when the URL matches its path.
// ReactRoute custom components just like a regular react components you can render
// <Switch></Switch> lets you search for the matching component, if it doesn't finds any url it renders not found route
// :routeData lets you use data form url to render through the app
// Inside featured component match obejct being passed that lets you access the url with information about the route
// Inside Home Component Form has input field which has ref={} attribute which has a call back function to return the submitted values from the form field
// Inside Home Component history object has a method called push() which allows to pass url that you want to render 

import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (//BrowserRoute lets you load the component according to the URL
// Quickest way to create a route by by specifying the path and component inside a <Route/> element
// "Path" specifyies what URL to match and "Component" specifies what component will be used
// Exact instructs the router to render the component only when the path matches the URL exactly, so only when it's a forward slash.
// render={ () => <About title='About' /> } renders the function that returns component is another way to route the url and you can pass props 
// to the function using render()
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={ () => <About title='About' /> } />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} /> 
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;




