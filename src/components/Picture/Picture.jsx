import React, {useState} from 'react'
import "./Picture.css"

const Picture = (props) => {
    const {url, name, desc, onPick, ...rest} = props
    const [pictureMode, setPictureMode] = useState(false);


    return <div 
        className={!pictureMode ? 'picture-picture' : "picture-picture active"}
        onMouseEnter={() => {
            setPictureMode(true);
        }}
        onMouseLeave={() => {
            setPictureMode(false);
        }}
    >
        <img
            className={"picture-image"} 
            src={url}
            alt={desc} 
            onClick={() => {
                onPick(url, name, desc)
            }}
        />
    </div>
}

export default Picture
