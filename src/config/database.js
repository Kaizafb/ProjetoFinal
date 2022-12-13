const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Banco conectado")
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    connect
}