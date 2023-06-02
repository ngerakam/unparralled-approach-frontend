import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import React, { useEffect, useState } from 'react';
import Pagination from '../components/commons/Pagination';
import BlogSideBar from '../components/commons/BlogSideBar';
import ItemBlog from '../components/commons/ItemBlog';
import axios from 'axios';
import _ from 'lodash';

// const baseUrl = 'http://127.0.0.1:8000/api/posts/';
function Blog() {

    const [post , setPost ] = useState(null);

    useEffect(() =>{
       getPosts()
    },[]);

    const  getPosts = async () =>{
       await axios.get('http://192.168.43.124:8088/api/posts/').then((response) =>{
            setPost(response.data)
       });
    }

    const arr = _.slice(post,0,9)
    console.log(post);

    const onPageChange = ()  => {

    };

    if (!post) return ( 
        <React.Fragment>
            <NavBar />
            <div className='container-fluid row'>

                <div className='col-lg-3'>
                    <BlogSideBar />
                </div>

                <div className="album py-5 bg-light col-lg-9">
        <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

           


        </div>
        </div>
                </div>
            </div>

            

            <Footer />
        </React.Fragment>
       
     );


    return ( 
        <React.Fragment>
            <NavBar />
            <div className='container-fluid row'>

                <div className='col-lg-3'>
                    <BlogSideBar />
                </div>

                <div className="album py-5 bg-light col-lg-9">
        <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {arr.map((posts) =>{
                return <ItemBlog key={posts.id} title={posts.title} media={posts.media} excerpt={posts.excerpt} id={posts.id} />
            }) }


        </div>
        </div>
                </div>
            </div>

            <Pagination itemsCount = {9} pageSize={3} currentPage={0} onPageChange={onPageChange}/>

            <Footer />
        </React.Fragment>
       
     );
}

export default Blog;