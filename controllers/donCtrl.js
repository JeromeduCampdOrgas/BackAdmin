const Don = require("../models/don");

//Permet l'implémentation d'une nouvelle sauce
exports.createDon = (req, res, next) => {
  const donObject = req.body;
  const don = new Don({
    ...donObject,
  });
  //enregistrement en base
  don
    .save()
    .then(() => {
      res.status(201).json({ message: "Post saved successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

//Recherche d'un donateur

exports.getOneDon = (req, res, next) => {
  Don.findOne({ _id: req.params.id })
    .then((don) => {
      res.status(200).json(don);
    })
    .catch((error) => {
      res.status(404).json({ error: error });
    });
};
