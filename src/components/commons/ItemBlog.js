import React from 'react'
import { Link } from 'react-router-dom';





function ItemBlog(props) {
  const {id , title , media, excerpt } = props;


    return ( 
    <>
      <div className="col">
          <div className="card shadow-sm">
           <img className="bd-placeholder-img card-img-top" src={media.image} style={{width:"100%", height:"225"}} alt={media.alt_text}/>

            <div className="card-body">
              <h5>{title}</h5>
              
              <div className="card-text" dangerouslySetInnerHTML={{ __html: excerpt }}/>


              <div className="d-flex justify-content-between align-items-center">
              <Link to={`/blog/${id}`} className="btn btn-lg bg-hepto-orange" >View</Link>
                
              </div>
            </div>
          </div>
        </div>
    
    </> );
}

export default ItemBlog;