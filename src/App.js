//react
import React, { useState } from "react";
//components
import Counter from "./components/Counter";
import PostList from "./components/PostList";
//css
import "./css/bigReset.css";
import "./css/mainCss.css";

function App() {

  //posts info masive
  const [posts,] = useState([
    {id:1,name:'name1', title:"JavaScript - program language.", body:". JavaScript", btn:"Delete",},
    {id:2,name:'name2', title:"C# - program language.", body:". C#", btn:"Delete",},
    {id:3,name:'name3', title:"React - no program language.", body:". React", btn:"Delete",},
  ])
  const [posts2,] = useState([
    {id:4,name:'name4', title:"JavaScript - program language.", body:". JavaScript", btn:"Delete",},
    {id:5,name:'name5', title:"C# - program language.", body:". C#", btn:"Delete",},
    {id:6,name:'name6', title:"React - no program language.", body:". React", btn:"Delete",},
  ])

  return (

    <div className="App">

      <Counter/>

      {
        //postList
      }
      <PostList posts={posts} title="List of posts 1"/>
      <PostList posts={posts2} title="List of posts 2"/>
      
    </div>
  );
}

export default App;