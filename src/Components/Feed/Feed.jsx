import React from 'react';
import Post from '../Post/Post.jsx';
import './Feed.css';

export default function Feed({ posts }) {

    return (
        <div className="feed">
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
}