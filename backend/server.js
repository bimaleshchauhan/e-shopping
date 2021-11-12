const app = require('./app');
const connectDatabase = require('./config/database')

const dotenv = require('dotenv')
// setting config
dotenv.config({path:'backend/config/config.env'})

// setting database

connectDatabase();

app.listen(process.env.PORT, () =>{
    console.log(`server start on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})