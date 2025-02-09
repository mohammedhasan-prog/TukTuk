const mongoose = require('mongoose');

async function connectDB() {
    try {
        // Database connection 🥳
        await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
            
            
        });

        console.log('Database connected successfully 🥳');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the process with failure
    }

    
}

module.exports = connectDB;