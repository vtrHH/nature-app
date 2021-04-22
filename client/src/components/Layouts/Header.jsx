import React from 'react'
import Navbar from '../Navbar';

const Header = (props) => {

    handleSignOut = async () => {
        await signOut();
        this.handleUserChange(null);
      };

    return (
        <>
            <Navbar user={user} onSignOut={() => handleSignOut()} />
        </>
    )
}

export default Header;