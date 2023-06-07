import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img4 from '../../../src/assets/banner/banner4.png';
import img2 from '../../../src/assets/banner/banner2.png';
import img3 from '../../../src/assets/banner/banner3.png';
import img1 from '../../../src/assets/banner/banner.png';



const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
        </Carousel>
    );
};

export default Banner;