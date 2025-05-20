const { json } = require("sequelize");
const eventService = require("../services/eventService");
//control des données avant de les transférer au service correspondant
exports.createEvent = async (req, res) => {
  const data = req.body;
  const event = await eventService.createEvent(data);

  return res.status(201).json({ message: "event créé", event });
};
exports.createInvitee = async (req, res) => {
  const data = req.body;
  const invite = await eventService.createInvitee(data);

  if (!invite) {
    return res
      .status(404)
      .json({ message: "Erreur lors de la création de l'invité" });
  }

  return res.status(201).json({ message: "invité créé", invite });
};

exports.modifyInviteeRes = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (id || data) {
    const modifying = await eventService.modifyResponse(id, data);
    if (!modifying) {
      return res
        .status(404)
        .json({ message: "impossible de modifier la reponse de l invité " });
    }
    return res.status(201).json({ message: "reponse modifié", data });
  }
  return res.status(400).json({ message: "id ou response est incorrect" });
};

exports.getAllEvents = async (req, res) => {
  const events = await eventService.getAllEvents();
  const eventsArray = [];
  for (let e = 0; e < events.length; e++) {
    eventsArray.push(events[e].dataValues);
  }
  res.status(200).json({
    message: "liste des evenements et leurs invités",
    eventsArray,
  });
};
