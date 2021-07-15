"use strict";

/** Express for LocInfo */

const express = require('express');
const ExpressError = require("./expressError");

const locationsRoutes = require("./routes/locations");

const app = express();
app.use(express.json());

app.use("/locations", locationsRoutes);

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