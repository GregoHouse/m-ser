const getCourtsController = require("../../controllers/court/getCourtsController.js");

const getCourtsHandler = async (req, res) => {
    try {
        let courts;
        if(req.body.id) {
            courts = await getCourtsController(req.body.id)    
            return res.status(200).send(courts)
        }
        courts = await getCourtsController();
        res.status(200).send(courts)
    } catch(err) {
        console.log(err.message);
        res.status(400).send({message: err.message})
    }
};

module.exports = getCourtsHandler;
