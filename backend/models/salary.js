const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const salary = new Schema(
    {
        code: {   
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        students: {
            type: String,
            required: true,
        },
        fee: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
        netsalary: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const salary_Schema = mongoose.model(
    "salary",
    salary
);
module.exports = salary_Schema;
