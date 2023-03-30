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

    static fetchPassword(username){
        return db.execute('SELECT password FROM users WHERE usernam=?', [username]);
    }

    static addUser(
        username,
        email,
        company,
        password
    ){
        return db.execute('INSERT INTO users (username, email, password) VALUES (?,?,?)', [username, email, company, password]);
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