const db = require('../config/db')



// user table
const userTable = `
CREATE TABLE IF NOT EXISTS user (
 _id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(60) NOT NULL ,
 email VARCHAR(90)  UNIQUE NOT NULL,
 create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

// post table
 const postTable = `
CREATE TABLE IF NOT EXISTS posts (
  _id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(100),
  body TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`;

db.query((userTable,err) => {
    if(err) throw  err
    console.log('user table ready');
    
})

db,db.query((postTable,err) => {
    if(err) throw err
    console.log('post table ready');
    
})

module.exports = db