const db = require('../config/db')


class User {

    static  create(name,email,callback){
        db.query("INSERT INTO user(name ,email) VALUES (?,?)",[name,email],callback)
    }

    static fillAll(callback){
        db.query('SELECT *FROM user',callback)
    }
}

module.exports = User