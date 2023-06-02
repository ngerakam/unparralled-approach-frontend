import React, {useState, useEffect} from 'react'
import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';

function BlogSideBar() {

  const [sidepost , setSidePost ] = useState(null);

  useEffect(() =>{
     getSidePosts()
  },[]);

  const  getSidePosts = async () =>{
     await axios.get('http://192.168.43.124:8088/api/posts/').then((response) =>{
          setSidePost(response.data)
     });
  }

  const arr = _.slice(sidepost,0,5)

  const readable_date = (publication_date) =>{
    return new Date(publication_date).toDateString();
  }
  

    return ( 
<React.Fragment>
<div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white mt-2" style={{width: "280px"}}>

      <input className="form-control mr-sm-2 my-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      <div className="list-group list-group-flush border-bottom scrollarea my-2">
      {arr.map((post, index) =>{
        return (
          
          <Link to={`/blog/${post.id}`} className="list-group-item list-group-item-action bg-hepto-blue py-3 lh-tight" aria-current="true" key={index}>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">{post.title}</strong>
              <small>{readable_date(post.publication_date)}</small>
              
            </div>
            <div className="col-10 mb-1 small" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            
          </Link>
          
        
        );
      })}
      </div>

  </div>
  </React.Fragment>

     );
}

export default BlogSideBar;