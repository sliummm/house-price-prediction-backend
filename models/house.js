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

    static fetchFirst(){
        return db.execute('SELECT * FROM house_data LIMIT 1')
    }

    static fetchAData(id){
        return db.execute('SELECT * FROM house_data WHERE id=?', [id]);
    }

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
            return db.execute('INSERT INTO house_data (overallqual, grlivarea, garagecars, totalbsmsf, fullbath, totrmsabvgrd, yearbuilt, yearremodadd, fireplaces, saleprice) VALUES (?,?,?,?,?,?,?,?,?,?)', 
                [
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
                ]
            );
        };

    static update(
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
        saleprice)
        {
            return db.execute('UPDATE house_data SET overallqual=?, grlivarea=?, garagecars=?, totalbsmsf=?, fullbath=?, totrmsabvgrd=?, yearbuilt=?, yearremodadd=?, fireplaces=?, saleprice=? WHERE id=?',
                [
                    overallqual, 
                    grlivarea,
                    garagecars,
                    totalbsmsf,
                    fullbath,
                    totrmsabvgrd,
                    yearbuilt,
                    yearremodadd,
                    fireplaces,
                    saleprice,
                    id
                ]
            )
        };

    static delete(id){
        return db.execute('DELETE FROM house_data WHERE id=?', [id]);
    }
};