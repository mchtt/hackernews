import React from "react"

const PostsList = ({ list }) => {
  return (
    <ul>
      {list.map((post, index) => {
        const date = new Date(post.created_at)
        return (
          <li key={index} className="container">
            <a href={post.url} target="_blank"><p>{post.title}</p></a>
            <h4>
            <span className="info1">{post.points} points |&nbsp;</span>
            <span className="info2">{post.author}&nbsp;</span>
            <span className="info3">|&nbsp;{date.toLocaleString()} |&nbsp;</span>
            <span className="info4">{post.num_comments} comments</span>
            </h4>
          </li>  
        )
      })}
    </ul>
  )
}

export default PostsList