require("dotenv").config(); // Charge les variables d'environnement

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  // @ts-ignore
  process.env.DB_NAME, // Nom de la base
  process.env.DB_USER, // Utilisateur de la base
  process.env.DB_PASSWORD, // Mot de passe
  {
    host: "postgres", // Adresse du serveur PostgreSQL
    port: 5432, // Port PostgreSQL
    dialect: "postgres", // Spécifie qu'on utilise PostgreSQL
    logging: false, // Désactive les logs si besoin, pour un environnement de production
  }
);

module.exports = sequelize;
