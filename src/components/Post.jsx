import React from "react";

const Post = function (props) {

    //function for Delete div post
    function addClassNone() {
        const post__btn = document.querySelector(`#${props.post.name}`)
    
        console.log(post__btn)
        post__btn.classList.add("none")
    }

    //react DOM
    return(
        <div id={props.post.name} className="post">
            <div className="post__content">
                <strong>{props.post.id}{props.post.body}</strong>
                <div>
                    {props.post.title}
                </div>
                <button onClick={addClassNone} className="post__btns">
                    {props.post.btn}
                </button>
            </div>
        </div>
    )
}

export default Post;