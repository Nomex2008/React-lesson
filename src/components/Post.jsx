import React from "react";

const Post = function (props) {

    //react DOM
    return(
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}{props.post.body}</strong>
                <div>
                    {props.post.title}
                </div>
                <button className="post__btns">
                    {props.post.btn}
                </button>
            </div>
        </div>
    )
}

export default Post;