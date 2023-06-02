import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import '../Media.css';




function Library() {
    
    const [images, setImages] = useState();
    const [model,setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    useEffect(() =>{
        getImages()
     },[]);

    const getImages = async () =>{
        await axios.get('http://192.168.43.124:8088/api/media/').then((response) =>{
            setImages(response.data)
       });
    };

    console.log(images)
    

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    const resstImg = () => {
        setModel(false)
        setTempImgSrc('')
    }
 

    if (!images) return (
        <>
        <NavBar />
        <div>
            <h1>No images in the gallery yet!</h1>
        </div>
        <Footer />

        </>
    );

    return ( 
        <React.Fragment>
            <NavBar />
            <h1 className='text-center'>Our Photos</h1>

            <div className={model? 'model open' : 'model'}>
                <img src={tempimgSrc} />
                <i className="fa fa-times" aria-hidden="true" onClick={() =>resstImg() }></i>
            </div>

            <div className='gallery mt-2' >
                
            {images.map((pic, index) =>{
                if(pic.media_type === 'PH')
                    return (
                    <div className='pics' key={index} onClick={() =>getImg(pic.image)}>
                        <img src={pic.image} style={{width:"100%"}} />
                    </div>);
                
            }) }
            </div>

            <Footer />

        </React.Fragment>
     );
}

export default Library;