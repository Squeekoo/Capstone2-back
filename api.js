"use strict";
const axios = require('axios');
const ExpressError = require('./expressError');
const config = require("./config");

const access_key = config.access_key;
const secret_key = config.secret_key;

const auth_key = Buffer.from(`${access_key}:${secret_key}`).toString('base64');

const API_BASE_URL = "https://api.roadgoat.com/api/v2/destinations/auto_complete";

/** API Class */

class LocinfoApi {
    static async getLocation(name) {
        if (!name) {
            throw new ExpressError("Not Found", 404);
        }

        let response = await axios.get(`${API_BASE_URL}?q=${name}`, {
            'headers': {
                'Authorization': `Basic ${auth_key}`
            }
        });
        return response.data;
    }
}

module.exports = LocinfoApi;