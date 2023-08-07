//react
import React from "react";
//css
import "../input/MyInputCSS.css"

const MyInput = React.forwardRef((props,ref) => {
    return (
        <input ref={ref} className="MyInput" type="text" {...props}/>
    )
})

export default MyInput;