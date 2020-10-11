import React from 'react';
import SoftSkill from '../SoftSkill/SoftSkill'

function SoftSkillsList ({softSkills}) {
  return (
    <div className = "flex flex-wrap justify-center justify-around" style={{marginBottom:"50px"}}>
      {
        softSkills.map((skill) => {
          return(
            <div key = {skill.id}>
              <SoftSkill 
              title = {skill.title}
              description = {skill.description}
            />
            </div>
          )
        })
      }
    </div>
  )
}

export default SoftSkillsList