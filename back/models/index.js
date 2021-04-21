const mongoose = require ("mongoose");

const Schema = mongoose.Schema

const AnnonceSchema = new Schema ({
    titre: {
        type: String,
    },
    description: {
        type: String
    },
    adresse: {
        type: String
    },
    codePostal: {
        type: Number
    },
    ville: {
        type: String
    },
    prix: {
        type: Number
    }

})

const Annonce = mongoose.model("annonce", AnnonceSchema);

module.exports = Annonce;