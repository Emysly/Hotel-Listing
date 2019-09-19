import express from 'express';
import HotelController from '../controllers/index';

const router = express.Router();

router.get('/', HotelController.home);
router.get('/hotels', HotelController.getAll);
router.get('/hotel/:id', HotelController.getOne);
router.post('/hotels', HotelController.create);
router.patch('/hotel/:id', HotelController.updateOne);
router.delete('/hotel/:id', HotelController.deleteOne);
router.delete('/hotels', HotelController.deleteAll);

export default router;



