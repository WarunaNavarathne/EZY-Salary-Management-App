const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require("helmet");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    helmet({
        xFrameOptions: { action: "sameorigin" }, // Anti-clickjacking Header
        xPoweredBy: false, //  Remove "X-Powered-By" header
        noSniff: true, // X-Content-Type-Options --> Avoids MIME sniffing
    })
);

// Restrictive cross-domain access
app.use(
    cors({
        origin: [
            "http://localhost:3000",
        ],
        methods: ["POST", "PUT", "DELETE", "GET", "PATCH"],
    })
);


const url = process.env.ATLAS_URI;
global.URL = url;

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB connection successfully");
});

const salary = require('./routes/salary.js');
app.use('/salary', salary);

// const admin = require('./routes/admin.js');
app.use('/admin', require('./routes/admin.js'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});