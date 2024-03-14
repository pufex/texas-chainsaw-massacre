import React from 'react'
import "./Hero.css"

const Hero = (props) => {

    const {played, ...rest} = props

    let imgStyle = {objectPosition: `${eval(played*100)}%`}

    return <div className='hero'>
        <img 
            src="/intro.svg" 
            className='animated-hero'
            style={imgStyle}
        />
    </div>
}

export default Hero
