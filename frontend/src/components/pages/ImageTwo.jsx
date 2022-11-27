import { Parallax } from 'react-parallax';
import React from 'react'
import Satellite from '../img/ImageTwo.jpeg'
// import './images.css'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={Satellite} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            {/* <span className="img-txt">a trip to Space</span> */}
        </div>
    </Parallax>
);

export default ImageTwo