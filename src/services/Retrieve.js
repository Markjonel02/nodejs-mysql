import Connection from "../database/Connection";


module.exports= async(arr)=>{

    try {
        const query = `SELECT  ` +
                      `${arr} ` +
                      `FROM ` +
                      `user_accnts `
  await Connection(query)
    return results
                    
    } catch (err) {
        console.log("error:",err)
        return []
    }
} 