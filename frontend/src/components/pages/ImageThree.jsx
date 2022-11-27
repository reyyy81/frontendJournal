import { Parallax } from 'react-parallax';
import React from 'react';
import spaceStation from '../img/ImageThree.jpeg'
// import './images.css'

const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={spaceStation} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            {/* <span className="img-txt"></span> */}
        </div>
    </Parallax>
);

export default ImageThree