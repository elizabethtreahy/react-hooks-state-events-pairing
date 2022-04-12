// import React from "react"

function Video({ data }) {
  const { embedUrl, title } = data
  console.log(data)
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
    </div>
  )
}
export default Video