import express from 'express';
import { bookEvent, cancelBooking } from '../controllers/bookingController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, bookEvent);
router.delete('/:eventId', authenticate, cancelBooking);

export default router;