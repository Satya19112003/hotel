import mongoose, { Schema } from 'mongoose'

const dishSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  preparationSteps: [{ type: String, required: true }],
  cookingTime: { type: String, required: true },
  difficulty: { type: String, required: true },
  nutrition: {
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    carbs: { type: Number, required: true },
    fat: { type: Number, required: true },
  },
})

const Dish = mongoose.model('Dish', dishSchema)

export default Dish

