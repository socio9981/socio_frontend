/**
 * @file
 * This file defines the `SideBar` component of the application.
 * It imports and uses the `GlobalStore` to access and manipulate the `darkMode`, `sideBarMinimized`, `toggleDarkMode`, and `toggleSideBar` states.
 * It also imports and uses the `FontAwesomeIcon` component from `@fortawesome/react-fontawesome` and several icons from `@fortawesome/free-solid-svg-icons`.
 * It imports several images to use as the logo depending on the `darkMode` and `sideBarMinimized` states.
 * It defines and uses several state variables and a state update function.
 * It defines and uses the `SideBar` functional component which returns a div with several child elements.
 *
 * @module SideBar
 * @requires react
 * @requires ./SideBar.css
 * @requires @fortawesome/react-fontawesome
 * @requires @fortawesome/free-solid-svg-icons
 * @requires ../../store/GlobalStore.jsx
 */

// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useContext} from 'react';
import './SideBar.css';

import white_theme_small_logo from '../../../public/images/small_logos/white_theme_letter.png';
import black_theme_small_logo from '../../../public/images/small_logos/black_theme_letter.png';
import white_theme_full_logo from '../../../public/images/large_logos/white_theme_full.png';
import black_theme_full_logo from '../../../public/images/large_logos/black_theme_full.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faHome,
    faSearch,
    faComment,
    faCompass,
    faUser,
    faBars,
    faBell,
    faSquarePlus,
    faToggleOn,
    faToggleOff,
    faExchangeAlt,
    faCog
} from '@fortawesome/free-solid-svg-icons';
import {GlobalStore} from "../../store/GlobalStore.jsx";

/**
 * The `SideBar` functional component.
 *
 * @function
 * @name SideBar
 * @returns {JSX.Element} The rendered JSX element
 */
export default function SideBar() {

    const {darkMode, toggleDarkMode, sideBarMinimized, toggleSideBar} = useContext(GlobalStore); // Access the dark mode state from the global store
    const [notificationCount, setNotificationCount] = useState(0);
    const [isNewNotification, setIsNewNotification] = useState(false);
    const [chatCount, setChatCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // Remove the useEffect that was simulating notifications every 3 seconds
// Keep the useEffect that removes the shaking effect after 1 second
    useEffect(() => {
        if (isNewNotification) {
            setTimeout(() => {
                setIsNewNotification(false);
            }, 1000); // Remove the new notification state after 1 second
        }
    }, [isNewNotification]); // Add isNewNotification as a dependency

    /**
     * The `SideBar` component return statement.
     * It returns a div with several child elements.
     * The div has a dynamic class based on the `sideBarMinimized` state.
     * The child elements include an image with a dynamic src based on the `darkMode` and `sideBarMinimized` states,
     * several divs with `FontAwesomeIcon` components and optional p elements based on the `sideBarMinimized` state,
     * and a div with a `FontAwesomeIcon` component and a conditional div based on the `isModalOpen` state.
     */
    return (
        <div className={`sidebar ${sideBarMinimized ? 'minimized' : ''}`}>

            <img className={"sidebar-logo"}
                 src={
                     sideBarMinimized
                         ? darkMode ? black_theme_small_logo : white_theme_small_logo
                         : darkMode ? black_theme_full_logo : white_theme_full_logo
                 }
                 alt="Logo"
            />

            <div className="icon home" onClick={() => toggleSideBar(false)}><FontAwesomeIcon
                icon={faHome}/> {!sideBarMinimized && <p>Home</p>}</div>
            <div className="icon search" onClick={() => toggleSideBar(true)}><FontAwesomeIcon
                icon={faSearch}/> {!sideBarMinimized && <p>Search</p>}</div>
            <div className="icon chat" onClick={() => toggleSideBar(true)}>
                <FontAwesomeIcon icon={faComment}/>
                {!sideBarMinimized && <p>Chat</p>}
                {chatCount > 0 && <span className="chat-count">{chatCount}</span>} {/* Add this line */}
            </div>
            <div className="icon explore" onClick={() => toggleSideBar(true)}><FontAwesomeIcon
                icon={faCompass}/> {!sideBarMinimized && <p>Explore</p>}</div>
            <div className="icon notifications" onClick={() => toggleSideBar(true)}>
                <div className={isNewNotification ? 'new-notification' : ''}>
                    <FontAwesomeIcon icon={faBell}/>
                </div>
                {!sideBarMinimized && <p>Notifications</p>}
                {notificationCount > 0 && <span className="notification-count">{notificationCount}</span>}
            </div>
            <div className="icon create" onClick={() => toggleSideBar(false)}><FontAwesomeIcon
                icon={faSquarePlus}/> {!sideBarMinimized && <p>Create</p>}</div>
            <div className="icon profile" onClick={() => toggleSideBar(false)}><FontAwesomeIcon
                icon={faUser}/> {!sideBarMinimized && <p>Profile</p>}</div>
            <div className="icon more" onClick={() => {
                toggleSideBar(sideBarMinimized);
                toggleModal();
            }
            }><FontAwesomeIcon icon={faBars}/> {!sideBarMinimized && <p>More</p>}

                {isModalOpen && (
                    <div className="modal-content" style={{
                        backgroundColor: darkMode ? '#333' : '#fff',
                        color: darkMode ? '#fff' : '#333'
                    }}>
                        <div className="modal-item">
                            <FontAwesomeIcon icon={faCog}/>
                            <p>Settings</p>
                        </div>
                        <div className="modal-item">
                            <FontAwesomeIcon icon={faExchangeAlt}/>
                            <p>Switch Accounts</p>
                        </div>
                        <div className="modal-item" onClick={toggleDarkMode}>
                            <FontAwesomeIcon icon={darkMode ? faToggleOn : faToggleOff}/>
                            <p>Toggle Dark Mode</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}