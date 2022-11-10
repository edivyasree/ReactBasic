import React from 'react'

function Persons({persons}) {
  return (
    <div>
      <h2>I am {persons.name}.I am{persons.age} Years old.I Know {persons.skills}</h2>
    </div>
  )
}

export default Persons
