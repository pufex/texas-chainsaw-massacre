import React, {useState, useRef, useEffect} from 'react'
import ReactPlayer from "react-player"
import Controls from './Controls/Controls'
import { formatTime } from './Functions/Format'
import "./Video.css"

const Video = (props) => {
    const videoPlayerRef = useRef(null);

    const [info, setInfo] = useState(true);
    const {currentVideo, ...rest} = props
    const [showControls, setControls] = useState(false);

    const [videoState, setVideoState] = useState(currentVideo)
    const {playing, muted, volume, played, seeking, Buffer} = videoState;

    const formatCurrentTime = videoPlayerRef.current ? formatTime(videoPlayerRef.current.getCurrentTime()) : "00:00";
    const formatDuration = videoPlayerRef.current ? formatTime(videoPlayerRef.current.getDuration()) : "00:00"

    useEffect(() => {
        console.log(playing);
    }, [playing])

    const bufferStartHandler = () => {
        setVideoState({...videoState, buffer: true})
    }

    const bufferEndHandler = () => {
        setVideoState({...videoState, buffer: false})
    }

    const handleSliderPress = (e) => {
        let rect = e.target.getBoundingClientRect();
        let finalX = e.clientX - rect.x;
        let newValue = finalX/rect.width*100;
        setVideoState({...videoState, played: parseFloat(newValue)/100, seeking: false})
        videoPlayerRef.current.seekTo(newValue/100);
    }

    const seekHandler = (e, value) => {
        setVideoState({...videoState, played: parseFloat(value)/100})
    };

    const seekMouseUpHandler = (e, value) => {
        setVideoState({...videoState, seeking: false});
        videoPlayerRef.current.seekTo(value/100)
    }

    const progressHandler = (state) => {
        if (!seeking) {
            setVideoState({ ...videoState, ...state});
        } 
    };

    const playPauseHandler = () => {
        setVideoState({...videoState, playing: !videoState.playing})
    }
    
    const muteHandler = () => {
        setVideoState({...videoState, muted: !videoState.muted})
    }

    const rewindHandler = () => {
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5)
    }

    const forwardHandler = () => {
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime()+10)
    }

    const restartHandler = () => {
        videoPlayerRef.current.seekTo(0)
    }

    const handleVolumeChange = (e) => {
        let rect = e.target.getBoundingClientRect();
        let finalX = e.clientX - rect.x;
        let newVolume = finalX/rect.width*100;
        console.log(newVolume/100);
        setVideoState({...videoState, volume: parseFloat(newVolume)/100})
    }

    if(!currentVideo.video){
        return <div 
            id="video-box"
            className='video-box'
            onMouseEnter={() => {setInfo(true)}}
            onMouseLeave={() => {setInfo(false)}}
        >
            <div 
                className='info'
                style={!info ? {display: "none"} : {display: "flex"}}
            >
                <span className='info-paragraph'>
                    You didn't choose a video.
                </span>
                <span className='info-paragraph'>
                    To choose a video scroll down and click on any photos you'd like.
                </span>
            </div>
        </div>
    }else return <div 
        id='video-box'
        className='video-box'
        onMouseEnter={() => {setControls(true)}}
        onMouseLeave={() => {setControls(false)}}
    >
        <h1 
            className='video-title'
            style={!showControls ? {display: "none"} : null}
        >
            {currentVideo.title}
        </h1>
        <ReactPlayer 
            onProgress={progressHandler}
            ref={videoPlayerRef}
            controls={false}
            className="video"
            width="100%"
            height="100%"
            url={currentVideo.video}
            playing={playing}
            muted={muted}
            volume={volume}
            onBuffer={bufferStartHandler}
            onBufferEnd={bufferEndHandler}
        />
        <Controls 
            showControls={showControls} 
            playing={playing} 
            muted={muted}
            played={played}
            onPlayPause={playPauseHandler}
            onMuting={muteHandler}
            onRewind={rewindHandler}
            onForward={forwardHandler}
            seekHandler={seekHandler}
            seekMouseUpHandler={seekMouseUpHandler}
            handleSliderPress={handleSliderPress}
            handleVolumeChange={handleVolumeChange}
            duration={formatDuration}
            currentTime={formatCurrentTime}
            volume={volume}
            onRestart={restartHandler}
        />
        <div 
            className={videoState.buffer ? "buffer active" : "buffer"}
        ></div>
    </div>
}

export default Video
