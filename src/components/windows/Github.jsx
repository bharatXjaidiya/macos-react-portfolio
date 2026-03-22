import React, { useEffect,useState} from 'react'
import MacWindow from './MacWindow'
import "./Github.scss"
import githubData from "../../assets/github.json"
import Card from './Card'
const Github = () => { 
  return (
    <MacWindow w="600" h="470">
    <div className='git-hub'>
        <div className="git-hub-cards">
            {githubData.map((projects)=>{
                return <Card key={projects.id} imgUrl={projects.image} title={projects.title} description={projects.description} tags={projects.tags} repoLink={projects.repoLink } demoLink={projects.demoLink} ></Card>
        })}
        </div>
    </div>
    </MacWindow>        
  )
}

export default Github
