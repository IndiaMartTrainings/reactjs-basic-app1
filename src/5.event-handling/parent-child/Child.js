import React from 'react'

function Child(props) {
    console.log(props)
  return (
    <div>
        <h2>This is Child Component</h2>
        <button className="btn btn-primary"
                onClick={() =>props.callParent('Child')}
        >Call Parent</button>
    </div>
  )
}

export default Child