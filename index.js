const express = require('express');
const bodyParser = require('body-parser');
const houseRoutes = require('./routes/r_house');
const accountRoutes = require('./routes/r_account');
const userRoutes = require('./routes/r_user');
const errorController = require('./controller/error');
const app = express();

const port = process.env.PORT || 4242

//Use body parser to parse the data into JSON format
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader(
        'Access-Control-Allow-Origin', 
        '*'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST,PUT,DELETE'
    )
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
})

app.use('/houses', houseRoutes);
app.use('/accounts',accountRoutes);
app.use('/users', userRoutes);
app.use(errorController.get404);
app.use(errorController.get404);

app.listen(port, ()=>console.log(`Listening on port ${port}`));