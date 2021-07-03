import React from 'react';
import '../css/section.css';

const Sections = () => {
    return (
        <div className='sections'>
            <div className='section'>
                <img src="/images/viewers-disney.png" alt="" />
            
            </div>
            <div className='section'>
                <img src="/images/viewers-pixar.png" alt="" />
            </div>
            <div className='section'>
                <img src="/images/viewers-marvel.png" alt="" />
            </div>
            <div className='section'>
                <img src="/images/viewers-starwars.png" alt="" />
            </div>
            <div className='section'>
                <img src="/images/viewers-national.png" alt="" />
            </div>
             <div className='section added'>
                <img src="/images/hbo.svg" alt="" />
            </div>
            
        </div>
    )
}

export default Sections
