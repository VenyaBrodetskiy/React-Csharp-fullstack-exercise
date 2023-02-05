import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import "./style.scss";

export default function DefaultLayout() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="d-flex bg-violet justify-content-center">
            <button className="btn btn-primary align-self-center" onClick={() => loginWithRedirect()}>Go to dashboard</button>
        </div>
    )
}
