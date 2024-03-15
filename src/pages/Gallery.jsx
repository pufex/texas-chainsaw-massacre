import React, {useState} from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Picture from "../components/Picture/Picture"
import Window from "../components/Window/Window"

const data = [
    {
        url: "/poster-1.jpg",
        name: "Poster 1",
        desc: "Poster 1",
    },
    {
        url: "/poster-2.jpg",
        name: "Poster 2",
        desc: "Poster 2",
    },
    {
        url: "/poster-3.jpg",
        name: "Poster 3",
        desc: "Poster 3",
    },
    {
        url: "/poster-4.jpg",
        name: "Poster 4",
        desc: "Poster 4",
    },
    {
        url: "/poster-5.jpg",
        name: "Poster 5",
        desc: "Poster 5",
    },
    {
        url: "/poster-6.jpg",
        name: "Poster 6",
        desc: "Poster 6",
    },
    {
        url: "/poster-7.jpg",
        name: "Poster 7",
        desc: "Poster 7",
    },
]

const Gallery = () => {

    const [currentPicture, setCurrentPicture] = useState(null)

    const handlePickedPicture = (url, name, desc) => {
        const newPicture = {
            url: url,
            name: name,
            desc: desc,
        }
        setCurrentPicture(newPicture);
    }

    const closeModalHandler = () => {
        setCurrentPicture(null);
    }

    const picturesList = data.map((photo) => {
        return <Picture 
            onPick={handlePickedPicture}
            url={photo.url}
            name={photo.name}
            desc={photo.desc}
        />
    })
    
    return <>
        {currentPicture ? <Window 
            currentPicture={currentPicture}
            onClose={closeModalHandler}
        /> : null}
        <Navbar setAnimation={false} />
        <main className='gallery-main' id='main'>
            <article className='gallery-article'>
                <section className='article-section'>
                    <h1 className='article-title'>
                            Welcome to the gallery
                    </h1>
                    <p className='paragraph'>
                        Here are gathered some of the most insanely good-looking pictures and posters from the Texas Chainsaw Massacre 1974 movie.
                    </p>
                    <p className='paragraph'>
                        Click on any of the image to reveal it's full size in a window. Some are really big!
                    </p>
                </section>
                <section className='pictures'>
                    {picturesList}
                </section>
            </article>
        </main>
        <Footer />
    </>
}

export default Gallery
