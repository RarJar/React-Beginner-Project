import PostsList from "../components/PostList";
import useDataFetch from "../hooks/useDataFetch";
import { useState } from "react";

function Post() {
  let [url, setUrl] = useState("http://localhost:3001/posts");
  let [openModal, setOpenModal] = useState(false);
  let [modalType, setModalType] = useState(null);
  let [editData, setEditData] = useState([]);
  let {
    data: posts,
    addData: addPost,
    updateData: updatePost,
    deleteData: deletePost,
    loading,
  } = useDataFetch(url);

  let createOpenModal = () => {
    setModalType("create");
    setOpenModal(true);
  };

  let editOpenModal = (post) => {
    setEditData(post);
    setModalType("edit");
    setOpenModal(true);
  };

  return (
    <PostsList
      posts={posts}
      setUrl={setUrl}
      deletePost={deletePost}
      editOpenModal={editOpenModal}
      loading={loading}
    />
  );
}

export default Post;
