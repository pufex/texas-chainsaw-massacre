import React, {useState} from 'react'
import "./Window.css"

const Window = (props) => {
    const {currentPicture, onClose, ...rest} = props
    const {url, name, desc} = currentPicture;
    const [isHovered, setHovered] = useState(false)
    
    return <div className='window'>
        <div className='inside-window-container'>
            <div className='window-general'>
                <h1 className='window-title'>
                    {name}
                </h1>
                <p className='window-desc'>
                    {desc}
                </p>
                <button 
                    className='window-close'
                    onClick={() => {
                        onClose();
                    }}
                >
                    ✖
                </button>
            </div>
            <div className='window-content'>
                <div                                       className='window-image-container'
                    onMouseEnter={() => {
                        setHovered(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                    }}
                >
                    <div 
                        className={isHovered ? "window-image-cover active" : "window-image-cover"}
                    >
                        <button 
                            className='window-button download'
                        >
                            Download
                        </button>
                    </div>
                    <img
                        className={isHovered ? "window-image active" : "window-image"} 
                        src={url}
                        alt={desc}
                    />

                </div>
            </div>
        </div>
    </div>
}

export default Window
