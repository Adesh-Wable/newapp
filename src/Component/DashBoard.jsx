import React from 'react';
import '../Component/Style/NewApp.css'
import {  Link, BrowserRouter as  Router } from 'react-router-dom';


const DashBoard = () => {
  return (
    <div>
      <nav>
            <label className="logo">APP LOGO</label>
            <ul>
              <Router>
              <li> <Link to={'/'}>DASHBOARD</Link></li>
              <li><Link to={'/createad'}>Create Ads</Link></li>
              </Router>
            </ul>
        </nav>
      <div>
      </div>
    </div>
  )
}
export default DashBoard;