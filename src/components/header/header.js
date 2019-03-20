import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.css';


class Header extends Component {
  render() {
    return (
      <div >
         <header>
           <div>
             <Link exact to="/">Home</Link>
             <Link to="/gallery">Gallery</Link>
             <Link to="/forms">Forms</Link>
             <Link to="/articles">Articles</Link>
            

             
           </div>

         </header>


      </div>
    );
  }
}

export default Header;
