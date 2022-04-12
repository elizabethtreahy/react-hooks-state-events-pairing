import video from "../data/video.js";
import Video from "./Video"
import Header from "./Header"
import Liker from "./Liker"
import React, {useState} from "react"
import Commenter from "./Commenter"

function App() {
  console.log("Here's your data:", video);
  const [likes, setLikes] = useState(video.upvotes)
  const [dislikes, setDislikes] = useState(video.downvotes)
  const [commentState, setCommentState] = useState(true)

  function likesGoUp() {
    setLikes(likes + 1)
  }

  function dislikesGoUp() {
    setDislikes(dislikes + 1)
  }

function handleComment(){
  setCommentState(!commentState)
}

  return (
    <div className="App">
      <Video data={video} />
      <Header data={video} />
      <Liker
        likes={likes}
        dislikes={dislikes}
        dislikesGoUp={dislikesGoUp}
        likesGoUp={likesGoUp} />
        <Commenter data={video} handleComment={handleComment} commentState={commentState}/>
    </div>
  );
}

export default App;
