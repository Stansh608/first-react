import React from 'react'

// reveive data via props
const Body = (props) => {
  return (
    <div>
        <h2>This is a body component</h2>
        <div>
            We can do this {props.name}!
        </div>

    </div>
  )
}

export default Body