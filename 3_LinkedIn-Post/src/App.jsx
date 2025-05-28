import { useState } from 'react'
import { PostComponent } from './PostComponent'
import './App.css'

function App() {
  const [posts, setPost] = useState([])

  const postComponents = posts.map(post => <PostComponent   // using map
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)


  function AddPost() {            // adding new element in the existing array
    setPost([...posts, {
      name: "farman",
      subtitle: "your loved one",
      time: "1 min",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "this is my post"
    }
    ])
  }
  return (
    <>
      <div style={{ backgroundColor: "grey", height: "100vh" }}>

        <button onClick={AddPost}>Add post</button>
        {postComponents}
      </div>
    </>
  )
}

export default App

// Key : If we dont use keys in map then it will be performance downside! 
// Always try to use keys so that react would easily understand if there any changes happend in that.
// keys must be unique.