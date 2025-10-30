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
} from "media-chrome/react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
        <MediaController
          style={{
            width: "100%",
            aspectRatio: "16/9",
            "--media-control-height": "20px",
            "--media-control-padding": "4px",
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
          <MediaControlBar
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1px",
              padding: "2px",
              background: "rgba(0, 0, 0, 0.8)",
            }}
          >
            <MediaPlayButton style={{ minWidth: "10px" }} />
            <MediaSeekBackwardButton
              seekOffset={10}
              style={{ minWidth: "10px" }}
              className="sm:block"
            />
            <MediaSeekForwardButton
              seekOffset={10}
              style={{ minWidth: "10px" }}
              className="sm:block"
            />
            <MediaTimeRange style={{ flex: "1", minWidth: "100px" }} />
            <MediaTimeDisplay
              showDuration
              style={{ minWidth: "10px", fontSize: "12px" }}
            />
            <MediaMuteButton style={{ minWidth: "10px" }} />
            <MediaVolumeRange
              style={{ width: "60px", display: "none" }}
              className="md:block"
            />
            <MediaPlaybackRateButton style={{ minWidth: "10px" }} />
            <MediaFullscreenButton style={{ minWidth: "10px" }} />
          </MediaControlBar>
        </MediaController>
      </div>
    </div>
  );
};

export default VideoPlayer;
