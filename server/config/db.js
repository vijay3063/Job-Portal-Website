import mongoose from "mongoose";

// Function to connect to MongoDB Database
const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'))

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal-website`)

}

export default connectDB;