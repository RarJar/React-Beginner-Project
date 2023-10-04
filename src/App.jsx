import './App.css';
import Navbar from "./components/Navbar";
import PostsList from "./components/PostList";
import Modal from "./components/Modal";
import PostForm from "./components/PostForm";
import useDataFetch from "./hooks/useDataFetch";
import {useState} from 'react';

function App() {
  let [url,setUrl] = useState("http://localhost:3001/posts");
  let [openModal,setOpenModal] = useState(false);
  let [modalType,setModalType] = useState(null);
  let [editData,setEditData] = useState([]);
  let {data : posts,addData : addPost,updateData : updatePost, deleteData : deletePost ,loading} = useDataFetch(url);

  let createOpenModal = () => {
    setModalType('create')
    setOpenModal(true);
  }

  let editOpenModal = (post) =>{
    setEditData(post);
    setModalType('edit')
    setOpenModal(true);
  }

  return (
    <div className="App">
      <Navbar createOpenModal={createOpenModal}/>
      <PostsList posts={posts} setUrl={setUrl} deletePost={deletePost} editOpenModal={editOpenModal} loading={loading}/> 
      <Modal openModal={openModal} setOpenModal={setOpenModal} create>
        <PostForm setOpenModal={setOpenModal} addPost={addPost} updatePost={updatePost} modalType={modalType} editData={editData}/>
      </Modal>
    </div>
  );
}

export default App;
