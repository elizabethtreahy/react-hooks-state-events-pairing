function Commenter({ data, handleComment, commentState }) {
  const { comments } = data
  const commentList = comments.map((comment, i) => {
    return (
      <>
        <div key={`holder ${i}`}>
          <h4 key={`user ${i}`} >
            {comment.user}
          </h4>
          <p key={`comment ${i}`}>
            {comment.comment}
          </p>
        </div>
      </>
    )
  })

  return (
    <>
      <div>
        <button onClick={handleComment}>
          {commentState ? "Hide Comments" : "Show Comments"}
        </button>
        <h3>
          {commentState ? `${comments.length} Comments` : null}
        </h3>
        {commentState ? commentList : null}
      </div>
    </>
  )
}
export default Commenter