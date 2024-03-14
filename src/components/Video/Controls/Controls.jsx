import React from 'react'
import Slider from './Slider/Slider'
import "./Controls.css"

const Controls = (props) => {
    const {showControls, playing, muted, played, onPlayPause, onMuting, onRewind, onForward, seekHandler, seekMouseUpHandler, handleSliderPress,duration, currentTime, volume, onRestart, ...rest} = props
    
    return <div 
        className={!showControls ? "controls" : "controls active"}
    >
      <div className='controls-left'>
          <div className='rewind-container'>
              <button 
                  className='control rewind'
                  onClick={(e) => {
                      onRewind();
                  }}
              >
                  ➜
              </button>
          </div>
          <button
              className={playing ? "control pause" : "control play"}
              onClick={(e) => {
                  onPlayPause();
              }}
          >
              {playing ? "▐▐" : "▶"}
          </button>
          <button 
              className='control forward'
              onClick={(e) => {
                  onForward();
              }}
          >
              ➜
          </button>
          <div 
            className={muted ? "control mute muted" : "control mute"}
            onClick={() => {onMuting()}}
          ></div>
          <Slider
            className="volume"
            min={0}
            max={100}
            value={volume*100}
          />
          <div className='time'>
              {currentTime} : {duration}
          </div>
      </div>
      <Slider
        className="video-progress"
        min={0}
        max={100}
        value={played*100}
        seekHandler={seekHandler}
        seekMouseUpHandler={seekMouseUpHandler}
        handleSliderPress={handleSliderPress}
      /> 
      <div className='controls-right'>
            <button
                className='control restart'
                onClick={(e) => {
                    onRestart();
                }}
            >
                ↺
            </button>
            <button 
                className='control fullscreen'
                onClick={(e) => {
                  console.log("fullscreen")
                }}
            >
                ⛶
            </button>
      </div>
    </div>
}

export default Controls
