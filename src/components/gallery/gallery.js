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
    
natureComp = ()=>{
      if(mySpans[5].style.display ="none") {
            mySpans[5].style.display ="block";
            mySpans[6].style.display ="block";   
            }      
}
natureComp2=()=>{
    if(mySpans[5].style.display ="block") {
        mySpans[5].style.display ="none";
        mySpans[6].style.display ="none";   
        }
}
sky=()=>{
      if(myImgBox[0].style.display="none"){
        myImgBox[0].style.display="block";
        myImgBox[1].style.display="none";
        myImgBox[2].style.display="none";
        myImgBox[3].style.display="none";
        myImgBox[4].style.display="none";
        myImgBox[5].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";

      }

    
}
darkRoad=()=>{
    if(myImgBox[1].style.display="none"){
        myImgBox[1].style.display="block";
        myImgBox[0].style.display="none";
        myImgBox[2].style.display="none";
        myImgBox[3].style.display="none";
        myImgBox[4].style.display="none";
        myImgBox[5].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";

      }
}
         
flowerComp = ()=>{
    if(mySpans[8].style.display ="none"){
        mySpans[8].style.display ="block";
        mySpans[9].style.display ="block";
    }
            
        }
flowerComp2 = ()=>{
    if(mySpans[8].style.display ="block"){
        mySpans[8].style.display ="none";
        mySpans[9].style.display ="none";
            }
                    
                }        
flo1=()=>{
    if(myImgBox[2].style.display="none"){
        myImgBox[2].style.display="block";
        myImgBox[1].style.display="none";
        myImgBox[0].style.display="none";
        myImgBox[3].style.display="none";
        myImgBox[4].style.display="none";
        myImgBox[5].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";

      }
}
flo2=()=>{
    if(myImgBox[3].style.display="none"){
        myImgBox[3].style.display="block";
        myImgBox[1].style.display="none";
        myImgBox[0].style.display="none";
        myImgBox[2].style.display="none";
        myImgBox[4].style.display="none";
        myImgBox[5].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";

      }
}         
            
coolComp = () =>{
    if(mySpans[11].style.display ="none"){
        mySpans[11].style.display ="block";
        mySpans[12].style.display ="block";
    }
        }
coolComp2 = () =>{
   if(mySpans[11].style.display ="block"){
      mySpans[11].style.display ="none";
      mySpans[12].style.display ="none";
            }
                }        
col1=()=>{
    if(myImgBox[4].style.display="none"){
        myImgBox[4].style.display="block";
        myImgBox[1].style.display="none";
        myImgBox[0].style.display="none";
        myImgBox[3].style.display="none";
        myImgBox[2].style.display="none";
        myImgBox[5].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";
        
              }
        }         
col2=()=>{
   if(myImgBox[5].style.display="none"){
         myImgBox[5].style.display="block";
         myImgBox[1].style.display="none";
         myImgBox[0].style.display="none";
         myImgBox[3].style.display="none";
         myImgBox[2].style.display="none";
         myImgBox[4].style.display="none";
        myImgBox[6].style.display="none";
        myImgBox[7].style.display="none";
                
                      }
                }         
                       
cuteComp = () =>{
    if(mySpans[14].style.display ="none"){
        mySpans[14].style.display ="block";
        mySpans[15].style.display ="block";
    }
        }
cuteComp2 = () =>{
     if(mySpans[14].style.display ="block"){
         mySpans[14].style.display ="none";
         mySpans[15].style.display ="none";
            }
                }        
cut1=()=>{
     if(myImgBox[6].style.display="none"){
         myImgBox[6].style.display="block";
         myImgBox[1].style.display="none";
         myImgBox[0].style.display="none";
         myImgBox[3].style.display="none";
         myImgBox[2].style.display="none";
         myImgBox[4].style.display="none";
         myImgBox[5].style.display="none";
         myImgBox[7].style.display="none";
                         
      }
             }    
cut2=()=>{
     if(myImgBox[7].style.display="none"){
         myImgBox[7].style.display="block";
         myImgBox[1].style.display="none";
         myImgBox[0].style.display="none";
         myImgBox[3].style.display="none";
         myImgBox[2].style.display="none";
         myImgBox[4].style.display="none";
         myImgBox[5].style.display="none";
         myImgBox[6].style.display="none";
                                    
                 }
                        }    
             


    render(){
       
        return(
             <div className="gallery">
                <div className="component">
                <span onClick={this.natureComp} onDoubleClick={this.natureComp2}>Nature &#x02207;</span>
                <span onClick={this.sky}>Sky</span>
                <span onClick={this.darkRoad}>Dark Road</span>
                
               
                <span onClick={this.flowerComp} onDoubleClick={this.flowerComp2}>Flower &#x02207;</span>
                
                <span onClick={this.flo1}>Zoom In Single Flower</span>
                <span onClick={this.flo2}>Mixed Color Flowers</span>
                
                
                <span onClick={this.coolComp} onDoubleClick={this.coolComp2}>Cool &#x02207;</span>
                
                <span onClick={this.col1}>ColorFull Wall</span>
                <span onClick={this.col2}>ColorFull Circle</span>
                
                
               
                <span onClick={this.cuteComp} onDoubleClick={this.cuteComp2}>Cute &#x02207;</span>
                
                <span onClick={this.cut1}>Cate</span>
                <span onClick={this.cut2}>Two Cute Cates</span>
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