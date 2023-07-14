const {Court, Location, Club} = require('../../db.js');

const createCourt = async (data) => {
    await Court.create({
        name: data.name,
        description: data.description,
        price_fee: data.price_fee,
        warranty_reservation: data.warranty_reservation,
        grass_type: data.grass_type,
        lighting: data.lighting,
        doors_type: data.doors_type,
        walls_type: data.walls_type,
        reputation: data.reputation
    });

    const location = await Location.findByPk(data.id_location);
    const court = await Court.findOne({
        where: {
            name: data.name
            }
    });
    const club = await Club.findByPk(data.id_club);
    
    await club.addCourt(court);
    await court.setLocation(location);

    return court
};

module.exports = createCourt;
