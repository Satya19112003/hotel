import React, { useState, useEffect } from 'react'
import DishCard from '../components/DishCard'

const Dishes = () => {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    fetch('/api/dishes')
      .then(response => response.json())
      .then(data => setDishes(data))
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Dishes</h1>
      <div className="grid grid-cols-1 gap-4">
        {dishes.map(dish => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </div>
    </div>
  )
}

export default Dishes
