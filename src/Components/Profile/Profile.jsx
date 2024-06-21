// eslint-disable-next-line no-unused-vars
import React, {useContext, useState} from "react";
import './Profile.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faImage, faFilm, faTag, faBookmark} from "@fortawesome/free-solid-svg-icons";

import posts from "../../Constants/posts.js";
import {GlobalStore} from "../../store/GlobalStore.jsx";

export default function Profile() {

    const {deviceType} = useContext(GlobalStore);

    const [activeTab, setActiveTab] = useState("Posts");/* Mobile styles */

    return (
        <div id="profile-page">

            {
                deviceType !== 'mobile' &&
                <div id="profile-top-container">


                    <div id="profile-image-container">
                        <img src="https://picsum.photos/200" alt="Profile"/>
                    </div>

                    <div id="profile-info-container">

                        <div id="profile-actions">
                            <h1>John Doe</h1>
                            <div className="action-group">
                                <div>Follow</div>
                                <div>Message</div>
                                <div>Edit profile</div>
                            </div>
                        </div>

                        <div id="profile-stats">
                            <div id="followers">30 Followers</div>
                            <div id="following">20 Following</div>
                            <div id="posts">30 Posts</div>
                        </div>

                        <div id="profile-bio">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi cupiditate, et
                                nihil
                                officia optio ut voluptatibus! Labore mollitia obcaecati tempore vitae! A architecto
                                asperiores delectus dicta eius enim eos et fuga, fugiat fugit illo ipsam iste magni
                                minima
                                necessitatibus odio praesentium provident quam, quia reprehenderit sunt tempore tenetur
                                voluptate.</p>
                        </div>
                    </div>

                </div>
            }

            {
                deviceType === 'mobile' &&
                <div id="profile-top-container">

                    <div id="names-section">
                        <div id="profile-image-container">
                            <img src="https://picsum.photos/200" alt="Profile"/>
                        </div>

                        <div id="profile-actions">
                            <h1>John Doe</h1>
                            <div className="action-group">
                                <div>Follow</div>
                                <div>Message</div>
                                <div>Edit profile</div>
                            </div>
                        </div>
                    </div>

                    <div id="stats-section">
                        <div id="profile-stats">
                            <div id="followers">30 Followers</div>
                            <div id="following">20 Following</div>
                            <div id="posts">30 Posts</div>
                        </div>

                        <div id="profile-bio">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi cupiditate, et
                                nihil
                                officia optio ut voluptatibus! Labore mollitia obcaecati tempore vitae! A architecto
                                asperiores delectus dicta eius enim eos et fuga, fugiat fugit illo ipsam iste magni
                                minima
                                necessitatibus odio praesentium provident quam, quia reprehenderit sunt tempore tenetur
                                voluptate.</p>
                        </div>
                    </div>

                </div>
            }

            <div id="highlights-container">

                <div className="highlight">
                    <div className="highlight-image" id={"add-highlight-container"}>
                        <FontAwesomeIcon id={"add-highlight"} icon={faPlus}/>
                    </div>
                    <p>Add</p>
                </div>

                <div className="highlight">
                    <div className="highlight-image">
                        <img src="https://picsum.photos/200" alt="Highlight"/>
                    </div>
                    <p>Highlight 1</p>
                </div>

            </div>

            <div id="profile-bottom-container">

                <div id="tabs-container">
                    <div className={`tab ${activeTab === "Posts" ? "active" : ""}`}
                         onClick={() => setActiveTab("Posts")}>
                        <FontAwesomeIcon icon={faImage}/>
                        Posts
                    </div>
                    <div className={`tab ${activeTab === "Reels" ? "active" : ""}`}
                         onClick={() => setActiveTab("Reels")}>
                        <FontAwesomeIcon icon={faFilm}/>
                        Reels
                    </div>
                    <div className={`tab ${activeTab === "Tagged" ? "active" : ""}`}
                         onClick={() => setActiveTab("Tagged")}>
                        <FontAwesomeIcon icon={faTag}/>
                        Tagged
                    </div>
                    <div className={`tab ${activeTab === "Saved" ? "active" : ""}`}
                         onClick={() => setActiveTab("Saved")}>
                        <FontAwesomeIcon icon={faBookmark}/>
                        Saved
                    </div>
                </div>

                <div id="profile-posts-container">

                    {posts.map((post, index) => {
                        return (
                            <div key={index} className="profile-post">
                                <img src={post.imageUrl} alt="Post"/>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}