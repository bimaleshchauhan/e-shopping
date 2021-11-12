const mongoose = require('mongoose');

const connectDatabase = () =>{
    mongoose.connect(process.env.LOCAL_DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(con =>{
        console.log(`mongodb connected with host: ${con.connection.host}`)
    })
}

module.exports = connectDatabase;