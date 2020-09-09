import React from 'react';
import SoftSkill from './SoftSkill'

function SoftSkillsList ({softSkills}) {
  return (
    <div className = "flex flex-wrap">
      {
        softSkills.map((skill) => {
          return(
            <SoftSkill 
              title = {skill.title}
              description = {skill.description}
            />
          )
        })
      }
    </div>
  )
}

export default SoftSkillsList