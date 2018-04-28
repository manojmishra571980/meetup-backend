import express from 'express';
import dbConfig from './config/db';

const app = express();
dbConfig();

const PORT = process.env.PORT || 3000
app.listen(PORT,err=>{
if(err){console.error(err);} else {console.log(`/server/index.js--App listenining on port: ${PORT}`);}

});