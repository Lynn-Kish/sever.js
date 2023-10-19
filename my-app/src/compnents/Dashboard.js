import React from 'react';
import { Link } from 'react-router-dom';
import AddCyclist from './AddCyclist';
import SearchCyclists from './SearchCyclists';
import ViewCyclist from './ViewCyclist';
import GenerateReport from './GenerateReport';

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <nav>
          <ul>
            <li>
              <Link to="/add">Add Cyclist</Link>
            </li>
            <li>
              <Link to="/search">Search Cyclists</Link>
            </li>
            <li>
              <Link to="/view">View Cyclist</Link>
            </li>
            <li>
              <Link to="/report">Generate Report</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Dashboard;
