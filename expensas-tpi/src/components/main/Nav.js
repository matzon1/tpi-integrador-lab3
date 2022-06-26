import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";

import Lightswitch from "./Lightswitch";

import './Container.css';
import './Nav.css'

const Nav = () => {
  const {isAuthenticated} = useAuth0();
  return (
    <div>
      <nav className="nav-bar">
        <h1>AE</h1>
        
        <div className="buttons">
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
        <Lightswitch />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
