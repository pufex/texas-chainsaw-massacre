import React, {useRef} from 'react'
import "./Slider.css"

const Slider = (props) => {
    const {className, min, max, value, seekHandler, seekMouseUpHandler, handleSliderPress, ...rest} = props;
    const sliderRef = useRef(null);

    let classes = "range"

    className ? classes = className : null;

    return <input 
        className={classes}
        ref={sliderRef}
        type="range" 
        min={min} 
        max={max} 
        value={value}
        onMouseDown={(e) => handleSliderPress(e, value, sliderRef)}
    />
}

export default Slider
