import express from 'express'
import DishController from '../controllers/DishController'

const router = express.Router()
const dishController = new DishController()

router.get('/dishes', dishController.getAllDishes)
router.get('/dishes/:id', dishController.getDishById)
router.post('/dishes', dishController.createDish)
router.put('/dishes/:id', dishController.updateDish)
router.delete('/dishes/:id', dishController.deleteDish)

export default router

