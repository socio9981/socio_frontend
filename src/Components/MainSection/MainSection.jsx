// eslint-disable-next-line no-unused-vars
/**
 * @file
 * This file defines the `MainSection` component of the application.
 * It imports and uses the `GlobalStore` to access and manipulate the `sideBarMinimized` state.
 * It defines and uses the `MainSection` functional component which returns a div with a child h2 element.
 *
 * @module MainSection
 * @requires react
 * @requires ./MainSection.css
 * @requires ../../store/GlobalStore.jsx
 */

// Importing necessary modules and components
import React, {useContext} from 'react';
import './MainSection.css';
import {GlobalStore} from "../../store/GlobalStore.jsx";

/**
 * The `MainSection` functional component.
 *
 * @function
 * @name MainSection
 * @returns {JSX.Element} The rendered JSX element
 */
export default function MainSection() {

    // Access the sidebar minimized state from the global store
    const {sideBarMinimized, toggleSideBar} = useContext(GlobalStore);

    /**
     * The `MainSection` component return statement.
     * It returns a div with a dynamic class based on the `sideBarMinimized` state and a child h2 element.
     */
    return (
        <div className={`mainSection ${sideBarMinimized ? 'minimized' : ''}`}>
            <h2>Main Section</h2>
            {/* Add your main section content here */}
        </div>
    )
}