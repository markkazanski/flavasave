import React from "react";
import Scrollchor from 'react-scrollchor';

const ReadMore = () => (
  <div className="readmore-block">
    <div className="readmore-description">
      <p>Save recipes from the web.</p>
      <p id="readmore-organize">Organize as you go.</p>
    </div>
    <div className="readmore-subBlock"> 
      <div className="readmore-subBlock-transform">
        <img className="arrow" src={require('../../images/arrow.png')} alt="Arrow Image" />
        <h3 className="readmore-text">READ MORE</h3>
      </div>
    </div>
  </div>
);

export default ReadMore;