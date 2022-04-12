function Header({data}){
  const {title, createdAt, views} = data
  return (
    <div>
      <h2>
        {title}
      </h2>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
    </div>
  )
}
export default Header