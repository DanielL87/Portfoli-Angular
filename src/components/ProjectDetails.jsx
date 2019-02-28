import React from 'react'
import PropTypes from 'prop-types'

function ProjectDetails (props) {
  if (props.chosenProject == null){
  return (

    <div>
      <style jsx>{`
      h4{
      color: blue;    
      }
      `}
      </style>
      <div className='projectDetails'>
        <h4  onClick={() => {props.selectProject(props.id)}}>{props.projectName}</h4>
    </div>
    </div>
  )
}else if(props.selectedId == props.id){

  return(
  <div>
  {console.log(props.chosenProject)}
  <style jsx>{`
  h4{
  color: blue;    
  }
  `}
  </style>
  <div className='projectDetails'>
    <h4  onClick={() => {props.selectProject(props.id)}}>{props.projectName}</h4>
    <p><strong>Description:</strong> {props.chosenProject.info}</p>
    <p id='links'><a href={props.chosenProject.link}>Github Link</a></p>
  </div>
</div>
  )
}
}

export default ProjectDetails

ProjectDetails.propTypes = {
  projectName: PropTypes.string,
  info: PropTypes.string, 
  link: PropTypes.string,
  project: PropTypes.func
}