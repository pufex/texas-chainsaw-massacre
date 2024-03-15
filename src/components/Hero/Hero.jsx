import React from 'react'
import "./Hero.css"

const Hero = (props) => {

    const {played, ...rest} = props

    let imgStyle = {objectPosition: `${eval(played*100)}%`}

    return <div className='hero'>

        <div className='hero-container'>
            <img 
                src="/intro.svg" 
                className='animated-hero'
                style={imgStyle}
            />
            <div className='animated-hero--mobile'>
                <p>
                    The film which you are about to see is an account of the tragedy which befell a group of five youths, in particular Sally Hardesty and her invalid brother, Franklin. It is all the more tragic in that they were young. But, had they lived very, very long lives, they could not have experienced nor would they have wished to see as much of the mad and macabre as they were to see that day. For them an idyllic drive became a nightmare
                </p>
                <p>
                    The events of that day were to lead to the discovery of one of the most bizzare crimes in the annals of the American History, The Texas Chainsaw Massacre.
                </p>
            </div>
        </div>
    </div>
}

export default Hero
