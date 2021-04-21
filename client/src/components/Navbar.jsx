import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onSignOut }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <strong>NatureApp</strong>
      </Link>
      {/* <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>   */}

      <div>
        {(user && (
          <>
            {user.role === 'individual' && (
              <>
                <Link to="/observation/create">Create Observation</Link>
                <Link to="/forum">What´s this bird?</Link>
                <Link to="/organisations">Organisations</Link>
              </>
            )}

            {/*             {user.profilePicture && (
              <img src={user.profilePicture} alt={user.username} />
            )} */}
            <Link to={`/${user.role}/${user._id}`}>{user.username}</Link>

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
