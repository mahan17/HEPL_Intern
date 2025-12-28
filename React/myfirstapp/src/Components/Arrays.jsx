import React from 'react'

const Arrays = () => {
    const arr = ['Autumn', 'Spring', 'Summer', 'Winter']
  return (
    <div>
        <h1>Season Names</h1>
        <h3>Displaying Array using map method as list</h3>
        <ul>
            {arr.map((item, index) => (<li key={index+1}>{item}</li>))}
        </ul>
    </div>
  )
}

export default Arrays;