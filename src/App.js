import './App.css';
import Navbar from "./components/Navbar/index";
import PostsList from "./components/PostsList/index";
import Modal from "./components/Modal/index";
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

  let deletePost = (id) =>{
    setPosts((prevState) => prevState.filter((post) => post.id !== id))
  }

  let [openModal,setOpenModal] = useState(false);

  return (
    <div className="App">
      <Navbar setOpenModal={setOpenModal}/>
      <PostsList posts={posts} deletePost={deletePost}/>
      <Modal openModal={openModal} setOpenModal={setOpenModal} danger>
        <h1 className='text-red-500 text-lg'>Hello User, wellcome from my app</h1>
      </Modal>
    </div>
  );
}

export default App;
