import React, {useState} from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Cookies from "../components/Cookies/Cookies"
import ReactPlayer from 'react-player';
import {Link} from "react-router-dom"

const Home = () => {
  const [interacted, setInteracted] = useState(false);
  const [audioState, setAudioState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: true,
  })

  const {playing, muted, volume, played, seeking} = audioState;

  const progressHandler = (state) => {
    if(!seeking)
      setAudioState({...audioState, ...state})
  }

  const audioStartHandler = () => {
    setInteracted(true);
    setAudioState({...audioState, playing: true});
  }
  
  if(!interacted) return <div className='home-window'>
    <Cookies 
      onStart={audioStartHandler}
    />
  </div>
  else return <>
    <Navbar />
    <ReactPlayer 
      width={0}
      height={0}
      url={"/intro.mp3"}
      playing={playing}
      muted={muted}
      volume={volume}
      onProgress={progressHandler}
    />
    <Hero 
      played = {played}
    />
    <main className='home-main' id="main">
      <article className='home-article'>
        <div className='darkened-background'></div>
        <section className='article-section' id="section-1">
          <div className='section-left'>
            <h1 className='section-header'>
              About this project
            </h1>
            <p className='section-paragraph'>
              This website is some sort of a tribute to the original, 1974 Texas Chainsaw Massacre movie. What inspired me to make this website, and specifically to make it about the very first iteration of the franchise, was how great it is, with the original cast's outstanding performence. 
            </p>
            <p className='section-paragraph'>
              Moreover, while James Siedow, the actor who potrayed "the Cook" appears in the sequel, the direction of it is far from great. To be completely blunt, I dare to say the film is horrendous. The characters are ridiculous, especially the crazy, wielding two chainsaws sheriff, who at the end of the movie even fights the Leatherface himself. [THE FOLLOWING PART OF THIS PARAGRAPH WAS REDACTED. CARRY ON READING, THOUGH]. While you might not be able to argue that Bubba was not in character, I don't think it's appropriate to place a scene like this in a horror movie. Though, I understand it was one of the directing decisions to picture Leatherface as a mentally challenged child in an adult's body. 
            </p>
            <p className='section-paragraph'>
              About the cook, he was my favorite character in the original movie. Although he was this crazy cannibal just like the rest of the family, he also played role of an older-brother/father figure in the family, scolding Leatherface and Hitchhiker both alike. James Siedow's performance in the original movie was exceptional, but goes downhill in the sequel.
            </p>
          </div>
          <div className='section-right'>
            <img src="/poster-1.jpg" alt="The Poster of TCM 1974" className='picture'/>
          </div>
        </section>
        <section className='article-section' id='section-2'>
          <div className='section-top'>
            <p className='section-paragraph'>
              What I dislike the most about the sequel, but I love in the original movie, is the climate. TCM 2 climate wasn't what I expected at all from it. The first film was set on Texas country roads. There are basically four main settings: the van, the gas station, Sally's grandfather's home, and the family's household and its perimeter. All these places and situations which occured in them felt very realistic, even disturbingly naturalistic. However, when you take a look at the locations of the second movie, they don't look so good. 
            </p>
            <p className='section-paragraph'>
              First, we have a road chase of two youth goofballs who had been calling to the radio station of the film's heroine - "Stretch", before suddenly being interrupted by chainsaw wielding leatherface on top of his vietnamese war veteran brother's (Chop Top's) truck. Then there is the radio station itself. And the last one I remember is the insane, hell-chamber-like former theme park (or something like that), where the family currently resides in the movie, which is completely surreal and insane. 
            </p>
            <p className='section-paragraph'>
              Just take a look at both of these pictures below.
            </p>
          </div>
          <div className='section-bottom'>
              <div className='section-pic-label'>
                <img 
                  className='picture'
                  src="/section-2-pic-1.jpg" 
                  alt="The Family's Household from the original movie" 
                />
                <label className='label'>
                  Look at this impressively looking house with Sally escaping the Hitchhiker.
                </label>
              </div>
              <div className='section-pic-label'>
                <img 
                  src="/section-2-pic-2.jpg" 
                  alt="The Hell (Shit not hell)hole of TCM2" 
                />
                <label className='label'>
                  Now look at this shit hole. What a joke.
                </label>
              </div>
          </div>
        </section>
        <section className="article-section" id="section-4">
            <div className='section-left'>
              <img 
                className='picture'
                src="/jim-siedow.jpg" 
                alt="" 
              />
              <img 
                className='picture'
                src="/jim-siedow-2.jpg" 
                alt="" 
              />
            </div>
            <div className='section-right'>
              <h1 className='section-header'>
                Going back to cook's case...
              </h1>
              <p className='section-paragraph'>
                As I mentioned earlier, in the original movie, cook's character was very down to earth, and felt very authentic. However, in the second movie, he's become crazier than ever.
              </p> 
              <p className='section-paragraph'>
                While in the original movie he was very laconic, only really talking when responding to other people, or scolding Bubba or Hitchhiker, in the second movie it's complete opposite. Watching him, it almost feels like he's hosting a black comedy performance on stage, constantly complaining about his colleagues in a humorous manner. He's talking almost constantly. And I guess you could argue that (in accordance to the continuation of the original plot) trying to always stay few steps ahead of the police had a heavy toll on his mindset and could greatly affect his personality (having to be constantly on the move), and also he becomes popular when he wins the BBQ contest. But I said earlier, I don't like the direction which they took while writing script for this character.
              </p>
              <p className='section-paragraph'>
                The whole second movie is insane. From 2 chainsaws wielding police officer confronting the family by himself with the said tools, to the cook going kamikaze with a grenade, killing himself and everyone around in the proccess; everything about this movie is so surreal and absurd - flipside of what the original, Texas Chainsaw Massacre of 1974, was.
              </p>
            </div>
        </section>  
        <section className='article-section' id='section-3'>
            <h1 className='section-header'>
              Featured
            </h1>
            <div className='section-split'>
              <div className='featured under-maintenance'>
                <div className='maintenance'>
                  <div className='maintenance-shadow'></div>
                  <div className='maintenance-content'>
                    <h1 className='maintenance-header'>
                      UNDER MAINATANANCE
                    </h1>
                    <p className='maintenance-desc'>
                      Carry on browsing, sir.
                    </p>
                  </div>
                </div>
                <h1 className='featured-header'>
                  Gallery
                </h1>
                <p className='featured-desc'>
                  Some good posters, photos from the movie ect. I just picked them out from google, but they are enormous!
                </p>
                <Link to="/gallery" className='featured-button'>
                  Check it out
                </Link>
              </div>
              <div className='featured'>
                <h1 className='featured-header'>
                  Best of
                </h1>
                <p className='featured-desc'>
                  My favorite clips from the original movie. They are really good. Got like 7 of them now. Go and take a look!
                </p>
                <Link to="/gallery" className='featured-button'>
                  Check it out
                </Link>
              </div>
            </div>
  
        </section>
      </article>
    </main>
    <Footer />
  </>
}

export default Home
