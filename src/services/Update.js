const Connection =require('../database/Connection');


module.exports= async(username,password,id)=>{

    try {
        const query = `UPDATE ` +
                      `user_accnts ` +
                      `SET ` +
                      `username: = '${username}' `+
                      `password: = '${password}' `+
                      `WHERE ` + 
                      `id = ${id}`

 await Connection(query)
    return true
                    
    } catch (err) {
        console.log("error:",err)
        return false
    }
} 