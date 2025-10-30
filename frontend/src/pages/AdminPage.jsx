import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../components/VideoPlayer";

const AdminPage = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  // API Base URL from environment variable
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Sample video URL - you can replace this with any direct video URL
  // For testing, using a sample MP4 video (you can replace with your own video)
  const sampleVideoUrl =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const startSession = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_URL}/api/start-session`);

      if (response.data.success) {
        setSession(response.data.data);
        // Navigate to the session URL
        const sessionId = response.data.data.unique_id;
        navigate(`/session/${sessionId}`);
      }
    } catch (err) {
      setError("Failed to start session. Please try again.");
      console.error("Error starting session:", err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (session?.userurl) {
      navigator.clipboard.writeText(session.userurl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
              <polyline points="17 2 12 7 7 2"></polyline>
            </svg>
            <h1 className="text-2xl font-semibold text-gray-900">
              Live Session
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Start Session Button */}
        {!session && (
          <div className="text-center">
            {/* Hero Section */}
            <div className="mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Start Your Live Session
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Start a live interactive streaming session and instantly share it with your students, featuring full video controls and real-time collaboration.
              </p>

              <button
                onClick={startSession}
                disabled={loading}
                className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center space-x-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Starting Session...</span>
                  </>
                ) : (
                  <span>Start Session</span>
                )}
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-left">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Full Controls
                </h3>
                <p className="text-gray-600">
                  Play, pause, volume, and fullscreen controls
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 text-left">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Easy Sharing
                </h3>
                <p className="text-gray-600">
                  Share session ID or URL with students instantly
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 text-left">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real-time Sync
                </h3>
                <p className="text-gray-600">
                  All participants see the same video stream
                </p>
              </div>
            </div>

            {error && (
              <div className="mt-8 max-w-md mx-auto bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
          </div>
        )}

        {/* Session Details */}
        {session && (
          <div className="space-y-4 sm:space-y-6">
            {/* Session Info Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                    Session Created Successfully
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Share the details below with your students
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full self-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Active</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Session ID
                  </label>
                  <code className="block text-gray-900 bg-gray-50 px-3 py-2 sm:p-4 rounded-lg border border-gray-200 font-mono text-xs sm:text-sm break-all">
                    {session.unique_id}
                  </code>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Student Access Link
                  </label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={session.userurl}
                      className="flex-1 text-gray-900 bg-gray-50 px-3 py-2 sm:p-4 rounded-lg border border-gray-200 font-mono text-xs sm:text-sm focus:outline-none min-w-0"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="text-gray-700 font-medium rounded-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 px-4 py-2 sm:py-3 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
                    >
                      {copied ? (
                        <>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm">Copied</span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    Share this link with students to join the session
                  </p>
                </div>
              </div>
            </div>

            {/* Video Player */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Live Session Video
              </h3>
              <VideoPlayer videoUrl={sampleVideoUrl} />
            </div>

            {/* New Session Button */}
            <div className="text-center">
              <button
                onClick={() => {
                  setSession(null);
                  setCopied(false);
                }}
                className="bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-6 rounded-lg border border-gray-300 transition-colors inline-flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Start New Session</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
