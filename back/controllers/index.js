const Annonce = require ("../models");

const createAnnonce = (req, res, next) => {
    Annonce.create(req.body)
        .then((annonce) => {
        res.send(annonce);
        })
        .catch(next)
};

const getAnnonces = (_, res, next) => {
    Annonce.find()
    .then((annonces) => { 
        res.send(annonces)
    })
    .catch(next);
};

const getAnnonceByID = (req, res, next) => {
    Annonce.findById(req.params.id)
    .then((annonce) => {
        res.send(annonce);
    })
    .catch(next);
}

const updateAnnonceByID = async (req, res) => {
    const updt = await Annonce.updateOne({_id: req.params.id}, req.body);

    if (updt.ok) {
        const annonce = await Annonce.findById(req.params.id);
        res.send(annonce);

        return;
    }
}

const deleteAnnonceByID = (req, res, next) => {
    Annonce.findByIdAndDelete(req.params.id)
    .then(() => {
        res.send("deleted");
    })
    .catch(next);
}

module.exports = {
    createAnnonce,
    getAnnonces,
    getAnnonceByID,
    updateAnnonceByID,
    deleteAnnonceByID,
}