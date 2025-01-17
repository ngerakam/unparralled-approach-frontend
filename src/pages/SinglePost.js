import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SinglePost() {
    const { id } = useParams()
    const [article , setArticle ] = useState({});
    const [mymedia , setMyMedia ] = useState({});

    useEffect(() =>{
       getArticle(id)
    },[]);

    const  getArticle = async (id) =>{
       await axios.get('http://192.168.43.124:8088/api/posts/' + `${id}`).then((response) =>{
            setArticle(response.data)
            setMyMedia(response.data.media)
       });
    }

    const {title , author, content, excerpt, publication_date, reads, media, category, related_post  } = article
    const { name, alt_text, media_type, video_url, image,document, media_post} = mymedia

    const readable_date = new Date(publication_date).toDateString();
    console.log(mymedia)
    return (  
        <React.Fragment>
            <NavBar />

                {/* <!-- Jumbotron --> */}
                <div id="intro" className="p-5 text-center bg-light">
                <h1 className="mb-0 h4">{title}</h1>
                </div>
                {/* <!-- Jumbotron --> */}

                {/* <!--Main layout--> */}
                <main className="mt-4 mb-5">
                    <div className="container">
                    {/* <!--Grid row--> */}
                    <div className="row">
                        {/* <!--Grid column--> */}
                        <div className="col-md-8 mb-4">
                        {/* <!--Section: Post data-mdb--> */}
                        <section className="border-bottom mb-4">
                            <img src={image}
                            className="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />

                            <div className="row align-items-center mb-4">
                            <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                                <img src="" className="rounded-5 shadow-1-strong me-2"
                                height="35" alt="" loading="lazy" />
                                <span> Published <u>{readable_date}</u> by </span>
                                <a href="" className="text-dark">{author}</a>
                            </div>

               
                            </div>
                        </section>
                        {/* <!--Section: Post data-mdb--> */}

                        {/* <!--Section: Text--> */}
                        <section>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        </section>
                        {/* <!--Section: Text--> */}

                        {/* <!--Section: Share buttons--> */}
                        <section className="text-center border-top border-bottom py-4 mb-4">
                            <p><strong>Share with your friends:</strong></p>

                            <button type="button" className="btn btn-primary me-1" style={{backgroundColor: "#3b5998"}}>
                            <i className="fab fa-facebook-f"></i>
                            </button>
                            <button type="button" className="btn btn-primary me-1" style={{backgroundColor: "#55acee"}}>
                            <i className="fab fa-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-primary me-1" style={{backgroundColor: "#0082ca"}}>
                            <i className="fab fa-linkedin"></i>
                            </button>
                            <button type="button" className="btn bg-hepto-blue me-1">
                            <i className="fas fa-comments me-2"></i>Add comment
                            </button>
                        </section>
                        {/* <!--Section: Share buttons--> */}


                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-md-4 mb-4">
                        {/* <!--Section: Sidebar--> */}
                        <section className="sticky-top" style={{top: "80px"}}>

                            {/* <!--Section: Video--> */}
                            <section className={video_url? "text-center" : "hidden"}>
                             <h5 className={video_url? "mb-4" : "hidden"}>{name}</h5>

                            <div className="embed-responsive embed-responsive-16by9 shadow-4-strong">
                                <iframe className="embed-responsive-item rounded-5" src={video_url}
                                allowFullScreen />
                            </div>
                            </section>
                            {/* <!--Section: Video--> */}
                        </section>
                        {/* <!--Section: Sidebar--> */}
                        </div>
                        {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                    </div>
                </main>

            <Footer />
        </React.Fragment>
    );
}

export default SinglePost;