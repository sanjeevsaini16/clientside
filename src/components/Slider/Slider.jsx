import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/East';
import WestOutlinedIcon from '@mui/icons-material/West';
import "./Slider.scss";


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data =
        ["https://images.pexels.com/photos/301324/pexels-photo-301324.jpeg",
            "https://images.pexels.com/photos/414023/pexels-photo-414023.jpeg",
            "https://images.pexels.com/photos/878781/pexels-photo-878781.jpeg",
            "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg",
        ];

const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev-1);
    console.log(setCurrentSlide);
}
const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev+1);
}
    return (
        <div className='slider'>
            <div className="container" style={{transform : `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt='' />
                <img src={data[1]} alt='' />
                <img src={data[2]} alt='' />
                <img src={data[3]} alt='' />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon/>
                </div>
            </div>
        </div>

    )
}

export default Slider