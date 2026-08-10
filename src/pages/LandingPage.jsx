import { useNavigate } from "react-router-dom";
import "../App.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="hero-section">
        <div className="hero-badge">
          ✦ Professional CV Builder — Fast & 100% Free
        </div>
        <h1 className="hero-title">
          Buat CV Professional Anda <br />{" "}
          <span className="hero-highlight">Dalam Hitungan Menit</span>
        </h1>
        <p className="hero-subtitle">
          {" "}
          Isi data diri Anda, pilih template yang tersedia, dan unduh CV anda
          secara gratis tanpa perlu mendaftar.
        </p>
        <button className="hero-cta-btn" onClick={() => navigate("/builder")}>
          Build My CV Now →
        </button>
        {/* Floating Hero Preview Card */}
        <div className="hero-preview-card">
          <div className="preview-card-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="preview-title">QuickCV Live Builder Preview</span>
          </div>
          <div className="preview-card-body">
            <div className="skeleton-header"></div>
            <div className="skeleton-line full"></div>
            <div className="skeleton-line medium"></div>
            <div className="skeleton-block"></div>
          </div>
        </div>
      </header>
      {/* 2. HOW IT WORKS SECTION */}
      <section className="how-it-works-section">
        <h2 className="section-title">3 Langkah Mudah Membuat CV</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon">📝</div>
            <span className="step-number">Langkah 1</span>
            <h3>Isi Informasi</h3>
            <p>
              Lengkapi informasi diri, pengalaman kerja, pendidikan, dan
              keahlian Anda.
            </p>
          </div>
          <div className="step-card">
            <div className="step-icon">🎨</div>
            <span className="step-number">Langkah 2</span>
            <h3>Pilih Template</h3>
            <p>
              Pilih dari template ATS-friendly, Modern, atau Minimal sesuai
              bidang pekerjaan Anda.
            </p>
          </div>
          <div className="step-card">
            <div className="step-icon">📄</div>
            <span className="step-number">Langkah 3</span>
            <h3>Unduh PDF</h3>
            <p>
              Cetak atau unduh CV Anda secara instan sebagai berkas PDF yang
              rapi dan profesional.
            </p>
          </div>
        </div>
      </section>
      {/* 3. FEATURES & TEMPLATES SHOWCASE */}
      <section className="features-section">
        <h2 className="section-title">Fitur Unggulan</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Live Real-Time Preview</h3>
            <p>
              Lihat setiap perubahan data yang Anda ketik secara langsung pada
              dokumen CV.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>ATS-Friendly Formats</h3>
            <p>
              Format templat dirancang agar mudah dibaca oleh sistem penyeleksi
              CV (ATS).
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🖱️</div>
            <h3>Drag & Drop Reorder</h3>
            <p>
              Ubah urutan pengalaman dan pendidikan dengan mudah hanya dengan
              menggeser kotak.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💾</div>
            <h3>Auto-Save Lokal</h3>
            <p>
              Data Anda tersimpan secara otomatis di peramban sehingga aman dari
              gangguan.
            </p>
          </div>
        </div>
      </section>
      {/* 4. BOTTOM CTA BANNER */}
      <section className="bottom-cta-section">
        <h2>Siap Membuat CV Impian Anda?</h2>
        <p>
          Mulai sekarang dan buat CV profesional Anda dalam waktu kurang dari 5
          menit.
        </p>
        <button className="hero-cta-btn" onClick={() => navigate("/builder")}>
          Mulai Buat CV Sekarang →
        </button>
      </section>
    </div>
  );
}
export default LandingPage;
