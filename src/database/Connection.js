

const mysql = require("mysql")


const db_config = {
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs_db",
   
}

const con = mysql.createConnection(db_config)




module.exports = (query)=>{
 return new Promise((resolve,reject)=>{
    con.connect(err=>{
        if (err) {
            reject(errr)
        } else {
            con.query(query,(err,results)=>{
                if (err) {
                    reject(errr)
                } else {

                    resolve(results)
                }

            })
        }
    })
 })
}