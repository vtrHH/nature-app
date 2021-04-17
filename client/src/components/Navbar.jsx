import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onSignOut }) => {
  console.log(user);
  return (
    <nav className="navbar">
      <Link to="/">
        <strong>NatureApp</strong>
      </Link>
      {/* <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>   */}
      {user && (
        <>
          {user.role === 'individual' && (
            <Link to="/observation/create">Create Observation</Link>

          )}
                    {user.role === 'individual' && (

            <Link to="/forum">Forum</Link>
          )}
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
            <Link to="/observation/create" disabled>
              Create Observation
            </Link>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
