import React, { Component } from 'react';
import './gallery.css';
import Sky from './anders-jilden-89745-unsplash.jpg';
import darkRo from './jonatan-pie-234237-unsplash.jpg';
import flower1 from './cody-davis-259003-unsplash.jpg';
import flower2 from './denise-chan-21350-unsplash.jpg';
import cool1 from './robert-katzki-340194-unsplash.jpg';
import cool2 from './tyler-lastovich-225321-unsplash.jpg';
import cute1 from './jonas-vincent-2717-unsplash.jpg';
import cute2 from './krista-mangulsone-53122-unsplash.jpg';



let mySpans = document.getElementsByTagName('span'),
    myImgBox = document.getElementsByTagName('img');

class Gallery extends Component {
        state={
                IsToggle1 : false,
                IsToggle2 : false,
                IsToggle3 : false,
                IsToggle4 : false

        }
              
    
natureComp = ()=>{
        let {IsToggle1} = this.state.IsToggle1;
         if(IsToggle1) {
                mySpans[5].style.display ="none";
                mySpans[6].style.display ="none";
                let {IsToggle1} = this.state.IsToggle1; 
                this.setState({
                        IsToggle1 : !IsToggle1
                })
         }
         else{
                mySpans[5].style.display ="block";
                mySpans[6].style.display ="block";
                let {IsToggle1} = this.state.IsToggle1; 
                this.setState({
                        IsToggle1 : !IsToggle1
                })
         }
              

                
}

sky=()=>{
      
        myImgBox[0].style.display="block";
        myImgBox[1].style.display="none";
        myImgBox[2].style.display="none";
        myImgBox[3].style.display="none";
        myImgBox[4].style.display="none";
        myImgBox[5].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";

      

    
}
darkRoad=()=>{
    
        myImgBox[1].style.display="block";
        myImgBox[0].style.display="none";
        myImgBox[2].style.display="none";
        myImgBox[3].style.display="none";
        myImgBox[4].style.display="none";
        myImgBox[5].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";

      
}
         
flowerComp = ()=>{
    
        let {IsToggle2} = this.state.IsToggle2;
        if(IsToggle2) {
               mySpans[8].style.display ="none";
               mySpans[9].style.display ="none";
               let {IsToggle2} = this.state.IsToggle2; 
               this.setState({
                IsToggle2 : !IsToggle2
        })
        }
        else{
               mySpans[8].style.display ="block";
               mySpans[9].style.display ="block";
               let {IsToggle2} = this.state.IsToggle2; 
               this.setState({
                IsToggle2 : !IsToggle2
        })
        }
            
        }      
flo1=()=>{
    
        myImgBox[2].style.display="block";
        myImgBox[1].style.display="none";
        myImgBox[0].style.display="none";
        myImgBox[3].style.display="none";
        myImgBox[4].style.display="none";
        myImgBox[5].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";

      
}
flo2=()=>{
    
        myImgBox[3].style.display="block";
        myImgBox[1].style.display="none";
        myImgBox[0].style.display="none";
        myImgBox[2].style.display="none";
        myImgBox[4].style.display="none";
        myImgBox[5].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";

      
}         
            
coolComp = () =>{
    
        let {IsToggle3} = this.state.IsToggle3;
        if(IsToggle3) {
               mySpans[11].style.display ="none";
               mySpans[12].style.display ="none";
               let {IsToggle3} = this.state.IsToggle3; 
               this.setState({
                IsToggle3 : !IsToggle3
        })
        }
        else{
               mySpans[11].style.display ="block";
               mySpans[12].style.display ="block";
               let {IsToggle3} = this.state.IsToggle3; 
               this.setState({
                IsToggle3 : !IsToggle3
        })
        }
    
        }
       
col1=()=>{
    
        myImgBox[4].style.display="block";
        myImgBox[1].style.display="none";
        myImgBox[0].style.display="none";
        myImgBox[3].style.display="none";
        myImgBox[2].style.display="none";
        myImgBox[5].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";
        
              
        }         
col2=()=>{
   
         myImgBox[5].style.display="block";
         myImgBox[1].style.display="none";
         myImgBox[0].style.display="none";
         myImgBox[3].style.display="none";
         myImgBox[2].style.display="none";
         myImgBox[4].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";
                
                      
                }         
                       
cuteComp = () =>{
        let {IsToggle4} = this.state.IsToggle4;
        if(IsToggle4) {
               mySpans[14].style.display ="none";
               mySpans[15].style.display ="none";
               let {IsToggle4} = this.state.IsToggle4; 
               this.setState({
                IsToggle4 : !IsToggle4
        })
        }
        else{
               mySpans[14].style.display ="block";
               mySpans[15].style.display ="block";
               let {IsToggle4} = this.state.IsToggle4; 
               this.setState({
                IsToggle4 : !IsToggle4
        })
        }  
    
        }      
cut1=()=>{
     
         myImgBox[6].style.display="block";
         myImgBox[1].style.display="none";
         myImgBox[0].style.display="none";
         myImgBox[3].style.display="none";
         myImgBox[2].style.display="none";
         myImgBox[4].style.display="none";
         myImgBox[5].style.display="none";
         myImgBox[7].style.display="none";
                         
      
             }    
cut2=()=>{
     
         myImgBox[7].style.display="block";
         myImgBox[1].style.display="none";
         myImgBox[0].style.display="none";
         myImgBox[3].style.display="none";
         myImgBox[2].style.display="none";
         myImgBox[4].style.display="none";
         myImgBox[5].style.display="none";
         myImgBox[6].style.display="none";
                                    
                 
                        }    
             


    render(){
        let {IsToggle1} = this.state.IsToggle1;
        let {IsToggle2} = this.state.IsToggle2;
        let {IsToggle3} = this.state.IsToggle3;
        let {IsToggle4} = this.state.IsToggle4;
       
        return(
             <div className="gallery">
                <div className="component">
                <span onClick={this.natureComp}>Nature {IsToggle1 ? <i class="fas fa-arrow-circle-up"></i> : <i class="fas fa-arrow-alt-circle-down"></i>}</span>
                <span onClick={this.sky}>Sky</span>
                <span onClick={this.darkRoad}>Dark Road</span>
                
               
                <span onClick={this.flowerComp}>Flower {IsToggle2 ? <i class="fas fa-arrow-circle-up"></i> : <i class="fas fa-arrow-alt-circle-down"></i>}  </span>
                
                <span onClick={this.flo1}>Zoom In Single Flower</span>
                <span onClick={this.flo2}>Mixed Color Flowers</span>
                
                
                <span onClick={this.coolComp}>Cool {IsToggle3 ? <i class="fas fa-arrow-circle-up"></i> : <i class="fas fa-arrow-alt-circle-down"></i>}  </span>
                
                <span onClick={this.col1}>ColorFull Wall</span>
                <span onClick={this.col2}>ColorFull Circle</span>
                
                
               
                <span onClick={this.cuteComp}>Cute {IsToggle4 ? <i class="fas fa-arrow-circle-up"></i> : <i class="fas fa-arrow-alt-circle-down"></i>}  </span>
                
                <span onClick={this.cut1}>Cat</span>
                <span onClick={this.cut2}>cute cat and dog</span>
                </div>
                
                
                <div className="img-comp">
                <img src={Sky} alt="img1" className="wow slideInLeft" data-wow-duration="2s"></img>
                <img src={darkRo} alt="img2" className="wow slideInLeft" data-wow-duration="2s"></img>
                <img src={flower1} alt="img3" className="wow fadeInDown" data-wow-duration="2s"></img>
                <img src={flower2} alt="img4" className="wow fadeInDown" data-wow-duration="2s"></img>
                <img src={cool1} alt="img5" className="wow slideInLeft" data-wow-duration="2s"></img>
                <img src={cool2} alt="img6" className="wow slideInLeft" data-wow-duration="2s"></img>
                <img src={cute1} alt="img7" className="wow fadeInDown" data-wow-duration="2s"></img>
                <img src={cute2} alt="img8" className="wow fadeInDown" data-wow-duration="2s"></img>
                    
                </div>
            </div>

        )
}
    
};
export default Gallery;