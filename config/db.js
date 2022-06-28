const mongoose = require('mongoose')


const connectMongoDB = async () => {
   
    try {
        await mongoose.connect(process.env.MONGO_DB)

        console.log(`MongoDB Connected Successfully`.bgCyan.white);
    
    } catch (error) {
        console.log(`${error}`.bgRed);
    }
}



module.exports = connectMongoDB;


