import React from 'react';
import Project from './Project'

function ProjectsList ({projects}) {
  return (
    <div className="pa3">
      {
        projects.map((project) => {
          return(
            <Project 
              id = {project.id}
              imageURL = {project.imageURL}
              title = {project.title}
              description = {project.description}
              githubpage = {project.githubpage}
            />
          )
        })
      }
    </div>
  )
}

export default ProjectsList