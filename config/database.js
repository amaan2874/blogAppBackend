const mongoose = require ('mongoose');
require('dotenv').config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("DB Connected sucessfull")})
    .catch((error)=>{
        console.log("DB facing connection errors");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = connectWithDb;