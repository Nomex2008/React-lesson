import React from "react";
//css
import "../button/MyButtonCSS.css"

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className="myBtn">
            {children}
        </button>
    )
}

export default MyButton;