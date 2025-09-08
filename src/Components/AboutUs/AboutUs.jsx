import React from 'react'
import "./AboutUs.scss"
import HoverVideoPlayer from "react-hover-video-player";
import aboutVideo from "/videos/Sequence 01_11.mp4"
import thumbnailImage from "/images/aboutvideo-thumbnail.webp"
import Title from '../Title/Title';
import play_icon from "/icons/highlight_mouse_cursor_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"


const AboutUs = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <HoverVideoPlayer
          videoSrc={aboutVideo}
          restartOnPaused 
          className='about-video'
          pausedOverlay={
            <img
              src={thumbnailImage}
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          }
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
        <img className='play-icon' src={play_icon} alt="" />
      </div>
      <div className='about-right'>
        <Title subTitle = "About Us" title = "Professional pest control"/>
        <p>At Vamonos Pest, we provide discreet, professional, and reliable pest control services to residential and commercial clients across New Mexico. Whether you’re dealing with termites, bedbugs, or cockroaches, our experienced technicians use state-of-the-art fumigation technology to make sure your property is pest-free and safe.</p>
        <h3>We specialize in:</h3>
        
        <ul>
          <li>Whole-house fumigation</li>
          <li>Integrated pest management</li>
          <li>Residential sealing and tenting</li>
          <li>Green / environmentally friendly extermination solutions</li>
        </ul>
      </div>

    </div>
  )
}

export default AboutUs