import React from 'react'
import "./Cookies.css"

const Cookies = (props) => {
    const {onStart, ...rest} = props;
    
    const saveDecision = () => {
        sessionStorage.setItem("cookies", "true");
    }

    if(sessionStorage.getItem("cookies") == "true") return <button 
        className='cookies-proceed cookies-button cookies-button--primary'
        onClick={() => {
            onStart();
        }}
    >
        Proceed
    </button>
    else return <div className='cookies-container'>
        <h1 className='cookies-top'>
            Cookies consent
        </h1>
        <div className='cookies-middle'>
            Before you proceed, this website uses cookies to enhance your browsing experience. Do you consent?
        </div>
        <div className='cookies-bottom'>
            <button
                className='cookies-button--primary cookies-button'
                onClick={() => {
                    saveDecision();
                    onStart();
                }}
            >
                Accept
            </button>
            <button
                className='cookies-button--secondary cookies-button'
                onClick={() => {
                    saveDecision();
                    onStart();
                }}
            >
                Decline
            </button>
        </div>
  </div>
}

export default Cookies
