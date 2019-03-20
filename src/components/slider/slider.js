import React, {Component} from 'react';
import { Fade } from 'react-slideshow-image';
import './slider.css';
import Home1 from './plans.jpg';
import Home2 from './teamwork.jpg';
import Home3 from './greatjob.jpg';
 
const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}
 
class SlideShow extends Component {
  render(){
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={Home1} />
        </div>
        <h2>First Slide</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={Home2} />
        </div>
        <h2>Second Slide</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={Home3} />
        </div>
        <h2>Third Slide</h2>
      </div>
    </Fade>
  )
  }
};
export default SlideShow;