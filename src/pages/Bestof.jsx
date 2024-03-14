import React, {useState} from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Video from "../components/Video/Video"
import Photo from "../components/Photo/Photo"

const data = [
    {
        id: 0,
        name: "Leatherface chases Sally",
        photo: "/1.jpg",
        video: "/1.mp4",
    },
    {
        id: 2,
        name: "Texas Chainsaw Massacre Intro",
        photo: "/3.jpg",
        video: "/3.mp4",
    },
    {
        id: 3,
        name: "Dinner at the family's house",
        photo: "/4.jpg",
        video: "/4.mp4",
    },
    {
        id: 4,
        name: "First victim",
        photo: "/5.jpg",
        video: "/5.mp4",
    },
    {
        id: 5,
        name: "Cook kindaps Sally",
        photo: "/6.jpg",
        video: "/6.mp4",
    },
    {
        id: 6,
        name: "Sally escapes the family",
        photo: "/7.jpg",
        video: "/7.mp4",
    },
    {
        id: 7,
        name: "Leatherface's Final Chainsaw Dance",
        photo: "/8.jpg",
        video: "/8.mp4",
    },
]

const Bestof = () => {
    const [currentVideo, setVideo] = useState({
        video: false,
        title: false,
        playing: false,
        muted: false,
        volume: 0.5,
        played: 0,
        seeking: false,
        buffer: false,
    })

    const photosList = data.map((photo) => {
        return <Photo 
            key={photo.id}
            id={photo.id}
            name={photo.name}
            photo={photo.photo}
            video={photo.video}
            setVideo={setVideo}
        />
    })

    return <>
        <Navbar setAnimation={false} />
        <main className='bestof-main' id="main">
            <header className='bestof-header' id="header">
                <h1 className='header'>
                    BEST TCM CLIPS
                </h1>
                <div className='video-container'>
                    <Video currentVideo={currentVideo} />
                </div>
            </header>
            <article className='bestof-article'>
                <section className='article-section'>
                    <h1 className='article-title'>
                            Choose a video to play!
                    </h1>
                    <section className='article-article'>
                        <p className='paragraph'>
                            Here are gathered some of the best, funniest, scariest, most intense moments from the Texas Chainsaw Massacre 1974 movie, all put into short clips.  
                        </p>
                        <p className='paragraph'>
                            Above it there is a video player prepared to show you these clips. All you need to do, is hover over a clip you want to play and click on the "play" button that would pop.
                        </p>
                    </section>
                    <section className='photos'>
                        {photosList}
                    </section>
                </section>
                <section className='footer'>
                    <p className='paragraph'>
                        Know any better clips?
                        <a className='link'>
                            {" Email me about them!"}
                        </a>
                    </p>
                </section>
            </article>
        </main>
        <Footer />
    </>
}

export default Bestof
