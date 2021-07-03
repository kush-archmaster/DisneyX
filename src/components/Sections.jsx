import React from 'react';
import '../css/section.css';
import HoverVideoPlayer from 'react-hover-video-player';

import v1 from '../videos/1564674844-disney.mp4';
import v2 from '../videos/1564676714-pixar.mp4';
import v3 from '../videos/1564676115-marvel.mp4';
import v4 from '../videos/1608229455-star-wars.mp4';
import v5 from '../videos/1564676296-national-geographic.mp4';

const Sections = () => {
    return (
        <div className='sections'>
            <div className='section'>
                <HoverVideoPlayer 
                    videoSrc={v1} 
                    pausedOverlay={
                        <img src="/images/viewers-disney.png" alt="" />
                    }
                   />
            </div>
           

            <div className='section'>
               <HoverVideoPlayer 
                    videoSrc={v2} 
                    pausedOverlay={
                        <img src="/images/viewers-pixar.png" alt="" />
                    }
                   />
            </div>
            
            <div className='section'>
                 <HoverVideoPlayer 
                    videoSrc={v3} 
                    pausedOverlay={
                        <img src="/images/viewers-marvel.png" alt="" />
                    }
                   />
            </div>
            
            <div className='section'>
                <HoverVideoPlayer 
                    videoSrc={v4} 
                    pausedOverlay={
                        <img src="/images/viewers-starwars.png" alt="" />
                    }
                   />
            </div>
            
            <div className='section'>
                <HoverVideoPlayer 
                    videoSrc={v5} 
                    pausedOverlay={
                        <img src="/images/viewers-national.png" alt="" />
                    }
                   />
            </div>
            
             <div className='section added'>
               
             <img src="/images/hbo.svg" alt=""/>
            </div>
            
        </div>
    )
}

export default Sections;
