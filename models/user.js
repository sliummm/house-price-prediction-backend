const db = require('../util/database_code');

module.exports = class User{
    constructor(
        uid,
        username,
        email,
        company,
        password
    ){
        this.uid = uid;
        this.username = username;
        this.email = email;
        this.company=company;
        this.password = password;
    }

    static find(email){
        return db.execute("SELECT * FROM users WHERE email=?", [email]);
    }

    static save(user){
        return db.execute('INSERT INTO users (username, email, password, company) VALUES (?,?,?,?)', [user.username, user.email, user.password, user.company]);
    }

    static updateUser(
        uid,
        username,
        email,
        company,
        password
    ){
        return db.execute('UDPATE users SET username=?, email=?,company=?,password=? WHERE uid=?', [username, email,company, password, uid])
    }
}