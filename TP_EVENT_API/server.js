const express = require("express");
const app = express();
const sequelize = require("./config/eventDatabase");
const cors = require("cors");
// const corsOptions = require("./config/cors");
const port = process.env.PORT || 3000;
const Routes = require("./routes/eventRoutes");

app.use(express.json());
app.use(cors());
app.use("/", Routes);

sequelize
  .sync()
  .then(() => {
    console.log("La base de données a été synchronisée✅.");
    app.listen(port, "0.0.0.0", () => {
      console.log(`serveur demaré sur le port ${port}`);
    });
  })

  .catch((err) => {
    console.log("impossible de synchroniser la base de données " + err);
  });
