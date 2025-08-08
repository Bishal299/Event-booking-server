import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
},
  date:{
    type: Date,
    required:true
},
  location: String,
  capacity: Number,
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});


const Event = mongoose.model('Event', eventSchema);

export default Event;

