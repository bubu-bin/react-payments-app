import React, { useState } from 'react'
import { data } from '../data'

export function People() {
  const [myPeople, setMyPeople] = useState(data)

  const delPerson = (id, amount) => {
    let filteredPerson = myPeople.filter((p) => {
      return p.id !== id
    })

    return setMyPeople(filteredPerson)
  }

  return myPeople.map((person) => {
    const { id, name, amount, img, date } = person
    return (
      <article className='items' key={id}>
        <img src={img} alt='some photo'></img>
        <div>
          <h3>{name}</h3>
          <h5>{date}</h5>
        </div>
        <h3>{amount}</h3>
        <button
          onClick={() => {
            delPerson(id, amount)
          }}
        >
          Pay
        </button>
      </article>
    )
  })
}
