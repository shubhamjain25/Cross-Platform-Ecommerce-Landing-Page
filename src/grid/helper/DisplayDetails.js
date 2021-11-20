import React from 'react';
import { isBrowser} from 'react-device-detect';

// import './DisplayDetailsStyle.css';
const DisplayDetails=({slideValue, indexValue})=>{
    let visible = (indexValue===0)?'visible':'invisible';
    
    let sys = isBrowser?"Browser":"Mobile";

    let imageSource;
    let line;
    if (indexValue === 0) {
      imageSource = slideValue.brand_banner_image_1;
      line = slideValue.line1;
    } else if (indexValue === 1) {
      imageSource = slideValue.brand_banner_image_2;
      line = slideValue.line2;
    } else if (indexValue === 2) {
      imageSource = slideValue.brand_banner_image_3;
      line = slideValue.line3;
    } else if (indexValue === 3) {
      imageSource = slideValue.brand_banner_image_4;
      line = slideValue.line4;
    }

    return(
      
        <div>
            <div className={"displayImageCard "+sys}>
              <img src={
                imageSource ? imageSource :'https://www.vuescript.com/wp-content/uploads/2018/11/Show-Loader-During-Image-Loading-vue-load-image.png'
              } alt="shoe image" className={`sliderImage `+(sys)}/>
              <div class={"circles "+sys}>
                <div className={"circle "+(indexValue===0?"active":"inactive")}></div>
                <div className={"circle "+(indexValue===1?"active":"inactive")}></div>
                <div className={"circle "+(indexValue===2?"active":"inactive")}></div>
                <div className={"circle "+(indexValue===3?"active":"inactive")}></div>
              </div>
            </div>
            <div className={"displayCard "+sys}>
                <div className={"slide-title "+ visible+" "+sys}>{slideValue.name}</div>
                <div className={"slide-desc "+sys}>{line}</div>
                
                {isBrowser && (<div className="bottom-bar">
                      <div className={"logoName "+sys} align="left">{slideValue.brand_name}</div>
                      <img src={slideValue.logo} alt="" className="logoImage" align="right"></img>
                    </div>)
                }

                {!isBrowser && (<div className={"logoName "+sys} align="left">{slideValue.brand_name}</div>)
                }
                
            </div>
        </div>
    );
}

export default DisplayDetails;