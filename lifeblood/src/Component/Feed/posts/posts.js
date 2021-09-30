import React from 'react';
import './posts.css';
import SinglePost from '../SinglePost/SinglePost';
const Posts = (props)=>{
 return(
    <div className="posts_container">
       <div className="posts_Headline">
            <h1>DONORS</h1>
       </div>
       <div className="posts_div">
        <SinglePost/>
        <SinglePost/>
       </div>
    </div>
    )

};
export default Posts;