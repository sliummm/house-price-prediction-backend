const { validationResult } = require('express-validator')
const db = require('../util/database_code');

module.exports = class Account{
    constructor(
        aid,
        userid,
        account_type,
        account_username,
        account_password,
        account_comment
    )
    {
        this.aid = aid;
        this.userid = userid;
        this.account_username = account_username;
        this.account_type = account_type;
        this.account_password = account_password;
        this.account_comment = account_comment;
    }

    static fetchAll(userid){
        return db.execute('SELECT * FROM accounts WHERE userid=?', [userid]);
    }

    static fetchById(aid){
        return db.execute('select * FROM accounts WHERE aid=?;', [aid])
    }

    static addAccount(account){
        return db.execute('INSERT INTO accounts (userid, account_type, account_username, account_password, account_comment) VALUES (?,?,?,?,?);', 
        [
            account.userid, 
            account.account_type, 
            account.account_username, 
            account.account_password, 
            account.account_comment
        ])
    }

    static updateAccount(account){
        return db.execute('UPDATE accounts SET account_type=?, account_username=?,account_password=?,account_comment=? WHERE aid=?;', 
        [
            account.account_type,
            account.account_username,
            account.account_password,
            account.account_comment,
            account.aid]);
    }

    static deleteAccount(aid){
        console.log(aid)
        return db.execute('DELETE FROM accounts WHERE aid=?',[aid]);
    }
}