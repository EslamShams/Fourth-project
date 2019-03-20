import React, { Component } from 'react';
import './articles.css';
import Black from './dark-bkg.jpg';


class Articles extends Component {
    render(){
        return (
            <div>
                <div className="articles">
                  <div ><img className="wow bounceInUp" data-wow-duration="2s" src={Black} alt="black1"></img><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,<br></br> tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet<br></br> est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi <a href="#">More..</a> </p></div>
                  <div><img className="wow bounceInUp" data-wow-duration="2s" src={Black} alt="black2"></img><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,<br></br> tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet<br></br> est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi <a href="#">More..</a> </p></div>
                  <div><img className="wow bounceInUp" data-wow-duration="2s" src={Black} alt="black3"></img><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,<br></br> tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet<br></br> est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi <a href="#">More..</a> </p></div>
                  <div><img className="wow bounceInUp" data-wow-duration="2s" src={Black} alt="black4"></img><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,<br></br> tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet<br></br> est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi <a href="#">More..</a> </p></div>


                </div>
            </div>
        )
    }
};
export default Articles;