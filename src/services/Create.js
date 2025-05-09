const Connection =require ('../database/Connection');


module.exports= async(username,password)=>{

    try {
        const query = `INSERT INTO ` +
                      `user_accnts ` +
                      `VALUES ` +
                      `(null, '${username}',md5('${password}'),1)`

    await Connection(query)
    return true
                    
    } catch (err) {
        console.log(Connection(query))
        console.log("error:",err)
        return false
    }
} 