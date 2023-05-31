import React from 'react'
// import featuret  from '../../images/FA.JPG';
import _ from 'lodash';

function ItemBlog(props) {
  const {title , media, content } = props;

  const truncatedText = _.slice(content,0,75)
    return ( 
    <>
      <div className="col">
          <div className="card shadow-sm">
           <img className="bd-placeholder-img card-img-top" src={media.image} style={{width:"100%", height:"225"}} alt={media.alt_text}/>

            <div className="card-body">
              <h5>{title}</h5>
              <p className="card-text">{truncatedText}</p>
              <div className="d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-lg bg-hepto-orange">View</button>
                
              </div>
            </div>
          </div>
        </div>
    
    </> );
}

export default ItemBlog;