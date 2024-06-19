import React from 'react'
import { useLocation } from 'react-router-dom'

const Detail = () => {
  const {state} = useLocation()
  console.log(state)
  return (
    <div>Detail</div>
  )
}

export default Detail