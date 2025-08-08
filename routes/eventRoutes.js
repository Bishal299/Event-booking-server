import express from 'express';
import { addEvent, updateEvent, deleteEvent, getEvents } from '../controllers/eventController.js';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticate, getEvents);
router.post('/', authenticate, authorizeAdmin, addEvent);
router.put('/:id', authenticate, authorizeAdmin, updateEvent);
router.delete('/:id', authenticate, authorizeAdmin, deleteEvent);

export default router;