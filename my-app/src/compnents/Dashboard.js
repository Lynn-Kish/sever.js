import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AddCyclist from './AddCyclist';
import SearchCyclists from './SearchCyclists';
import GenerateReport from './GenerateReport';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/add-cyclist">Add Cyclist</Link></li>
        <li><Link to="/search-cyclists">Search Cyclists</Link></li>
        <li><Link to="/generate-report">Generate Report</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route path="/add-cyclist" component={AddCyclist} />
        <Route path="/search-cyclists" component={SearchCyclists} />
        <Route path="/generate-report" component={GenerateReport} />
      </Switch>
    </div>
  );
}

export default Dashboard;


