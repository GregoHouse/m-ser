const {Court, Location, Club} = require('../../db.js');

const getCourts = async (id) => {
    let courts;
    if(id) {
        courts = await Court.findOne({ 
            where: {
                id_court: id
            }, 
            include: [{ model: Location }]
        });
        return courts;
    };

    courts = await Court.findAll({ include: [{ model: Location }]});
    return courts
};

module.exports = getCourts;

