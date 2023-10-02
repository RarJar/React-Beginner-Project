import './App.css';
import Navbar from "./components/Navbar";
import PostsList from "./components/PostList";
import Modal from "./components/Modal";
import PostForm from "./components/PostForm";
import useDataFetch from "./hooks/useDataFetch";
import {useState} from 'react';

function App() {
  let [url,setUrl] = useState("http://localhost:3001/posts");

  let {data : posts , deleteData : deletePost ,addData : addPost} = useDataFetch(url);

  let [openModal,setOpenModal] = useState(false);

  return (
    <div className="App">
      <Navbar setOpenModal={setOpenModal}/>
      <PostsList posts={posts} setUrl={setUrl} deletePost={deletePost}/> 
      <Modal openModal={openModal} setOpenModal={setOpenModal} create>
        <PostForm setOpenModal={setOpenModal} addPost={addPost}/>
      </Modal>
    </div>
  );
}

export default App;
