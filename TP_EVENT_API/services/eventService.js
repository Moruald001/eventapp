const { Event, Invitee } = require("../models/event");

// creation d' un event
exports.createEvent = async (data) => {
  const dateParse = new Date(data.date);
  const result = await Event.create({
    title: data.title,
    description: data.description,
    date: dateParse,
    location: data.location,
  });
  return result;
};
// creation d'un invité
exports.createInvitee = async (data) => {
  const result = await Invitee.create({
    name: data.name,
    email: data.email,
    response: data.response,
    eventId: data.eventId,
  });
  return result;
};
// modifiaction de la reponse d'invité
exports.modifyResponse = async (id, data) => {
  const existId = Invitee.findByPk(id);
  if (!existId) {
    return;
  }
  const update = data.response
    ? await Invitee.update(
        { response: data.response },
        {
          where: {
            id: id,
          },
        }
      )
    : data;
  return update;
};

//recuperation des events
exports.getAllEvents = async () => {
  const events = await Event.findAll({
    include: [{ model: Invitee }],
  });
  return events;
};
