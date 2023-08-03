import React, {useState} from "react";

const Counter = function (){
    const [count, setCount] = useState(0)

    //count

    function increment() {
        setCount(count + 1)
        console.log(count + 1);
    }

    function decrement() {
        if(count > 0){
            setCount(count - 1)
            console.log(count - 1);
        }
    }

    //react DOM

    return(
        <div className="shopContact">
            <h1 className="shopContact__title">{count}</h1>
            <button className="shopContact__btn" onClick={decrement}>Decrement</button>
            <button className="shopContact__btn add" onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;