import React from "react";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
  MediaAirplayButton,
  MediaCaptionsButton,
} from "media-chrome/react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
        <MediaController
          style={{
            width: "100%",
            aspectRatio: "16/9",
          }}
        >
          <video
            slot="media"
            src={videoUrl}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            crossOrigin="anonymous"
          />
          <MediaControlBar>
            <MediaPlayButton />
            <MediaSeekBackwardButton seekOffset={10} />
            <MediaSeekForwardButton seekOffset={10} />
            <MediaTimeRange />
            <MediaTimeDisplay showDuration />
            <MediaMuteButton />
            <MediaVolumeRange />
            <MediaPlaybackRateButton />
            <MediaAirplayButton />
            <MediaCaptionsButton />
            <MediaFullscreenButton />
          </MediaControlBar>
        </MediaController>
      </div>
    </div>
  );
};

export default VideoPlayer;
