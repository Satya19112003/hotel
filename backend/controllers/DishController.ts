import { Request, Response } from 'express'
import Dish from '../models/Dish'

class DishController {
  async getAllDishes(req: Request, res: Response) {
    try {
      const dishes = await Dish.find()
      res.json(dishes)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching dishes' })
    }
  }

  async getDishById(req: Request, res: Response) {
    try {
      const id = req.params.id
      const dish = await Dish.findById(id)
      if (!dish) {
        return res.status(404).json({ message: 'Dish not found' })
      }
      res.json(dish)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching dish' })
    }
  }

  async createDish(req: Request, res: Response) {
    try {
      const dish = new Dish(req.body)
      await dish.save()
      res.json(dish)
    } catch (error) {
      res.status(500).json({ message: 'Error creating dish' })
    }
  }

  async updateDish(req: Request, res: Response) {
    try {
      const id = req.params.id
      const dish = await Dish.findById(id)
      if (!dish) {
        return res.status(404).json({ message: 'Dish not found' })
      }
      Object.assign(dish, req.body)
      await dish.save()
      res.json(dish)
    } catch (error) {
      res.status(500).json({ message: 'Error updating dish' })
    }
  }

  async deleteDish(req: Request, res: Response) {
    try {
      const id = req.params.id
      await Dish.findByIdAndDelete(id)
      res.json({ message: 'Dish deleted successfully' })
    } catch (error) {
      res.status(500).json({ message: 'Error deleting dish' })
    }
  }
}

export default DishController
