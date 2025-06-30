import React, { useEffect, useRef, useState } from "react";
import LoaderVideo from "../assets/Loader.mp4";
import "../Components/Styles/Loader.css";

export default function Loader({ onLoaded }) {
  const videoRef = useRef(null);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Lock scroll when loader mounts
    document.body.classList.add('no-scroll');

    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      onLoaded();
    };

    const handleVideoError = () => {
      console.error("Video loading failed");
      onLoaded();
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
      videoElement.addEventListener("error", handleVideoError);
      
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Auto-play prevented:", error);
          setShowSkip(true);
          videoElement.muted = true;
          videoElement.play().catch(e => console.warn("Muted play failed:", e));
        });
      }
    }

    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 3000);

    const timeoutTimer = setTimeout(() => {
      onLoaded();
    }, 15000);

    return () => {
      // Cleanup - remove scroll lock when loader unmounts
      document.body.classList.remove('no-scroll');
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
        videoElement.removeEventListener("error", handleVideoError);
      }
      clearTimeout(skipTimer);
      clearTimeout(timeoutTimer);
    };
  }, [onLoaded]);

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onLoaded();
  };

  return (
    <div className="video-loader-container">
      <video
        ref={videoRef}
        className="loader-video"
        autoPlay
        muted
        playsInline
        controls={false}
        preload="auto"
      >
        <source src={LoaderVideo} type="video/mp4" />
        Your browser doesn't support the video tag.
      </video>

      {showSkip && (
        <button onClick={handleSkip} className="skip-button">
          Skip Intro
        </button>
      )}
    </div>
  );
}