import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ user, onSignOut }) => {
  console.log(user);
  return (
    
    <nav className="navbar">
      <Link to="/">
        <strong>NatureApp</strong>
      </Link>
      {/* <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>   */}
      <Link to="/bird/create">Create Bird</Link>
      {user && (
        <>
          {user.role === 'individual' && <Link to="/bird/create">Add Bird</Link>}
        </>
      )}
      <div>
        {(user && (
          <>
            {user.profilePicture && (
              <img src={user.profilePicture} alt={user.username} />
            )}
            <Link to={`/${user.role}/${user._id}`}>{user.username}</Link>
            {/* {user.role === 'individual' && (
              <Link to="/profile">Profile</Link>
            )} */}
            <button onClick={onSignOut}>Sign Out</button>
          </>
        )) || (
          <>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;