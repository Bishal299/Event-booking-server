import Booking from '../models/Booking.js';
import Event from '../models/Event.js';

export const bookEvent = async (req, res) => {
  const { eventId } = req.body;
  try {
    const event = await Event.findById(eventId);
    if (event.booked >= event.capacity) return res.status(400).json({ message: 'Event full' });

    await Booking.create({ user: req.user._id, event: eventId });
    event.booked += 1;
    await event.save();

    res.json({ message: 'Booking successful' });
  } catch {
    res.status(400).json({ message: 'Booking failed' });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOneAndDelete({ user: req.user._id, event: req.params.eventId });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    const event = await Event.findById(req.params.eventId);
    event.booked -= 1;
    await event.save();

    res.json({ message: 'Booking cancelled' });
  } catch {
    res.status(400).json({ message: 'Cancellation failed' });
  }
};