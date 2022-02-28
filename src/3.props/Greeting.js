import React from 'react'

function Greeting(props) {
    console.log(props)
    const {id, name, skill, isAdmin, callDisplay, children} = props
  return (
    <div className="container">
        <h2> id: {id} <br />
             Name: {name}  <br />
             Skill: {skill} <br />
             IsAdmin: {isAdmin ? "True" : "False"} <br />
             message: {callDisplay()} <br />
             children: {children? children : "No Child Elements" }
        </h2>
        <br />
    </div>
  )
}

export default Greeting