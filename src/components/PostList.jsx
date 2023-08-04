//react
import React from "react";
//post
import Post from "./Post"; 

const PostList = ({posts,title}) => {

    return (
        <div>
            {
            //list of posts
            }
            <h1 style={{textAlign:'center',fontSize:'30px',marginTop:'15px',}}>
                {title}
            </h1>

            {posts.map(post =>
                <Post post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostList;