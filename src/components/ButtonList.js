import React from 'react'
import Button from './Button'

const listNames = [
  "All",
  "Cricket",
  "Algorithms",
  "Street Food",
  "Statistics",
  "Gaming",
  "Music",
  "Gadgets",
  "Taarak Mehta Ka Ooltah Chashmah",
  "Comedy",
  "Computer programming",
  // "Accounting",
  // "Physics",
];

const ButtonList = () => {
  return (
    <div className='flex gap-2 text-sm'>
      {listNames.map(((name, index) => <Button key={index} name={name}/>))}
    </div>
  )
}

export default ButtonList