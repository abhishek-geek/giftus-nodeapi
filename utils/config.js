require("dotenv").config();

const PORT = process.env.PORT || 3900;
const MONGODB_URI = process.env.MONGODB_URI;
const jwtprivatekey = process.env.jwtprivatekey;

module.exports = {
    PORT,
    MONGODB_URI,
    jwtprivatekey
};