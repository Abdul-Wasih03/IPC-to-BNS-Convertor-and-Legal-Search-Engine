import React, { useState } from 'react';
import axios from 'axios';
import './LegalSearchEngine.css';

const LegalSearchEngine = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/allsections`, {
        params: { keyword: keyword },
      });
      const matchedResults = response.data.filter((section) =>
        section.keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))
      );
      if (matchedResults.length > 0) {
        setResults(matchedResults);
        setError('');
      } else {
        setError('No matching sections found');
        setResults([]);
      }
    } catch (err) {
      setError('Error fetching data');
      setResults([]);
    }
  };

  return (
    <div className="legal-search-engine">
      <div className="search-content">
        <h2>Legal Search Engine</h2>
        <div className="input-section">
          <label>Enter Keyword:</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="e.g., cheat"
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {error && <p className="error">{error}</p>}
        {results.length > 0 && (
          <div className="results">
            {results.map((result, index) => (
              <div key={index} className="result-item">
                <p className="section" align="center">
                  IPC Section: <span className="highlight ipc">{result.ipc_section}</span> | BNS Section: <span className="highlight bns">{result.bns_section}</span>
                </p>
                <h4 className="title" align="center">Title: <span className="highlight bns">{result.title}</span></h4>
                <div className="description">
                  <h4>Description:</h4><br />
                  <ol>
                    {result.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalSearchEngine;
