require("dotenv").config();
const os = require("os");
const express = require("express");
const server = express();

const smsRoutes = require("./routes/smsRoutes");

const port = process.env.PORT || 3333;

server.use(express.json());

server.use("/sms", smsRoutes);

const getLocalIPAddress = () =>
    Object.values(os.networkInterfaces()).flat().find(iface => iface.family === "IPv4" && !iface.internal)?.address || "localhost";

server.listen(port, () => {
    console.info(`Listening on port ${port}`);
    console.info(`Local ip address: ${getLocalIPAddress()}`);

});