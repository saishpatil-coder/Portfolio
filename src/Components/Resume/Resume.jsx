import React, { useState } from 'react';
import './Resume.css';

export default function Resume() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError('Failed to load resume. Please try again.');
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Saish_Patil_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      {/* Header */}
      <div className="resume-header">
        <h1 className="resume-title">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Resume
          </span>
        </h1>
        <p className="resume-subtitle">Professional experience and skills overview</p>
      </div>

      {/* Resume Viewer */}
      <div className="resume-viewer">
        {loading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>Loading resume...</p>
          </div>
        )}
        
        {error && (
          <div className="error-overlay">
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className="retry-btn">
              Try Again
            </button>
          </div>
        )}

        <iframe
          src="/resume.pdf"
          className="resume-pdf"
          onLoad={handleLoad}
          onError={handleError}
          title="Saish Patil Resume"
        />
      </div>

      {/* Action Buttons */}
      <div className="resume-actions">
        <button 
          onClick={downloadResume}
          className="download-btn"
          title="Download Resume"
        >
          <svg className="download-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download PDF
        </button>
        
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="open-btn"
          title="Open in new tab"
        >
          <svg className="open-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
          Open in New Tab
        </a>
      </div>


    </div>
  );
} 