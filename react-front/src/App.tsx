import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './App.css';
import DefaultLayout from './layout/defaultLayout/default.layout';
import MainLayout from './layout/mainLayout/main.layout';

function App() {
    const { isAuthenticated, isLoading } = useAuth0();
    return (
        <div className="App">
            {isAuthenticated && <MainLayout />}
            {!isAuthenticated && <DefaultLayout />}
            {isLoading && (
                <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            )}
        </div>
    );
}

export default App;
