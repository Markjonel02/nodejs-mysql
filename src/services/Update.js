import Connection from "../database/Connection";


module.exports= async(password,id)=>{

    try {
        const query = `UPDATE ` +
                      `user_accnts ` +
                      `SET ` +
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