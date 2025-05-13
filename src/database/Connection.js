

const mysql = require("mysql")


const db_config = {
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs_db",
   
}

const con = mysql.createPool(db_config)
module.exports = (query)=>{
 return new Promise((resolve,reject)=>{
    con.getConnection((err,sql)=>{
        if (err) {
            reject(err)
        } else {
            sql.query(query,(err,results)=>{
                if (err) {
                    reject(err)
                } else {

                    resolve(results)
                }
                sql.release()
 
            })
        }
    })
 })
}