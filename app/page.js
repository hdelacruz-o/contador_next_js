'use client'

import { useState } from 'react'
import React from 'react'

const Home = () => {

  const [contador, setConteador] = useState(0)

  const incrementar = () => {

    setConteador(contador + 1)
  }

  const decrementar = () => {

    setConteador(contador - 1)
  }
  return (
    <>
      <div className='flex flex-col border-solid border-cyan-800 rounded p-2 m-5 justify-center items-center'>
        <h1 className='text-4xl text-center text-gray-800 font-bold p-2 m-5'>
          Contador
        </h1>
        <div className='flex justify-around w-1/2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded' onClick={()=> {
            incrementar()
          }}>
            Incrementar
          </button>
          <p>
            Valor: {contador}
          </p>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded' onClick={()=> {
            decrementar()
          }}>
            Decrementar
          </button>
        </div>
      </div>

    </>
  )
}

export default Home