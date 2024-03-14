import React, {useState, useEffect} from 'react'
import "./Photo.css"

const Photo = (props) => {
    const {id, name, photo, video, setVideo, ...rest} = props
    const [showLayout, setLayout] = useState(false);
    const [textWidth, setWidth] = useState();


    return <div
        className={showLayout ? "photo-container active" : "photo-container"}
        onMouseEnter={() => {setLayout(true)}}
        onMouseLeave={() => {setLayout(false)}}
    >
        <div className='layout'>
            <h1 
            className='photo-title'
            >
                {name}
            </h1>
            <a
                className='play-button'
                href="#root"
                onClick={() => {
                    console.log(video);
                    setVideo({
                        video: video,
                        title: name,
                        playing: false,
                        muted: false,
                        volume: 0.5,
                        played: 0,
                        seeking: false,
                        Buffer: true,
                    })
                }}
            >
                Play
            </a>
        </div>
        <div className="layout-blur"></div>
        <img src={photo} alt={name} className='photo'/>
    </div>
}

export default Photo
