const mongoose = require ('mongoose')



const dbConnection = async() => {

    try {
        await mongoose.connect( process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('base de datos online');

    } catch (error) {
        throw new Error('Error a la hora de iniciar la base de datos')
    }








}



module.exports = {
    dbConnection
}