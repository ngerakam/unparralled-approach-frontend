import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import ItemBlog from '../commons/ItemBlog';
import _ from 'lodash';

function FeatureBlog() {
  const [post , setPost ] = useState(null);

  useEffect(() =>{
     getPosts()
  },[]);

  const  getPosts = async () =>{
     await axios.get('http://127.0.0.1:8000/api/posts/').then((response) =>{
          setPost(response.data)
     });
  };
  
  const arr = _.slice(post,0,3);

  if (!post) return (
      <>
        <div className="album py-5 bg-light">
          <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            
          


            </div>
          </div>
        </div>
          </>
  );
    return ( 

    <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      
      {arr.map((posts) => {
                return <ItemBlog key={posts.id} title={posts.title} media={posts.media} excerpt={posts.excerpt} id={posts.id} />
            })}


      </div>
    </div>
  </div>
     );
}

export default FeatureBlog;