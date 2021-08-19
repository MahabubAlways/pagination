import React from 'react'

const Follower = (props) => {
  const {username, picture} = props
  
  return (
    <article className='card'>
      <img src={picture} alt={username} />
      <h4>${username}</h4>
    </article>
  )
}

export default Follower
