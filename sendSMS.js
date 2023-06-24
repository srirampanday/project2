const twilio = require("./twilio");
const accountSid = 'AC231f9ab054df147759ac13ff569a5fcc';
const authToken = '1663251e9d4f9b75dda3040350244fc9';
const fromNum = '+13149475688';
const toNum = '+6596993912';
const client = require('twilio')(accountSid, authToken);

  client.messages
        .create({
            body: `Hello SMS`,
            from: `${fromNum}`,
            to: `${toNum}`,
        })
        .then((message) => console.log(message.sid))
        .catch((err) => console.log(err));
