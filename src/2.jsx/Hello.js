import React from 'react'

// const Hello = () => {
//     return <div id="divId" className="container">
//                 <h1 id="headerId" className="header">Hello Uma</h1>
//            </div>
// }

const Hello = () => {
   return React.createElement('div', {id: 'divId', className: 'container'}, 
            React.createElement('h1', {id: 'headerId', className: 'header'}, 'hello uma'))
}

export default Hello