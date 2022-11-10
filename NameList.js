import React from 'react'
import Persons from './Persons'

function NameList() {
     //simple array method
    const names=['Bruce','clark','john','john','dfsdf']
    const NameList= names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
   
//Json array List
const persons = [
    {
        id:1,
        name:'Bruce',
        age:30,
        skills:'React'
    },
    {
        id:2,
        name:'clark',
        age:25,
        skills:'Angular'
    },
    {
        id:3,
        name:'John',
        age:28,
        skills:'Vue'
    }
]
// const personList=persons.map(persons=><h2>I am {persons.name}.I am{persons.age} Years old.I Know {persons.skills}</h2>)
 const personList=persons.map(persons=><Persons key={persons.id} persons={persons}/>)

 return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
      
        {NameList}
        {/* {personList} */}
     
    </div>
  )
}

export default NameList
