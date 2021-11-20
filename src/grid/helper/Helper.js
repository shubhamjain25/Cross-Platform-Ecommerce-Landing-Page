import React, {useState} from 'react';
import ImageSlider from "./ImageSlider";
import { useLayoutEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { isBrowser} from 'react-device-detect';

function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0]);
    
    useLayoutEffect(() => {
      function updateScreenSize() {
        setScreenSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
      return () => window.removeEventListener("resize", updateScreenSize);
    }, []);
    
    return screenSize;
}
function Helper({slide, idx}){

    const handle = useFullScreenHandle();
    const [width] = useMediaQuery();
    const [isShown, setIsShown] = useState(false);
    let sys = isBrowser? "Browser":"Mobile";

    const handleClick=()=>{
      if(!handle.active){
        handle.enter();
      }
      setIsShown(true);
      console.log('Clicked');
    }

    function crossClicked(){
      setIsShown(false);
      console.log('Mouse Left');
      handle.exit();
    }

    return isBrowser ? (
      <div className={`grid-item `+(sys)} onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
          {isShown && <ImageSlider slide={slide} isPhone={false} handleFS={handle}/>}
          {!isShown && (<img src={
              slide.brand_banner_image_1
              ? slide.brand_banner_image_1
              : "https://www.vuescript.com/wp-content/uploads/2018/11/Show-Loader-During-Image-Loading-vue-load-image.png"
          } alt="" className="grid-image"></img>)}
      </div>
  ):
  (
      <div className={`grid-item `+(sys)} >
              <div onClick={handleClick}>
                <FullScreen handle={handle}>
                  {handle.active && (<ImageSlider slide={slide} isPhone={true} handleFS={handle}/>)}
                  {!handle.active && (<img src={
                      slide.brand_banner_image_1
                      ? slide.brand_banner_image_1
                      : "https://www.vuescript.com/wp-content/uploads/2018/11/Show-Loader-During-Image-Loading-vue-load-image.png"
                      } alt="" className="grid-image"></img>)}
                </FullScreen>
              </div>
      </div>
  );
}

export default Helper
