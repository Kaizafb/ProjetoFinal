const mongoose = require("mongoose");

const orgSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
        
    },
    tema: {
        type: String,
        required: true,
        lowercase: true

    },
    descricao: {
        type: String,
        required: true,
        lowercase: true

    },
    telefone:{
        type:String,
        required: true
    },
    site: {
        type: String,
        required: true,
        lowercase: true

    }


})

const Org = mongoose.model("org", orgSchema)
module.exports = Org

