import React, { useState } from 'react'
import Webcam from 'react-webcam'
import "./main.css";
const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: 'user',
}
const Camera = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })
  return (
    <div className="cam-container">
      <div>
        {picture === '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={600}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="cam"
          />
        ) : (
          <img src={picture} alt=''/>
        )}
      </div>
      <div>
        {picture !== '' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture()
            }}
            className="btn-retake"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn-capture"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  )
}
export default Camera