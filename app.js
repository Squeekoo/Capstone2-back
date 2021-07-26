"use strict";

/** Express for LocInfo */

const express = require('express');
const cors = require("cors");
const ExpressError = require("./expressError");

const allLocationsRoutes = require("./routes/locations");
const eachLocationRoutes = require("./routes/location");

const app = express();

// Cross-Origin Resource Sharing (CORS)
app.use(cors());

app.use(express.json());

app.use("/locations", allLocationsRoutes);
app.use("/location", eachLocationRoutes);

/** 404 Handler */

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

/** General Error Handler */

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message,
    });
});

module.exports = app;