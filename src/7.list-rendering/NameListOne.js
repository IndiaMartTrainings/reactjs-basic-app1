import React from 'react'

function NameListOne() {
    const names = ["Scott", "Adam", "Tuan"]

  return (
    <div>
        <ul>
            {
                names.map((name, index) =><li key={index}>{name}</li>)
            }
        </ul>
    </div>
  )
}

export default NameListOne