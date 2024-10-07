require('dotenv').config();
const express = require("express");
const server = express();

const smsRoutes = require("./routes/smsRoutes");

const port = process.env.PORT || 3333;

server.use(express.json());

server.use("/sms", smsRoutes);


server.listen(port, () => {
    console.info(`Listening on port ${port}`);
});