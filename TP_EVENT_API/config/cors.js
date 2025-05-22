exports.corsOptions = {
  origin: "http://157.180.38.74", // Remplacez par le domaine autorisé
  methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
  allowedHeaders: ["Content-Type", "Authorization"], // En-têtes autorisés
  credentials: true, // Permet l'envoi des cookies ou autres informations d'authentification
};
