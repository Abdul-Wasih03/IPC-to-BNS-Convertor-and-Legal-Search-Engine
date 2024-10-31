import React from 'react';
import './ImportanceOfLaw.css';

const ImportanceOfLaw = () => {
  return (
    <section id="importance-law" className="info-section">
      <h2 className="section-title">Why Everyone Should Know About Law</h2>
      <div className="reason-cards">
        <div className="card">
          <h3 className="highlight">Safeguard Your Rights</h3>
          <p>Knowing the law helps you protect your personal rights and freedoms.</p>
        </div>
        <div className="card">
          <h3 className="highlight">Informed Decision-Making</h3>
          <p>Understanding the legal implications of your decisions leads to better choices.</p>
        </div>
        <div className="card">
          <h3 className="highlight">Know Your Duties</h3>
          <p>Awareness of your legal responsibilities fosters harmony in society.</p>
        </div>
      </div>
    </section>
  );
};

export default ImportanceOfLaw;
