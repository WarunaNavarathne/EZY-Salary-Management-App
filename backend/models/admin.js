const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const admin = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        nic: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
const admin_Schema = mongoose.model(
    "admin",
    admin
);
module.exports = admin_Schema;
