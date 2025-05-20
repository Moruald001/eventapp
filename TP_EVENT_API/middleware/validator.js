const { body, validationResult } = require("express-validator");
//conditions de validations des entrées client
const validatorEvent = [
  body("title").notEmpty().withMessage("le titre ne peut pas etre vide "),
  body("date").notEmpty().withMessage("il manque la date"),
  body("location").notEmpty().withMessage("pas de location pas d'event"),
];

const validatorInvitee = [
  body("name").notEmpty().withMessage("le nom  ne peut pas etre vide "),
  body("email").notEmpty().withMessage("il manque la date").isEmail(),
  body("response")
    .isIn(["yes", "maybe", "no"])
    .withMessage("donnez une reponse comprise entre [yes , maybe et no ]"),
];

const validatormodify = [
  body("response").notEmpty().withMessage("la response ne peut etre vide"),
];
//manipulation des erreurs provenant du client
const handleError = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "les entrees sont invalides",
      errors: errors.array(),
    });
  }
  next();
};

module.exports = {
  validatorEvent,
  handleError,
  validatorInvitee,
  validatormodify,
};
