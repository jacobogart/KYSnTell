const twilio = require('./utilities');



export const sendMessage = () => {
  const accountSid = twilio.accountSid;
  const authToken = twilio.authToken;
  const client = require('twilio')(accountSid, authToken);
  
  client.messages
    .create({
      body: 'You\'re a rat piece of shit',
      from: '+19132706114',
      to: '+13033242427'
    })
    .then(message => console.log(message.sid));
}

