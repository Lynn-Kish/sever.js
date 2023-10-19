import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; // Import Route and Switch
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <h1>KCCA Boda-Boda Cyclist Records</h1>
      <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
      <hr />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;


