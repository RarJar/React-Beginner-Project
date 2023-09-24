import './App.css';
import {useState} from 'react'

function App() {
  let [name,setName] = useState("Rar Zar");
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

  let changeName = () =>{
    setName("Mg Mg")
  }

  let deletePost = (id) => {
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
      <br/>

      <h2>Posts List</h2>
      <div>
        {
          !!posts.length && posts.map((post) =>(
              <div>
                <span key={post.id}>{post.title}</span>
                <button onClick={() => deletePost(post.id)}>delete</button>
              </div>
          ))
        }
        {
          !posts.length && <span>There is no data</span>
        }
      </div>
    </div>
  );
}

export default App;
