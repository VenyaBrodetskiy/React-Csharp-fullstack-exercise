import { useAuth0 } from '@auth0/auth0-react';
import { Alert } from '@mui/material';
import React from 'react';

export default function ProfilePage() {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
    return (
        <div>
            <div className="display-4">Profile Page</div>
            <hr />
            {isAuthenticated && (
                <div className="card col-6 my-3">
                    <div className="card-header">{user?.name}</div>
                    <div className="card-body">
                        <img src={user?.picture} alt="" />

                        <h4 className="card-title">{user?.family_name}</h4>
                        <p className="card-text">{user?.email}</p>
                        <button className="btn btn-danger" onClick={() => logout()}>Log out</button>

                    </div>
                </div>)}

            {!isAuthenticated && (
                <div>
                    <Alert severity="warning" className="mb-3">
                        You are not logged in, please sign up
                    </Alert>
                    <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log in</button>
                </div>
            )}
        </div>
    )
}
