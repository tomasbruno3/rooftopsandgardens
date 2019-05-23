import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div>
      <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-right">

        <li><Link to='signup'>Signup</Link></li>
        <li><Link to='signin'>Login</Link></li>

        </ul>
      </div>
    </div>

  )
}

export default SignedOutLinks
