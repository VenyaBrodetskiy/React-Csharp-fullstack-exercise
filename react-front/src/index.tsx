import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Auth0Provider
        domain="dev-jz8i8ymmqw7p0b8t.us.auth0.com"
        clientId="qtoM8WRPFC2FzDGGwZ2O1GOsWrf7FVYj"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Auth0Provider>
);

