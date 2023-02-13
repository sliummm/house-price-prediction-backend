const House = require('../models/house');

//Use a asyncronized function to call the fetchAll function in the model and fetch data from the database
exports.getAllHouses = async (req, res, next) => {
    //Handle any sql exceptions
    try{
        //deconstruct the data fetched from the database into JSON
        const [allHouses] = await House.fetchAll();
        res.status(200).json(allHouses);
    //Handle any error with error controller
    }catch(err){
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
};

exports.postAHouse = async (req, res, next) => {
    try {
        const postResponse = await House.post(
            req.body.overallqual, 
            req.body.grlivarea,
            req.body.garagecars,
            req.body.totalbsmsf,
            req.body.fullbath,
            req.body.totrmsabvgrd,
            req.body.yearbuilt,
            req.body.yearremodadd,
            req.body.fireplaces,
            req.body.saleprice
        );
        res.status(201).json(postResponse)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
}

