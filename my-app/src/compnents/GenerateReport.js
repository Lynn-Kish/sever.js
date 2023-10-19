import React, { useState } from 'react';

function GenerateReport() {
  const [reportData, setReportData] = useState(null);
  const [reportCriteria, setReportCriteria] = useState({
    stage: '',
    ageRange: '',
  });

  const handleGenerateReport = () => {
    // Simulate generating a report (replace this with actual API call)
    const { stage, ageRange } = reportCriteria;

    fetch(`/api/report?stage=${stage}&ageRange=${ageRange}`) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setReportData(data))
      .catch((error) => console.error('Error generating report:', error));
  };

  return (
    <div>
      <h2>Generate Report</h2>
      <form>
        <div>
          <label htmlFor="stage">Stage:</label>
          <select
            id="stage"
            value={reportCriteria.stage}
            onChange={(e) => setReportCriteria({ ...reportCriteria, stage: e.target.value })}
          >
            <option value="">All Stages</option>
            <option value="Stage 1">Stage 1</option>
            <option value="Stage 2">Stage 2</option>
            {/* Add more stage options */}
          </select>
        </div>
        <div>
          <label htmlFor="ageRange">Age Range:</label>
          <input
            type="text"
            id="ageRange"
            value={reportCriteria.ageRange}
            onChange={(e) => setReportCriteria({ ...reportCriteria, ageRange: e.target.value })}
          />
        </div>
        <button onClick={handleGenerateReport}>Generate Report</button>
      </form>

      {reportData && (
        <div>
          <h3>Report Results</h3>
          <ul>
            {reportData.map((item, index) => (
              <li key={index}>
                {/* Format and display report data */}
                <strong>Name:</strong> {item.name}, <strong>Age:</strong> {item.age}, <strong>Stage:</strong> {item.stage}
                {/* Add more data fields as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GenerateReport;
