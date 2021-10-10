import React from 'react';
import './SinglePost.css';
const SinglePost = (props)=>{
  return (
    <div className="posts_card">
            <div className="posts_subpart1">
                Maps
            </div>
            <div className="posts_subpart2">
                Personal Information
                <br></br>
                <br></br>
              
                <span>Name: {props.name}</span>
                <br></br>
                <br></br>
                <span>Blood Group: {props.bloodGrp}</span>
                <br></br>
                <br></br>
                <span>Age: {props.Age}</span>
                <br></br>
                <br></br>
                <span>Health Issues: {props.HealthIssue}</span>
            </div>
      
  </div>
  )
}
export default SinglePost;