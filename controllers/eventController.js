import Event from '../models/Event.js';

export const addEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch {
    res.status(400).json({ message: 'Failed to add event' });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
  } catch {
    res.status(400).json({ message: 'Failed to update event' });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch {
    res.status(400).json({ message: 'Failed to delete event' });
  }
};

export const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};
