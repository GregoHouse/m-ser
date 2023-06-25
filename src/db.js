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

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME , POSTGRES_URL } = process.env;

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

const { User } = sequelize.models;

module.exports = {
  sequelize,
  ...sequelize.models,
  conn: sequelize,
};
