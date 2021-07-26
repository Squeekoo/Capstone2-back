"use strict";

/** Routes for each Location */

const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const LocinfoApi = require("../api");

router.get("/:id", async function (req, res, next) {
    try {
        const location = await LocinfoApi.getLocationById(req.params.id);
        return res.json(location);
    } catch (error) {
        const err = new ExpressError("Location not found", 404);
        return next(err);
    }
});

module.exports = router;