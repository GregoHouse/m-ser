require("dotenv").config();
const { Sequelize } = require("sequelize");
const modelUser = require("./models/user.js");
const modelRecoveryCode = require("./models/recoveryCode.js");
const modelAdvertisingSystem = require("./models/advertising_system.js");
const modelAdvertisingEvent = require("./models/advertising_event.js");
const modelSport = require("./models/sport.js");
const modelSportUser = require("./models/sport_user.js");
const modelMatchResult = require("./models/match_result.js");
const modelMatchType = require("./models/match_type.js");
const modelRatingUser = require("./models/rating_user.js");
const modelReservationType = require("./models/reservation_type.js");
const modelGuestReservation = require("./models/guest_reservation.js");
const modelReservation = require("./models/reservation.js");
const modelShiftScheduleCourt = require("./models/shift_schedule_court.js");
const modelClubProfile = require("./models/club_profile.js");
const modelShiftSchedule = require("./models/shift_schedule.js");
const modelPaymentStatus = require("./models/payment_status.js");
const modelTeamMatch = require("./models/team_match.js");
const modelScoreMatch = require("./models/score_match.js");
const modelCourt = require("./models/court.js");
const modelPayment = require("./models/payment.js");
const modelLocation = require("./models/location.js");
const modelClub = require("./models/club.js");
const modelPaymentType = require("./models/payment_type.js");
const modelProfile = require("./models/profile.js");
const modelPointSystem = require("./models/point_system.js");
const modelPointEvent = require("./models/point_event.js");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, POSTGRES_URL } =
  process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

/*const sequelize = new Sequelize(`${POSTGRES_URL}` , {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed

});*/

modelUser(sequelize);
modelRecoveryCode(sequelize);
modelAdvertisingSystem(sequelize);
modelAdvertisingEvent(sequelize);
modelSport(sequelize);
modelSportUser(sequelize);
modelMatchResult(sequelize);
modelMatchType(sequelize);
modelRatingUser(sequelize);
modelReservationType(sequelize);
modelGuestReservation(sequelize);
modelReservation(sequelize);
modelShiftScheduleCourt(sequelize);
modelClubProfile(sequelize);
modelShiftSchedule(sequelize);
modelPaymentStatus(sequelize);
modelTeamMatch(sequelize);
modelScoreMatch(sequelize);
modelCourt(sequelize);
modelPayment(sequelize);
modelLocation(sequelize);
modelClub(sequelize);
modelPaymentType(sequelize);
modelProfile(sequelize);
modelPointEvent(sequelize);
modelPointSystem(sequelize);

const { Advertising_system, Advertising_event, Club, Court, Guest_reservation, Location, Match_result, Match_type, Payment, Payment_status, Payment_type, Point_event, Point_system, Rating_user, Reservation, Reservation_type, Score_match, Shift_schedule, Sport, Team_match, User , Profile} = sequelize.models;

//relacion entre User y Locationn
Location.hasMany(User, {
  foreignKey: 'id_location'
});
User.belongsTo(Location, {
  foreignKey: 'id_location'
});

//relacion entre User y Profile
User.hasMany(Profile);
Profile.belongsTo(User);

//relacion entre User y Profile
User.hasMany(Profile);
Profile.belongsTo(User);

//relacion entre user y point_event
User.hasMany(Point_event);
Point_event.belongsTo(User);

//relacion entre user y point_event
Profile.hasMany(Rating_user);
Rating_user.belongsTo(Profile);

//relacion point_system y point_event
Point_system.hasMany(Point_event);
Point_event.belongsTo(Point_system);

//relacion entre Advertising_systen y advertising_event
Advertising_system.hasMany(Advertising_event);
Advertising_event.belongsTo(Advertising_system);

//relacion entre Advertising_event y User
User.hasMany(Advertising_event);
Advertising_event.belongsTo(User);

//relacion entre Sport y User creando la tabla Sport_user
User.belongsToMany(Sport, { through: "Sport_user" });
Sport.belongsToMany(User, { through: "Sport_user" });

//relacion entre Sport y Profile////;
Sport.hasMany(Profile);
Profile.belongsTo(Sport);

//relacion rating_user y user
User.hasMany(Rating_user);
Rating_user.belongsTo(User);

//relacion reservation y rating_user
Reservation.hasMany(Rating_user);
Rating_user.belongsTo(Reservation);

//relacion reservation y reservation_type
Reservation_type.hasMany(Reservation);
Reservation.belongsTo(Reservation_type);

//relacion entre reservation y user
User.hasMany(Reservation);
Reservation.belongsTo(User);

//relacion entre reservation y court
Court.hasMany(Reservation);
Reservation.belongsTo(Court);

//relacion entre reservation y payment
Payment.hasMany(Reservation);
Reservation.belongsTo(Payment);

//relacion entre match_type y reservation
Match_type.hasMany(Reservation);
Reservation.belongsTo(Match_type);

//relacion entre Reservation y guest_reservation
Reservation.hasMany(Guest_reservation);
Guest_reservation.belongsTo(Reservation);

//relacion entre Guest_reservation y user
User.hasMany(Guest_reservation);
Guest_reservation.belongsTo(User);

//relacion entre Guest_reservation y team_match
Team_match.hasMany(Guest_reservation);
Guest_reservation.belongsTo(Team_match);

//relacion shift_schedule y court
Shift_schedule.belongsToMany(Court, { through: "Shift_schedule_court" });
Court.belongsToMany(Shift_schedule, { through: "Shift_schedule_court" })

//relacion entre payment y payment_status
Payment_status.hasMany(Payment);
Payment.belongsTo(Payment_status);

//relacion entre payment y payment_type
Payment_type.hasMany(Payment);
Payment.belongsTo(Payment_type);

//relacion entre Court y club
Club.hasMany(Court);
Court.belongsTo(Club);

Club.belongsToMany(Profile, { through: "Club_profile" });
Profile.belongsToMany(Club, { through: "Club_profile" })

//relacion entre location y Court
/*Location.hasMany(Court);
Court.belongsTo(Location);*/

//relacion entre Score_match y team_match
Score_match.hasOne(Team_match);
Team_match.belongsTo(Score_match);

//relacion entre match_result y team_match
Match_result.hasMany(Team_match);
Team_match.belongsTo(Match_result);

module.exports = {
  sequelize,
  ...sequelize.models,
  conn: sequelize,
};
