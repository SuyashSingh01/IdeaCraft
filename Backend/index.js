const express=require('express');
const app=express();

require('dotenv').config();
const Port =process.env.PORT||4000;

// cookie parser
const cookiesparser=require('cookie-parser');
app.use(cookiesparser());


app.use(express.json());
// db connection
require('./config/database').connect();
// app.use(express.urlencoded({extended:false}));


// import routes
const users=require('./Routes/user');
const posts=require('./Routes/blog');
const profile=require('./Routes/profile');

app.use('/api/v1',users);
app.use('/api/v1',profile);
app.use('/api/v1',posts);
// app.use('/api/v1',blogs);

// server activiation
app.listen(Port,()=>{
    console.log('server is running on port ',Port);
})

