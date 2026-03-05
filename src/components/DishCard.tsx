import React from 'react'

interface Dish {
  name: string
  category: string
  ingredients: string[]
  preparationSteps: string[]
  cookingTime: string
  difficulty: string
  nutrition: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
}

interface DishCardProps {
  dish: Dish
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-bold">{dish.name}</h2>
      <p className="text-gray-600">{dish.category}</p>
      <ul>
        {dish.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Cooking Time: {dish.cookingTime}</p>
      <p>Difficulty: {dish.difficulty}</p>
      <p>Nutrition: {dish.nutrition.calories} calories, {dish.nutrition.protein}g protein, {dish.nutrition.carbs}g carbs, {dish.nutrition.fat}g fat</p>
    </div>
  )
}

export default DishCard
