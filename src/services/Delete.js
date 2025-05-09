const  Connection=  require('../database/Connection')

module.exports= async(id)=>{

    try {
        const query = `DELETE FROM ` +
                      `user_accnts ` +
                      `WHERE ` +
                      `id=${id} `

    await Connection(query)
    return true
                    
    } catch (err) {
        console.log("error:",err)
        return false
    }
} 