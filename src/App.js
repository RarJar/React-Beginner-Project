import './App.css';
import Navbar from "./components/Navbar/index";
import PostsList from "./components/PostsList/index";
import {useState} from 'react'

function App() {
  let [posts,setPosts] = useState([
    {
      id : 1,
      title : 'one'
    },
    {
      id : 2,
      title : 'two'
    },
    {
      id : 3,
      title : 'three'
    }
  ]);
  return (
    <div className="App">
      <Navbar/>
      <PostsList posts={posts}/>
    </div>
  );
}

export default App;
