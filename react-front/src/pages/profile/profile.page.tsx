import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default function ProfilePage() {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
    return (
        <div>
            <div className="display-3">Profile Page</div>
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
                    <div className="display-6 mb-2">You are not logged in, please sign up</div>
                    <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log in</button>
                </div>
            )}
        </div>
    )
}
