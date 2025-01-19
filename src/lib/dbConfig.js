import mongoose from 'mongoose';
let isConnected = false;

export async function connect() {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    console.log('Connecting',process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    throw new Error('MongoDB connection error');
  }
}

export default connect;
