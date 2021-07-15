"use strict";

/** Routes for locations. */

const express = require('express');
const ExpressError = require('../expressError');
const router = new express.Router();
const LocinfoApi = require("../api");
// const axios = require("axios");
// const config = require("../config");

// const access_key = config.access_key;
// const secret_key = config.secret_key;

// const auth_key = Buffer.from(`${access_key}:${secret_key}`).toString('base64');


router.get("/:name", async function (req, res, next) {
    try {
        const location = await LocinfoApi.getLocation(req.params.name);
        return res.send(location);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;