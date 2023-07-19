const { Router } = require("express");
const { createProfileValidation } = require("../../utils/middleware");
const {
  createProfileSportHandler,
  createProfileClubHandler,
} = require("../../handlers/profile");

const profileRoutes = Router();

profileRoutes.post(
  "/sport",
  createProfileValidation,
  createProfileSportHandler
);

profileRoutes.post("/club", createProfileClubHandler);

module.exports = profileRoutes;
