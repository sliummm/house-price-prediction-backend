const db = require('../util/database');

//Create a class for instantiate the model
module.exports = class House {
    //Constructor
    constructor(
        id,
        overallqual,
        grlivarea,
        garagecars,
        totalbsmsf,
        fullbath,
        totrmsabvgrd,
        yearbuilt,
        yearremodadd,
        fireplaces,
        saleprice
        )
        {
            this.id = id;
            this.overallqual = overallqual;
            this.grlivarea = grlivarea;
            this.garagecars = garagecars;
            this.totalbsmsf = totalbsmsf;
            this.fullbath = fullbath;
            this.totrmsabvgrd = totrmsabvgrd;
            this.yearbuilt = yearbuilt;
            this.yearremodadd = yearremodadd;
            this.fireplaces = fireplaces;
            this.saleprice = saleprice;
        };
    
    //Connect to the database and test the connection and access
    static fetchAll(){
        return db.execute('SELECT * FROM house_data');
    };

    static post(
            overallqual, 
            grlivarea,
            garagecars,
            totalbsmsf,
            fullbath,
            totrmsabvgrd,
            yearbuilt,
            yearremodadd,
            fireplaces,
            saleprice
        )
        {
            return db.execute('INSERT INTO house_data (overallqual, grlivarea, garagecars, totalbsmsf, fullbath, totrmsabvgrd, yearbuilt, yearremodadd, fireplaces, saleprice) VALUES (?)', [
                overallqual, 
                grlivarea,
                garagecars,
                totalbsmsf,
                fullbath,
                totrmsabvgrd,
                yearbuilt,
                yearremodadd,
                fireplaces,
                saleprice
            ]);
        };
};