import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { Gallery } from "react-grid-gallery";
import axios from 'axios';



function Library() {
    
    const [images, setImages] = useState();

    useEffect(() =>{
        getImages()
     },[]);

    const getImages = async () =>{
        await axios.get('http://127.0.0.1:8000/api/media/').then((response) =>{
            setImages(response.data)
       });
    };

    console.log(images)
    
    // const newArray = images.property.filter( image => image.media_type === "PH")

    // console.log(newArray)

 

    if (!images) return (
        <>
        <NavBar />

        <Footer />

        </>
    );

    return ( 
        <React.Fragment>
            <NavBar />

            {/* <Gallery images={newArray} /> */}

            <Footer />

        </React.Fragment>
     );
}

export default Library;