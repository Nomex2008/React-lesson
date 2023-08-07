//react
import React, {useState } from "react";
//components
import Counter from "./components/Counter";
import PostList from "./components/PostList";
//UI
//Mybtn
import MyButton from "./components/UI/button/MyButton";
//MyInput
import MyInput from "./components/UI/input/MyInput";
//css
import "./css/bigReset.css";
import "./css/mainCss.css";

function App() {

  //posts info masive
  const [posts,setPosts] = useState([
    {id:1,name:'name1', title:"JavaScript - program language.", body:". JavaScript", btn:"Delete",},
    {id:2,name:'name2', title:"C# - program language.", body:". C#", btn:"Delete",},
    {id:3,name:'name3', title:"React - no program language.", body:". React", btn:"Delete",},
  ])
  const [posts2,setPosts2] = useState([
    {id:4,name:'name4', title:"JavaScript - program language.", body:". JavaScript", btn:"Delete",},
    {id:5,name:'name5', title:"C# - program language.", body:". C#", btn:"Delete",},
    {id:6,name:'name6', title:"React - no program language.", body:". React", btn:"Delete",},
  ])

  //form
  //addNewPostbody
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')

  const [body2, setBody2] = useState('')
  const [title2, setTitle2] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()

    let newPost = {
        id: 0,
        name:`name${Date.now()}`,
        title,
        body: `. ${body}`,
        btn:"Delete",
    }
    
    setPosts([...posts,newPost])

    setBody('')
    setTitle('')
  }

  const addNewPost2 = (e) => {
    e.preventDefault()

    let newPost = {
        id: 0,
        name:`name${Date.now()}`,
        title:title2,
        body: `. ${body2}`,
        btn:"Delete",
    }
    
    setPosts2([...posts2,newPost])

    setBody2('')
    setTitle2('')
  }

  return (

    <div className="App">

      {
        //counter
      }
      <Counter/>

      {
        //postList
      }
      <PostList posts={posts} title="List of posts 1"/>

      {
        //form2
      }
      <form className="MyForm">

        {/*control component*/}
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder="Name Post"
         />

        {/*control component*/}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Info about Post"
         />

         {/*no control component*/}
        {/*<MyInput
          ref={bodyIputRef}
          type="text"
          placeholder="Info about Post"
         />
        */}
        
        <MyButton onClick={addNewPost}>
          Create Post
        </MyButton>
      </form>

      <PostList posts={posts2} title="List of posts 2"/>
      
      {
        //form2
      }
      <form className="MyForm">

        {/*control component*/}
        <MyInput
          value={body2}
          onChange={e => setBody2(e.target.value)}
          type="text"
          placeholder="Name Post"
         />

        {/*control component*/}
        <MyInput
          value={title2}
          onChange={e => setTitle2(e.target.value)}
          type="text"
          placeholder="Info about Post"
         />

         {/*no control component*/}
        {/*<MyInput
          ref={bodyIputRef}
          type="text"
          placeholder="Info about Post"
         />
        */}
        
        <MyButton onClick={addNewPost2}>
          Create Post
        </MyButton>
      </form>
    </div>
  );
}

export default App;