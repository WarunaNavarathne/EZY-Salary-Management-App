const asyncHandler = require('express-async-handler')
const salary_Schema = require('../models/salary.js')

const addSalary = asyncHandler(async (req, res) => {
    const { code, name, email, students, fee, salary, netsalary, date } = req.body;
    const salarys = new salary_Schema({ code, name, email, students, fee, salary, netsalary, date });
    salarys.save()
        .then(() => res.json('Salary Add!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

const updateSalary = asyncHandler(async (req, res) => {
    const { code, name, email, students, fee, salary, netsalary, date } = req.body;
    const salarys = {
        code, name, email, students, fee, salary, netsalary, date
    }
    const update = await salary_Schema.findOneAndUpdate({ code: code }, salarys).then(() => {
        res.status(200).send({ status: "Salary Updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with Updating Data", error: err.message });
    });
})

const deleteSalary = asyncHandler(async (req, res) => {
    let code = req.params.code;
    salary_Schema.findOneAndDelete({ code: code })
        .then(() => {
            res.status(200).send({ status: "Salary Deleted" });

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with Deleting Data", error: err.message });
        });
})

const allSalary = asyncHandler(async (req, res) => {
    salary_Schema.find()
        .then(salarys => res.json(salarys))
        .catch(err => res.status(400).json('No Data'))
})

const oneSalary = asyncHandler(async (req, res) => {
    salary_Schema.find({ name: req.params.searchName })
        .then(salarys => res.json(salarys))
        .catch(err => res.status(400).json('No Data'))
})

module.exports = {
    addSalary,
    updateSalary,
    deleteSalary,
    allSalary,
    oneSalary
}