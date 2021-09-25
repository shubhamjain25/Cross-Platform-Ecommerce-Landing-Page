import React from 'react'
import VideoPlayer from 'react-video-js-player';

function videoHelper(url){
    return (
        <>
           <VideoPlayer width='100%' height='100%' src={url} controls></VideoPlayer>
        </>
    );
}

export default videoHelper;