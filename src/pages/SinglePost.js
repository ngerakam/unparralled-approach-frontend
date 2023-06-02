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
       await axios.get('http://127.0.0.1:8000/api/posts/' + `${id}`).then((response) =>{
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
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" className="rounded-5 shadow-1-strong me-2"
                                height="35" alt="" loading="lazy" />
                                <span> Published <u>{readable_date}</u> by</span>
                                <a href="" className="text-dark">{author}</a>
                            </div>

                            {/* <div className="col-lg-6 text-center text-lg-end">
                                <button type="button" className="btn btn-primary px-3 me-1" style={{backgroundColor: "#3b5998"}}>
                                <i className="fab fa-facebook-f"></i>
                                </button>
                                <button type="button" className="btn btn-primary px-3 me-1" style={{backgroundColor: "#55acee"}}>
                                <i className="fab fa-twitter"></i>
                                </button>
                                <button type="button" className="btn btn-primary px-3 me-1" style={{backgroundColor: "#0082ca"}}>
                                <i className="fab fa-linkedin"></i>
                                </button>
                                <button type="button" className="btn btn-primary px-3 me-1">
                                <i className="fas fa-comments"></i>
                                </button>
                            </div> */}
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

                        {/* <!--Section: Author--> */}
                        <section className="border-bottom mb-4 pb-4">
                            <div className="row">
                            <div className="col-3">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                                className="img-fluid shadow-1-strong rounded-5" alt="" />
                            </div>

                            <div className="col-9">
                                <p className="mb-2"><strong>Anna Maria Doe</strong></p>
                                <a href="" className="text-dark"><i className="fab fa-facebook-f me-1"></i></a>
                                <a href="" className="text-dark"><i className="fab fa-twitter me-1"></i></a>
                                <a href="" className="text-dark"><i className="fab fa-linkedin me-1"></i></a>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                                inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                                Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                                </p>
                            </div>
                            </div>
                        </section>
                        {/* <!--Section: Author--> */}

                        {/* <!--Section: Comments--> */}
                        <section className="border-bottom mb-3">
                            <p className="text-center"><strong>Comments: 3</strong></p>

                            {/* <!-- Comment --> */}
                            <div className="row mb-4">
                            <div className="col-2">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                                className="img-fluid shadow-1-strong rounded-5" alt="" />
                            </div>

                            <div className="col-10">
                                <p className="mb-2"><strong>Marta Dolores</strong></p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                                inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                                Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                                </p>
                            </div>
                            </div>

                            {/* <!-- Comment --> */}
                            <div className="row mb-4">
                            <div className="col-2">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
                                className="img-fluid shadow-1-strong rounded-5" alt="" />
                            </div>

                            <div className="col-10">
                                <p className="mb-2"><strong>Valeria Groove</strong></p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                                inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                                Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                                </p>
                            </div>
                            </div>

                            {/* <!-- Comment --> */}
                            <div className="row mb-4">
                            <div className="col-2">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                                className="img-fluid shadow-1-strong rounded-5" alt="" />
                            </div>

                            <div className="col-10">
                                <p className="mb-2"><strong>Antonia Velez</strong></p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                                inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                                Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                                </p>
                            </div>
                            </div>
                        </section>
                        {/* <!--Section: Comments--> */}

                        {/* <!--Section: Reply--> */}
                        <section>
                            <p className="text-center"><strong>Leave a reply</strong></p>

                            <form>
                            {/* <!-- Name input --> */}
                            <div className="form-outline mb-4">
                                <input type="text" id="form4Example1" className="form-control" />
                                <label className="form-label" htmlFor="form4Example1">Name</label>
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                                <input type="email" id="form4Example2" className="form-control" />
                                <label className="form-label" htmlFor="form4Example2">Email address</label>
                            </div>

                            {/* <!-- Message input --> */}
                            <div className="form-outline mb-4">
                                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                <label className="form-label" htmlFor="form4Example3">Text</label>
                            </div>

                            

                            {/* <!-- Submit button --> */}
                            <button type="submit" className="btn bg-hepto-blue btn-block mb-4">
                                Publish
                            </button>
                            </form>
                        </section>
                        {/* <!--Section: Reply--> */}
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-md-4 mb-4">
                        {/* <!--Section: Sidebar--> */}
                        <section className="sticky-top" style={{top: "80px"}}>
                            {/* <!--Section: Ad--> */}
                            {/* <section className="text-center border-bottom pb-4 mb-4">
                            <div className="bg-image hover-overlay ripple mb-4">
                                <img
                                src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/about/assets/mdb5-about.webp"
                                className="img-fluid" />
                                <a href="https://mdbootstrap.com/docs/standard/" target="_blank">
                                <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                                </a>
                            </div>
                            <h5>Material Design htmlFor Bootstrap 5</h5>

                            <p>
                                500+ components, free templates, 1-min installation, extensive tutorial, huge
                                community. MIT license - free htmlFor personal & commercial use
                            </p>
                            <a role="button" className="btn bg-hepto-blue" href="https://mdbootstrap.com/docs/standard/"
                                target="_blank">Download htmlFor free<i className="fas fa-download ms-2"></i></a>
                            </section> */}
                            {/* <!--Section: Ad--> */}

                            {/* <!--Section: Video--> */}
                            <section className="text-center">
                            <h5 className="mb-4">{name}</h5>

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