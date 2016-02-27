const request = require('request')

let total = 300;

request({
    url: 'https://api:key-80097cb9a108fc69aea10a50e3252c02@api.mailgun.net/v3/mycard.moe/log', 
    json: true, 
    qs: {
      limit: 300, 
      skip: 0
    }
  }, function (error, response, body) {
     // Do more stuff with 'body' here
     console.log(body)
});
