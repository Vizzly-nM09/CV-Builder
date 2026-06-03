import { useNavigate } from "react-router-dom";
import "../App.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-content">
        <div className="landing-badge">✦ Free & Open Source</div>
        <h1 className="landing-title">
          Build your CV in <span className="landing-accent">few minutes</span>
        </h1>

        <p className="landing-desc">
          Fill in your details, choose a template, and download a professional
          CV instantly. No signup required.
        </p>

        <div className="landing-features">
          <div className="feature-item">
            <span>⚡</span>
            <p>Live Preview</p>
          </div>
          <div className="feature-item">
            <span>🎨</span>
            <p>3 Templates</p>
          </div>
          <div className="feature-item">
            <span>📄</span>
            <p>PDF Export</p>
          </div>
          <div className="feature-item">
            <span>💾</span>
            <p>Auto Save</p>
          </div>
        </div>

        <button className="landing-btn" onClick={() => navigate("/builder")}>
          Build My CV →
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
