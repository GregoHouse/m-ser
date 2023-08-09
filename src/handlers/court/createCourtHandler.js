const createCourtController = require('../../controllers/court/createCourtController');

const createCourtHandler = async (req , res) => {
    try {
        console.log(req.body)
        const createCourt = await createCourtController(req.body);
        if (createCourt) {return res.status(200).json({message: 'The court has been create and add to Club!'})};
        res.status(401).json({message: 'error to create court, verify if club exist or data is send correctly'});
    } catch(err) {
        console.log(err)
        res.status(400).send({message: err.message})
    }
};

module.exports = createCourtHandler;

