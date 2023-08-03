//react
import React from "react";
//components
import Counter from "./components/Counter";
import Post from "./components/Post";
//css
import "./css/bigReset.css";
import "./css/mainCss.css";

function App() {
  //useState
  //let [value,setValue] = useState('Text in input')
  //Main DOM react
  return (

    <div className="App">

      <Counter/>
      <Post post={{id:1,name:'a', title:"JavaScript - program language.", body:". JavaScript", btn:"Delete",}}/>
      <Post post={{id:2,name:'b', title:"C# - program language.", body:". C#", btn:"Delete",}}/>
      <Post post={{id:3,name:'c', title:"React - no program language.", body:". React", btn:"Delete",}}/>
    </div>
  );
}

export default App;