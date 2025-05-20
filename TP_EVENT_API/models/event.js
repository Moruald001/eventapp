const sequelize = require("../config/eventDatabase");
const { DataTypes } = require("sequelize");

const Event = sequelize.define(
  "event",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const Invitee = sequelize.define(
  "invitee",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    response: {
      type: DataTypes.ENUM("yes", "no", "maybe"),
      allowNull: false,
      defaultValue: "maybe",
    },

    eventId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  }
);

Event.hasMany(Invitee);
Invitee.belongsTo(Event);

module.exports = {
  Event,
  Invitee,
};
