import React,{useState} from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import DisplayDetails from "./DisplayDetails";
import {ImCross} from 'react-icons/im';

function ImageSlider({slide, isPhone, handleFS}){

    const [current, setCurrent] = useState(0);
    let length = 0;
    let sys = isPhone?"Mobile":"Browser";
    if (slide.brand_banner_image_1) length = 1;
    if (slide.brand_banner_image_2) length = 2;
    if (slide.brand_banner_image_3) length = 3;
    if (slide.brand_banner_image_4) length = 4;
    
    const nextSlide = ()=>{
        setCurrent(current===length-1?0:current+1);
    }

    const prevSlide = ()=>{
        setCurrent(current===0?length-1:current-1);
    }

    return (
        <section className={isPhone?"slider Mobile":"slider"}>

          <ImCross className={isPhone?"cross-btn-visible":"cross-btn-invisible"} onClick={handleFS.exit}/>
          <BsChevronLeft className={"left-arrow "+(sys)} onClick={prevSlide}/>
          <BsChevronRight className={"right-arrow "+(sys)} onClick={nextSlide}/>
          
          {
            slide.brand_banner_image_1 &&
            <div className={0 === current?'slideActive':'slide'}>
              {0===current && <DisplayDetails slideValue={slide} indexValue={0}/>}
            </div> 
          }
          {
            slide.brand_banner_image_2 &&
            <div className={1 === current?'slideActive':'slide'}>
              {1===current && <DisplayDetails slideValue={slide} indexValue={1}/>}
            </div> 
          }
          {
            slide.brand_banner_image_3 &&
            <div className={2 === current?'slideActive':'slide'}>
              {2===current && <DisplayDetails slideValue={slide} indexValue={2}/>}
            </div> 
          }
          {
            slide.brand_banner_image_4 &&
            <div className={3 === current?'slideActive':'slide'}>
              {3===current && <DisplayDetails slideValue={slide} indexValue={3}/>}
            </div> 
          }
          
        </section>
          
    );
}

export default ImageSlider;
