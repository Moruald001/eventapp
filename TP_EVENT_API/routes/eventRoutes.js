const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventController");
const {
  validatorEvent,
  handleError,
  validatorInvitee,
  validatormodify,
} = require("../middleware/validator");

// validation et recuperation des erreur avant transmission des données au controleur

router.post(
  "/events",
  validatorEvent,
  handleError,
  eventController.createEvent
);

router.post(
  "/invitees",
  validatorInvitee,
  handleError,
  eventController.createInvitee
);

router.put(
  "/invitees/:id",
  validatormodify,
  handleError,
  eventController.modifyInviteeRes
);

router.get("/events", eventController.getAllEvents);

module.exports = router;
