import './App.css';
import Navbar from "./components/Navbar";
import PostsList from "./components/PostList";
import Modal from "./components/Modal";
import PostForm from "./components/PostForm";
import {useState,useEffect} from 'react'

function App() {
  let [posts,setPosts] = useState([]);
  let [url,setUrl] = useState("http://localhost:3001/posts");

  useEffect(() => {
    fetch(url)
    .then(res=>res.json())
    .then(json=>{
      setPosts(json);
    })
  }, [url]);
  
  let [openModal,setOpenModal] = useState(false);

  let addPost = (post) =>{
    setPosts((prevState) => [...prevState,post]);
  }

  let deletePost = (id) =>{
    setPosts((prevState) => prevState.filter((post) => post.id !== id))
  }

  return (
    <div className="App">
      <Navbar setOpenModal={setOpenModal}/>
      <PostsList posts={posts} deletePost={deletePost} setUrl={setUrl}/>
      <Modal openModal={openModal} setOpenModal={setOpenModal} create>
        <PostForm setOpenModal={setOpenModal} addPost={addPost}/>
      </Modal>
    </div>
  );
}

export default App;
