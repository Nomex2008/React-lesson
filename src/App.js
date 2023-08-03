import React from "react";

function App() {

  let likes = 9;

  function likesSea () {
    if(likes === -1){
      likes = 0
    }
  }
  return (

    <div className="App">

      <button onClick={() => {
        likes=likes+1;
        likesSea();
        console.log(likes);
      }}>Increment</button>

      <button  onClick={() => {
        likes=likes-1;
        likesSea();
        console.log(likes);
      }}>Decrement</button>

    </div>
  );
}

export default App;