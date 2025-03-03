const queries = require('../../models/pokemons')

module.exports = (db) => async (req, res, next) => {
   
   
    const elementId = req.query.type
    const dbRes = await queries.chooseAll(await db)(elementId)

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: dbRes.response,
    })
    
}