import React, { memo } from 'react'
import "./Card.scss"
const Card = memo(({imgUrl,title,description,tags,repoLink,demoLink}) => {
  return (
    <div className='card'>
        <img src={imgUrl} alt="" />
        <p className='title'>{title}</p>
        <p className="description">{description}</p>
        <div className="tags">
            {tags.map((t,idx)=>{
                return <p key={idx} className='tag'>{t}</p>
            })}
        </div> 
        <div className="links">
            <a href={repoLink}>Repository Link</a>
            <a href={demoLink}>Demo Link</a>
        </div>
    </div>
  )
})

export default Card
