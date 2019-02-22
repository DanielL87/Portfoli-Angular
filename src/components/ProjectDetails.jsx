import React from 'react'
import PropTypes from 'prop-types'

function ProjectDetails (props) {
  return (
    <div>
      <style jsx>{`
      h4{
      color: blue;    
      }
      `}
      </style>
      <div className='projectDetails'>
        <h4>{props.projectName}</h4>
        <p><strong>Description:</strong> {props.info}</p>
        <p id='links'><a href={props.link}>Github Link</a></p>
      </div>
    </div>
  )
}

export default ProjectDetails

ProjectDetails.propTypes = {
  projectName: PropTypes.string,
  info: PropTypes.string, 
  link: PropTypes.string
}