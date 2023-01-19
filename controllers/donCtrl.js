const Don = require("../models/don");

//Permet l'implémentation d'un nouveau don
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

//Recherche de tous les dons
exports.getAllDons = (req, res, next) => {
  Don.find()
    .then((dons) => {
      res.status(200).json(dons);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};
//Permet d'obtenir un don
exports.getOneDon = (req, res, next) => {
  Don.findOne({ _id: req.params.id })
    .then((don) => {
      res.status(200).json(don);
    })
    .catch((error) => {
      res.status(404).json({ error: error });
    });
};
//Permet de modifier un don
exports.modifyDon = (req, res, next) => {
  const donObject = req.body;
  Don.updateOne({ _id: req.params.id }, { ...donObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

//Permet de supprimer un don
exports.deleteDon = (req, res, next) => {
  Don.findOne({ _id: req.params.id })
    .then((don) => {
      Don.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Objet supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
