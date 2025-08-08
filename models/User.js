import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  } ,
  email: { 
    type: String,
     unique: true
     },
   password: String,
  role: {
     type: String,
      enum: ['user', 'admin'],
       default: 'user' }
});

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});


const User = mongoose.model('User', userSchema);

export default User;

