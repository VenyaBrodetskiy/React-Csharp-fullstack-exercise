import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SidebarComponent from '../../components/sidebar/sidebar.components';

import AboutPage from '../../pages/about/about.page';
import ContactUsPage from '../../pages/contact-us/contactUs.page';
import GamesPage from '../../pages/games/games.page';
import HomePage from '../../pages/home/home.page';
import MoviesPage from '../../pages/movies/movies.page';
import ProfilePage from '../../pages/profile/profile.page';

export default function MainLayout() {
    return (
        <div className="d-flex h-100">
            <div>
                <SidebarComponent />
            </div>
            <div className="bg-dark-subtle col p-3">
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/movies" element={<MoviesPage />}></Route>
                    <Route path="/games" element={<GamesPage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route path="/contactus" element={<ContactUsPage />}></Route>
                    <Route path="/profile" element={<ProfilePage />}></Route>

                    <Route path="*" element={<h1>404 - not found</h1>}></Route>
                </Routes>
            </div>
        </div>
    )
}
