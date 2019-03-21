import React,{Component} from 'react';
import './form.css';
let firstForm = document.getElementsByTagName('form'),
     head = document.getElementsByTagName('h1');


class Form extends Component{
    disForm=()=>{
            if(firstForm[0].style.display="none"){
                firstForm[0].style.display="block";
                firstForm[1].style.display="none";
                head[0].style.display="none";
                head[1].style.display="none";
                

            }
        
    }
   disForm2=()=>{
        if(firstForm[1].style.display="none"){
            firstForm[1].style.display="block";
            firstForm[0].style.display="none";
            head[0].style.display="none";
            head[1].style.display="none";

        }
    
}
    render(){
    return(
        <div className="forms">
        <div class="moudel">
        <span onClick={this.disForm}>Full Form</span>
        <span onClick={this.disForm2}>Log In Form</span>

        </div>
        <div className="forms-comp">
        <h1>Export Your Form</h1>
        <h1>Here &#8631;</h1>
        <form className="wow bounceInUp" data-wow-duration="2s">
        <label >Email</label>
      <input type="email" placeholder="Type Your email.."></input>
      <input type="email" placeholder="Type Your email.."></input>
    
      <label>Password</label>
      <input type="password" placeholder="Password"></input>
    
  
  
    <label >Address</label>
    <input type="text" placeholder="1234 Main St"></input>
  
    <label>Address 2</label>
    <input type="text"  placeholder="Apartment, studio, or floor"></input>
      <label >City</label>
      <input type="text" placeholder="cairo" ></input>
      <label >Zip</label>
      <input type="text" placeholder="02" ></input><br></br>
  <button type="submit" >Sign in</button>
</form>
<form className="wow slideInLeft" data-wow-duration="2s" >
  <label>Email</label>
  <input type="email" placeholder="Your Email.."></input>
  <input type="email" placeholder="Your Email.."></input>
  <label>Password</label>
  <input type="password" placeholder="Your Password.."></input><br></br>
  <button type="submit">Login</button>
</form>
        
        </div>


        </div>
    )
    }
};
export default Form;