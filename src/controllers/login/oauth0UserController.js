const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const {
  OAUTH0_CLIENT_ID,
  OAUTH0_CLIENT_SECRET,
} = require("../../config/env.js");

passport.use(
  new GoogleStrategy(
    {
      clientID: OAUTH0_CLIENT_ID,
      clientSecret: OAUTH0_CLIENT_SECRET,
      callbackURL: "/users/auth/google/callback",
    },
    (request, accessToken, refreshToken, profile, done) => {
      // Aquí puedes realizar acciones con el perfil de usuario, como guardarlo en la base de datos
      // o iniciar sesión en tu aplicación.
      // El perfil de usuario se encuentra en la variable 'profile'.
      console.log(profile);
      // Llama a 'done' para finalizar la autenticación y redirigir al usuario.
      done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
