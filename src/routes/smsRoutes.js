const express = require('express');
const router = express.Router();
const { sendSMS } = require('../services/smsService');

router.post("/v1/send", (req, res) => {
    const { number, message } = req.body;
    if (!number || !message) {
        return res.status(400).json({ error: 'Number and message are required!' });
    }

    sendSMS(number, message, (response) => {
        res.json({ status: 'success', message: response });
    });
});

module.exports = router;
