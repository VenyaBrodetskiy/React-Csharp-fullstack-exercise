import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

import "./style.scss"

export default function SidebarComponent() {
    const { user } = useAuth0();
    return (
        <div className="h-100 bg-violet side-bar">
            <div className="d-flex flex-column flex-shrink-0 h-100 ">

                <ul className="nav nav-pills flex-column">
                    <li className="nav-item my-1 ">
                        <Link to={"/"} className="nav-link text-white">
                            <i className="bi bi-house-door fs-3 me-5 "></i>
                            <span className="fs-4 section-name">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item my-1">
                        <Link to={"/movies"} className="nav-link text-white">
                            <i className="bi bi-film fs-3 me-5"></i>
                            <span className="fs-4 section-name">Movies</span>
                        </Link>
                    </li>
                    <li className="nav-item my-1">
                        <Link to={"/games"} className="nav-link text-white">
                            <i className="bi bi-controller fs-3 me-5"></i>
                            <span className="fs-4 section-name">Games</span>
                        </Link>
                    </li>
                    <li className="nav-item my-1">
                        <Link to={"/about"} className="nav-link text-white">
                            <i className="bi bi-info-circle-fill fs-3 me-5"></i>
                            <span className="fs-4 section-name">About</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-1 mb-5">
                        <Link to={"/contactus"} className="nav-link text-white">
                            <i className="bi bi-telephone fs-3 me-5"></i>
                            <span className="fs-4 section-name">Contact us</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-5">
                        <Link to={"/profile"} className="nav-link text-white">
                            <i className="bi bi-person-circle fs-3 me-5"></i>
                            <span className="fs-4 section-name">{user?.given_name ? user!.given_name : "Profile"}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
