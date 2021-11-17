import React from 'react'
import { People } from './People'
// import { GetAmount } from './People'

function Container() {
  return (
    <main>
      <section className='container'>
        <div className='container-top'>
          <h1>Payments</h1>
        </div>
        <div className='container-bottom'>
          <People></People>
        </div>
      </section>
    </main>
  )
}

export default Container
