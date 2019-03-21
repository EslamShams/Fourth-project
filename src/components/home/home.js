import React, { Component } from 'react';
import './home.css';
import CountUp from 'react-countup';  


class Home extends Component {

 
  render() {
    return (
      <div>
      
      <div className="head-Home">
        
        <div className="empty-box">
      <p>Export Here Your Component</p>
    </div>
    <div className="Head">
  
  <h1>Welcome<br></br> To<br></br> My New Site</h1>
</div>
      </div>
   
      <div className="state">
      <div>
      <h1><i className="fas fa-hotel"></i></h1>
       <h2> <CountUp
    start={0}
    end={1500}
    duration={5}
    useEasing={true}
    useGrouping={true}

  /></h2>
  <h3>Companies</h3>
  </div>
  <div>
      <h1><i className="fas fa-male"></i></h1>
       <h2> <CountUp
    start={0}
    end={3000}
    duration={7}
    useEasing={true}
    useGrouping={true}
    
  /></h2>
  <h3>Clients</h3>
  
  </div>
  <div>
      <h1><i className="fas fa-user"></i></h1>
       <h2> <CountUp
    start={0}
    end={500}
    duration={3}
    useEasing={true}
    useGrouping={true}
  /></h2>
  <h3>Employees</h3>
  </div>  
       </div>
       
      
      </div>
     
     
     
    );
  }
}

export default Home;
