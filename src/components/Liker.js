function Liker({ likes, dislikes, likesGoUp, dislikesGoUp }) {
  
  return (
    <div>
      <button
        onClick={likesGoUp}>
        {likes} 👍

      </button>
      <button
        onClick={dislikesGoUp}>
        {dislikes} 👎

      </button>
    </div>
  )
}
export default Liker