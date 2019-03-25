import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Gallery from './components/gallery/gallery';
import Form from './components/forms/form';
import Articles from './components/articles/articles';
import SlideShow from './components/slider/slider';
import './App.css';
class App extends Component {
  
 
  render() {
    
    return (
      <BrowserRouter>
      <Nav />
      <Header />
      
      <div className="App">
     <Route exact path="/" component={Home}></Route>
     <Route path="/gallery" component={Gallery}></Route>
     <Route path="/forms" component={Form}></Route>
     <Route path="/articles" component={Articles}></Route>
    
       <SlideShow />
       <footer>
       <span>&copy; A N M I</span>
       <span><i className="fab fa-facebook"></i></span>
       <span><i className="fab fa-twitter"></i></span>
       <span><i className="fab fa-instagram"></i></span>
       <span><i className="fab fa-youtube"></i></span>
       <span><i className="fab fa-linkedin"></i></span>
     </footer>
    
      
      
      </div>
      </BrowserRouter>
     
     
    );
  }
}

export default App;
