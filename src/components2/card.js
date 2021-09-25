import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import ImageSlider from "../components4/ImageSlider";
import {SliderData} from "../components4/SliderData";
import Masonry from "masonry-layout";
import ReactPlayer from 'react-player';
import VideoPlayer from 'react-video-js-player';
import Iframe from 'react-iframe';
import './Grid.css';


function runTemp(){
    window.onload=()=>{
        const grid = document.querySelector('.grid');
        const masonry = new Masonry(grid,{
            columnWidth: 300,
            itemSelector: '.grid-item',
            gutter: 10,
            fitWidth: true,
        });
        console.log('Inside 2');
    }
}

function Card(){
    
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="grid">
            

            <CardContents1></CardContents1>
            <CardContents2></CardContents2>
            <CardContents1></CardContents1>
            <CardContents4></CardContents4>
            <CardContents2></CardContents2>
            <CardContents5></CardContents5>
            <CardContents3></CardContents3>
            <CardContents2></CardContents2>
            <CardContents1></CardContents1>
            <CardContents2></CardContents2>
            <CardContents1></CardContents1>
            <CardContents2></CardContents2>
            <CardContents5></CardContents5>
            <CardContents3></CardContents3>
            <CardContents1></CardContents1>
            <CardContents6></CardContents6>
            

            {/* <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={url3} alt="" className="grid-image"></img>)}
            </div>

            <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={url2} alt="" className="grid-image"></img>)}
            </div> */}

            {/* <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={url3} alt="" className="grid-image"></img>)}
            </div>

            <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={url1} alt="" className="grid-image"></img>)}
            </div>

            <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={url3} alt="" className="grid-image"></img>)}
            </div>

            <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={url2} alt="" className="grid-image"></img>)}
            </div> */}




            {/* <div className="grid-item"><img src={url2} alt="" className="grid-image"></img></div>
            <div className="grid-item"><img src={url3} alt="" className="grid-image"></img></div>
            <div className="grid-item"><img src={url1} alt="" className="grid-image"></img></div>
            <div className="grid-item"><img src={url2} alt="" className="grid-image"></img></div>
            <div className="grid-item"><img src={url3} alt="" className="grid-image"></img></div>
            <div className="grid-item"><img src={url3} alt="" className="grid-image"></img></div>
            <div className="grid-item"><img src={url2} alt="" className="grid-image"></img></div>
            <div className="grid-item"><img src={url1} alt="" className="grid-image"></img></div> */}
            <div className={runTemp()}></div> 
        </div>
        
    );
}

const urlGif = "https://c.tenor.com/hLQHo8YyYooAAAAM/nike-shoe.gif";
const urlVideo = "player.vimeo.com/video/210743903?title=0&portrait=0&byline=0&autoplay=1";
const url1="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
const url2 = "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
const url3 = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
function CardContents1(){

    const [isShown, setIsShown] = useState(false);

    return(
        <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={url1} alt="" className="grid-image"></img>)}
        </div>
    );
}

function CardContents2(){
    const [isShown, setIsShown] = useState(false);
    return(
        <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={url2} alt="" className="grid-image"></img>)}
        </div>
    );
}

function CardContents3(){
    
    const [isShown, setIsShown] = useState(false);
    return(
        <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={url3} alt="" className="grid-image"></img>)}
        </div>
    );
}

function CardContents4(){
    
    const [isShown, setIsShown] = useState(false);
    return(
        <div className="grid-item" onMouseLeave={()=>{ setIsShown(false)}}>
                {/* <ReactPlayer className = "grid-image" width='100%' height='100%' controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc' type="video/mp4"/> */}
                {/* <VideoPlayer width='100%' height='100%' src={urlVideo} controls></VideoPlayer> */}
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA" frameBorder="0" className = "grid-video" width='100%' height='100%'></Iframe>
        </div>
    );
}

function CardContents5(){
    
    const [isShown, setIsShown] = useState(false);
    return(
        <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{ setIsShown(false)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={urlGif} alt="" className="grid-image"></img>)}
        </div>
    );
}

function CardContents6(){
    
    const [isShown, setIsShown] = useState(false);
    return(
        <div className="grid-item">
                <ImageSlider slides={SliderData}/>
        </div>
    );
}

function CardContents7(){
    
    const [isShown, setIsShown] = useState(false);
    return(
        <div className="grid-item" onMouseEnter={()=>{ setIsShown(true)}}>
                {isShown && <ImageSlider slides={SliderData}/>}
                {!isShown && (<img src={url3} alt="" className="grid-image"></img>)}
        </div>
    );
}


export default Card;

