import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import postRoutes from './routes/posts';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'



const app = express();

dotenv.config();

app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors(
    {
        origin:['http://localhost:3000','https://loving-poincare-56ab69.netlify.app/'],
        credentials:true
    },
    )); 

app.use('/posts', postRoutes);

// const CONNECTION_URL=process.env.CONNECTION_URL;

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> {
        app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`));
    })
    .catch((error)=>{
        console.log(error.message);
    })

// mongoose.set('useFindAndModify',false);

