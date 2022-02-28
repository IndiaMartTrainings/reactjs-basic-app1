import React from 'react'

function NameListTwo() {
    const names = ["Scott", "Adam", "Tuan", "Adam"]
    const nameList = names.map((name, index) =><h2 key={index}>{name}</h2>)
  return (
        // <React.Fragment>
        //     <h2>Name List</h2>
        //     <div>{nameList}</div>
        // </React.Fragment>
        <>
            <h2>Name List</h2>
            <div>{nameList}</div>
        </>

  )
}

export default NameListTwo