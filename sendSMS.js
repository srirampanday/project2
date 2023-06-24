const twilio = require("./twilio");
const accountSid = twilio.TWILIO_ACCOUNT_SID;
const authToken = twilio.TWILIO_AUTH_TOKEN;
const fromNum = twilio.TWILIO_FROM_NUM;
const toNum = twilio.TWILIO_TO_NUM;
const client = require('twilio')(accountSid, authToken);

  client.messages
        .create({
            body: `Hello SMS`,
            from: `${fromNum}`,
            to: `${toNum}`,
        })
        .then((message) => console.log(message.sid))
        .catch((err) => console.log(err));
