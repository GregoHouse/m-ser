const { Sequelize } = require("sequelize");
const modelAdminUser = require("./models/admin_user.js");
const modelBrandUser = require("./models/brand_user.js");
const modelClubUser = require("./models/club_user.js");
const modelSportUser = require("./models/sport_user.js");
const modelUser = require("./models/user.js");
const modelRecoveryCode = require("./models/recoveryCode.js");
const modelAdvertisingSystem = require("./models/advertising_system.js");
const modelAdvertisingEvent = require("./models/advertising_event.js");
const modelSport = require("./models/sport.js");
const modelMatchResult = require("./models/match_result.js");
const modelMatchType = require("./models/match_type.js");
const modelRatingUser = require("./models/rating_user.js");
const modelReservationType = require("./models/reservation_type.js");
const modelGuestReservation = require("./models/guest_reservation.js");
const modelReservation = require("./models/reservation.js");
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

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = require("./config/env.js");

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

const conectarDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("conectados a la base de datos");
  } catch (error) {
    //si hay un error consologear y salir de la conexion
    process.exit(1);
  }
};

modelAdminUser(sequelize);
modelBrandUser(sequelize);
modelClubUser(sequelize);
modelSportUser(sequelize);
modelUser(sequelize);
modelRecoveryCode(sequelize);
modelAdvertisingSystem(sequelize);
modelAdvertisingEvent(sequelize);
modelSport(sequelize);
modelMatchResult(sequelize);
modelMatchType(sequelize);
modelRatingUser(sequelize);
modelReservationType(sequelize);
modelGuestReservation(sequelize);
modelReservation(sequelize);
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

const {
  Advertising_system,
  Advertising_event,
  Brand_user,
  Club_user,
  Club,
  Court,
  Guest_reservation,
  Location,
  Match_result,
  Match_type,
  Payment,
  Payment_status,
  Payment_type,
  Point_event,
  Point_system,
  Rating_user,
  Reservation,
  Reservation_type,
  Score_match,
  Shift_schedule,
  Sport,
  Sport_user,
  Team_match,
  User,
  Profile,
} = sequelize.models;

//relacion entre User sport y User
User.hasMany(Sport_user, {
  foreignKey: "id_user",
});
Sport_user.belongsTo(User, {
  foreignKey: "id_user",
});

//relacion entre User brand y User
User.hasMany(Brand_user, {
  foreignKey: "id_user",
});
Brand_user.belongsTo(User, {
  foreignKey: "id_user",
});

//relacion entre User club y User
User.hasMany(Club_user, {
  foreignKey: "id_user",
});
Club_user.belongsTo(User, {
  foreignKey: "id_user",
});

/*relacion entre User admin y User
User.hasMany(Admin_user, {
  foreignKey: "id_user",
});
Admin_user.belongsTo(User, {
  foreignKey: "id_user",
});
*/

//relacion entre User sport y Locationn
Location.hasMany(Sport_user, {
  foreignKey: "id_location",
});
Sport_user.belongsTo(Location, {
  foreignKey: "id_location",
});

//relacion entre Brand user y Locationn
Location.hasMany(Brand_user, {
  foreignKey: "id_location",
});
Brand_user.belongsTo(Location, {
  foreignKey: "id_location",
});

//relacion entre Club user y Location
Location.hasMany(Club_user, {
  foreignKey: "id_location",
});
Club_user.belongsTo(Location, {
  foreignKey: "id_location",
});

//relacion entre User sport y Profile
Sport_user.hasMany(Profile, {
  foreignKey: "id_sport_user",
});
Profile.belongsTo(Sport_user, {
  foreignKey: "id_sport_user",
});

//relacion entre user sport y point_event
Sport_user.hasMany(Point_event, {
  foreignKey: "id_sport_user",
});
Point_event.belongsTo(Sport_user, {
  foreignKey: "id_sport_user",
});

//relacion entre profile y rating_user
Profile.hasMany(Rating_user, {
  foreignKey: "id_profile",
});
Rating_user.belongsTo(Profile, {
  foreignKey: "id_profile",
});

//relacion point_system y point_event
Point_system.hasMany(Point_event, {
  foreignKey: "id_point_system",
});
Point_event.belongsTo(Point_system, {
  foreignKey: "id_point_system",
});

//relacion entre Advertising_systen y advertising_event
Advertising_system.hasMany(Advertising_event, {
  foreignKey: "id_advertising_system",
});
Advertising_event.belongsTo(Advertising_system, {
  foreignKey: "id_advertising_system",
});

// relacion entr Advertising_system y Brand user
Brand_user.hasMany(Advertising_event, {
  foreignKey: "id_brand_user",
});
Advertising_event.belongsTo(Brand_user, {
  foreignKey: "id_brand_user",
});

//relacion entre Advertising_event y User sport
Sport_user.hasMany(Advertising_event, {
  foreignKey: "id_sport_user",
});
Advertising_event.belongsTo(Sport_user, {
  foreignKey: "id_sport_user",
});

//relacion entre Sport y User sport
Sport_user.belongsToMany(Sport, {
  through: "Sport_user_relation",
  foreignKey: "id_sport_user",
  otherKey: "id_sport",
});
Sport.belongsToMany(Sport_user, {
  through: "Sport_user_relation",
  foreignKey: "id_sport",
  otherKey: "id_sport_user",
});

//relacion entre Sport y Profile////;
Sport.hasMany(Profile, {
  foreignKey: "id_sport",
});
Profile.belongsTo(Sport, {
  foreignKey: "id_sport",
});

//relacion rating_user y user
Sport_user.hasMany(Rating_user, {
  foreignKey: "id_sport_user",
});
Rating_user.belongsTo(Sport_user, {
  foreignKey: "id_sport_user",
});

//relacion reservation y rating_user
Reservation.hasMany(Rating_user, {
  foreignKey: "id_reservation",
});
Rating_user.belongsTo(Reservation, {
  foreignKey: "id_reservation",
});

//relacion reservation y reservation_type
Reservation_type.hasMany(Reservation, {
  foreignKey: "id_reservation_type",
});
Reservation.belongsTo(Reservation_type, {
  foreignKey: "id_reservation_type",
});

//relacion entre reservation y user sport
Sport_user.hasMany(Reservation, {
  foreignKey: "id_sport_user",
});
Reservation.belongsTo(Sport_user, {
  foreignKey: "id_sport_user",
});

//relacion entre reservation y court
Court.hasMany(Reservation, {
  foreignKey: "id_court",
});
Reservation.belongsTo(Court, {
  foreignKey: "id_court",
});

//relacion entre reservation y payment
Payment.hasMany(Reservation, {
  foreignKey: "id_payment",
});
Reservation.belongsTo(Payment, {
  foreignKey: "id_payment",
});

//relacion entre match_type y reservation
Match_type.hasMany(Reservation, {
  foreignKey: "id_match_type",
});
Reservation.belongsTo(Match_type, {
  foreignKey: "id_match_type",
});

//relacion entre Reservation y guest_reservation
Reservation.hasMany(Guest_reservation, {
  foreignKey: "id_reservation",
});
Guest_reservation.belongsTo(Reservation, {
  foreignKey: "id_reservation",
});

//relacion entre Guest_reservation y user sport
Sport_user.hasMany(Guest_reservation, {
  foreignKey: "id_sport_user",
});
Guest_reservation.belongsTo(Sport_user, {
  foreignKey: "id_sport_user",
});

//relacion entre Guest_reservation y team_match
Team_match.hasMany(Guest_reservation, {
  foreignKey: "id_team_match",
});
Guest_reservation.belongsTo(Team_match, {
  foreignKey: "id_team_match",
});

//relacion shift_schedule y court
Shift_schedule.belongsToMany(Court, {
  through: "Shift_schedule_courts",
  foreignKey: "id_shift_schedule",
  otherKey: "id_court",
});
Court.belongsToMany(Shift_schedule, {
  through: "Shift_schedule_courts",
  foreignKey: "id_court",
  otherKey: "id_shift_schedule",
});

//relacion entre payment y payment_status
Payment_status.hasMany(Payment, {
  foreignKey: "id_payment_status",
});
Payment.belongsTo(Payment_status, {
  foreignKey: "id_payment_status",
});

//relacion entre payment y payment_type
Payment_type.hasMany(Payment, {
  foreignKey: "id_payment_type",
});
Payment.belongsTo(Payment_type, {
  foreignKey: "id_payment_type",
});

//relacion entre Court y club
Club.hasMany(Court, {
  foreignKey: "id_club",
});
Court.belongsTo(Club, {
  foreignKey: "id_club",
});

//relacion entre club user y club
Club_user.hasMany(Club, {
  foreignKey: "id_club_user",
});
Club.belongsTo(Club_user, {
  foreignKey: "id_club_user",
});

Club.belongsToMany(Profile, {
  through: "Club_profiles",
  foreignKey: "id_club",
  otherKey: "id_profile",
});
Profile.belongsToMany(Club, {
  through: "Club_profiles",
  foreignKey: "id_profile",
  otherKey: "id_club",
});

//relacion entre location y Court
Location.hasMany(Court, {
  foreignKey: "id_location",
});
Court.belongsTo(Location, {
  foreignKey: "id_location",
});

//relacion entre Score_match y team_match
Score_match.hasOne(Team_match, {
  foreignKey: "id_score_match",
});
Team_match.belongsTo(Score_match, {
  foreignKey: "id_score_match",
});

//relacion entre match_result y team_match
Match_result.hasMany(Team_match, {
  foreignKey: "id_match_result",
});
Team_match.belongsTo(Match_result, {
  foreignKey: "id_match_result",
});

module.exports = {
  sequelize,
  ...sequelize.models,
  conn: sequelize,
  conectarDB,
};
