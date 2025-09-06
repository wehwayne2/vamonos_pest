import React from 'react'
import "./AboutUs.scss"
import HoverVideoPlayer from "react-hover-video-player";
import aboutVideo from "/videos/Sequence 01_11.mp4"
import thumbnailImage from "/images/aboutvideo-thumbnail.webp"

const AboutUs = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <HoverVideoPlayer
          videoSrc={aboutVideo}
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
      </div>
      <div className='about-right'>
        <p>At Vamonos Pest, we provide discreet, professional, and reliable pest control services to residential and commercial clients across New Mexico. Whether you’re dealing with termites, bedbugs, or cockroaches, our experienced technicians use state-of-the-art fumigation technology to make sure your property is pest-free and safe.</p>
        <h3>We specialize in:</h3>
        
        <ul>
          <li>Whole-house fumigation</li>
          <li>Integrated pest management</li>
          <li>Residential sealing and tenting</li>
          <li>Green / environmentally friendly extermination solutions</li>
        </ul>

        <p>
          Our commitment to discretion and precision makes us the preferred choice
          for clients who value quiet professionalism and quick turnaround.
        </p>
      </div>

    </div>
  )
}

export default AboutUs