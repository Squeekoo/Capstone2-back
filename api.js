"use strict";
const axios = require('axios');
const config = require("./config");

const access_key = config.access_key;
const secret_key = config.secret_key;

const auth_key = Buffer.from(`${access_key}:${secret_key}`).toString('base64');

const API_BASE_URL = "https://api.roadgoat.com/api/v2/destinations";

/** API Class */

class LocinfoApi {
    static async getLocations(name) {
        let response = await axios.get(`${API_BASE_URL}/auto_complete?q=${name}`, {
            'headers': {
                'Authorization': `Basic ${auth_key}`
            }
        });
        console.log(response.data);
        return response.data;
    }

    static async getLocationById(id) {
        let response = await axios.get(`${API_BASE_URL}/${id}`, {
            'headers': {
                'Authorization': `Basic ${auth_key}`
            }
        });
        console.log(response.data);
        return response.data;
    }
}

module.exports = LocinfoApi;