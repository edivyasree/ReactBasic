import React from 'react'

const Hello=()=> {
//   return (
//     // <div>
//     //   <h1>Hello Divya</h1>
//     // </div>
//     //with jsx
//   )
return React.createElement(
    'div',
    {id:'hello',className:'dummyClass'},
    React.createElement('h1',null,'Hello Sree')
)
//without jsx
}


export default Hello
