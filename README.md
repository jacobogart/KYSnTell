# Kys n' Tell

### Know Your Status
![Kys n' Tell Screenshot - Know Your Status](https://media.giphy.com/media/UW7x51bfjYEDI0ejn7/giphy.gif)
### Tell Your Partners
![Kys n' Tell Screenshot - Tell Your Partners](https://media.giphy.com/media/YRJxYE6SVBJTTQDZg0/giphy.gif)

## Installation
Clone the repo - https://github.com/jacobogart/KYSnTell.git

Add .env file in the root directory in the following format:

```TWILIO_ACCOUNT_SID='<Your Twillio Account SID>'
TWILIO_AUTH_TOKEN='<Your Twillio Authorization Token>'
TWILIO_PHONE_NUMBER='<Your Twillio Phone Number>'
REACT_APP_GOOGLE_KEY='<Your Google API Key>'
```

Run `npm install` from the root directory

Run `npm start`

## Testing
Website is tested with Jest and Enzyme

*from the `helms-keep/client` directory*

Run `npm run test` to see test suite
