import React from 'react';
import './posts.css';
import SinglePost from '../SinglePost/SinglePost';
const Data = [{name:"Ashish sharma",bloodGrp:"o +",Age:22,HealthIssue:"Nill"},
              {name:"Ashwin Nair",bloodGrp:"AB",Age:22,HealthIssue:"Nill"},
              {name:"Aman",bloodGrp:"o +",Age:22,HealthIssue:"Nill"},
              {name:"Abhimanyu",bloodGrp:"B",Age:22,HealthIssue:"Nill"},
              {name:"Jeetesh",bloodGrp:"B+",Age:21,HealthIssue:"Nill"},
              {name:"Rishab",bloodGrp:"o +",Age:21,HealthIssue:"Nill"},
              {name:"Nimit",bloodGrp:"A-",Age:21,HealthIssue:"Nill"}]
const Posts = (props)=>{
 return(
    <div className="posts_container">
       <div className="posts_Headline">
            <h1>DONORS</h1>
       </div>
       <div className="posts_div">
           {Data.map(post=>{
               return (<SinglePost name={post.name} bloodGrp={post.bloodGrp} Age={post.Age} HealthIssue = {post.HealthIssue}/>)
           })}
    
       </div>
    </div>
    )

};
export default Posts;