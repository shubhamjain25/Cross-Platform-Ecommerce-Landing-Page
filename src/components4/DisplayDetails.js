import React from 'react';
import './DisplayDetailsStyle.css';
const DisplayDetails=({slide})=>{
    let visible = (slide.title!=='')?'visible':'';
    return(
        <>
            <img src={slide.image} alt="shoe image" className="sliderImage"/>
            <div className="displayCard">
                <div className={"slide-title "+ visible}>{slide.title}</div>
                <div className={"slide-desc "+ visible}>{slide.desc}</div>
                <div className="bottom-bar">
                    <div className="logoName" align="left">{slide.name}</div>
                    <img src={slide.logo} alt="" className="logoImage" align="right"></img>
                </div>
            </div>
        </>
    );
}

export default DisplayDetails;