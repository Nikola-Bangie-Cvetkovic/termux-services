const {exec} = require('child_process');

const sendSMS = (number, message, callback) => {
    exec(`termux-sms-send -n ${number} "${message}"`, (error, stdout, stderr) => {
        if (error) {
            return callback(`Error: ${error.message}`);
        }
        if (stderr) {
            return callback(`Stderr: ${stderr}`);
        }
        return callback(`Message sent to ${number}: ${stdout}`);
    });
};

module.exports = {
    sendSMS,
};
