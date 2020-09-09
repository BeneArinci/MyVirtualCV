import React from 'react';
import Project from './Project'

function ProjectsList ({projects}) {
  return (
    <div>
      {
        projects.map((project) => {
          return(
            <Project 
              imageURL = {project.imageURL}
              title = {project.title}
              description = {project.description}
            />
          )
        })
      }
    </div>
  )
}

export default ProjectsList