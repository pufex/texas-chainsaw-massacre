import React from 'react'
import "./Footer.css"

const Footer = () => {
    return <>

        <footer className='footer-top-container'>
            <div className='footer-top'>
                <h1 className='footer-header'>
                    Care to improve the website?
                </h1>
                <p className='footer-desc'>
                    You have any ideas to make the website better? Tell me about them in an email, or message me on Twitter! Feedback is very welcome.
                </p>
                <div className='footer-buttons'>
                    <a 
                        className='footer-button footer-button--primary'
                        href="https://twitter.com"
                        target='_blank'
                    >
                        DM me
                    </a>
                    <a 
                        className='footer-button footer-button--secondary'
                        href='mailto:j.abram1@wp.pl'
                    >
                        Email me
                    </a>
                </div>
            </div>
        </footer>
        <footer className='footer-bottom-container'>
            <div className='footer-bottom'>
                <div className='footer-left'>
                    <a 
                        className='footer-profile-link'
                        href="https://github.com/pufex"
                        target='_blank'
                    >
                        <img 
                            src="/my-profile-picture.jpeg" 
                            alt="My profile picture"
                            className='footer-profile-picture' 
                        />
                    </a>
                </div>
                <div className='footer-right'>
                    <div className='footer-socials'>
                        <a 
                            className='footer-social'
                            href="https://github.com/pufex"
                            target='_blank'
                        >
                            Github
                        </a>
                        <a 
                            className='footer-social'
                            href="https://icodethis.com/pufex"
                            target='_blank'
                        >
                            ICodeThis
                        </a>
                        <a 
                            className='footer-social'
                            href="https://twitter.com"
                            target='_blank'
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>
    
}

export default Footer
