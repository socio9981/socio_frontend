/**
 * The `App` component is the root component of the application.
 * It imports and uses the `SideBar` and `MainSection` components.
 * It also uses the `GlobalStore` to access the `darkMode` and `deviceType` states.
 * Depending on the `darkMode` state, it applies different CSS classes to the root div.
 * Depending on the `deviceType` state, it conditionally renders the `SideBar` component.
 *
 * @module App
 * @requires react
 * @requires ./store/GlobalStore.jsx
 * @requires ./App.css
 * @requires ./Components/SideBar/SideBar.jsx
 * @requires ./Components/MainSection/MainSection.jsx
 */

// eslint-disable-next-line no-unused-vars
import React, {useContext, useEffect} from 'react';
import {GlobalStore} from "./store/GlobalStore.jsx"; // Importing the GlobalStore to access the application state

// importing css for App
import './App.css';
import SideBar from "./Components/SideBar/SideBar.jsx"; // Importing the SideBar component
import MainSection from "./Components/MainSection/MainSection.jsx"; // Importing the MainSection component

/**
 * The `App` functional component.
 *
 * @function
 * @name App
 * @returns {JSX.Element} The rendered JSX element
 */
export default function App() {

    // Accessing the dark mode and device type from store.
    const {darkMode,deviceType,updateDeviceType} = useContext(GlobalStore); // Using the useContext hook to access the `darkMode` and `deviceType` states from the GlobalStore

    // Updating the device type on component mount
    useEffect(() => {
        updateDeviceType();
    }, []);

    /**
     * The `App` component return statement.
     * It returns a div with a dynamic id based on the `darkMode` state.
     * Inside this div, it conditionally renders the `SideBar` component based on the `deviceType` state,
     * and always renders the `MainSection` component.
     */
    return (
        <div className="App" id={darkMode ? "darkBG" : "lightBG"}>
            {
                <>
                    {deviceType === 'desktop' && <SideBar/>}
                    <MainSection/>
                </>
            }
        </div>

    )
}