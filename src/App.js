import './App.css';
import Navbar from "./components/Navbar";
import PostsList from "./components/PostList";
import Modal from "./components/Modal";
import PostForm from "./components/PostForm";
import {useState} from 'react'

function App() {
  let [posts,setPosts] = useState([
    {
      id : 1,
      title : 'one',
      category : 'Free'
    },
    {
      id : 2,
      title : 'two',
      category : 'Premium'
    },
    {
      id : 3,
      title : 'three',
      category : 'Paid'
    }
  ]);

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
      <PostsList posts={posts} deletePost={deletePost}/>
      <Modal openModal={openModal} setOpenModal={setOpenModal} create>
        <PostForm setOpenModal={setOpenModal} addPost={addPost}/>
      </Modal>
    </div>
  );
}

export default App;
