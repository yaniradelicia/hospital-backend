const mongoose = require('mongoose');
require('dotenv').config();

const dbConection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DBOnline');

    } catch (error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs ')
    }  
}

module.exports = {
    dbConection
}

