Introduction
-------------------

As you know AddyBot is worlds fist advertising platfrom created specialy for chatbots. Most of chatbots are written in Node.js, so we think it will be great to have npm module to integrate your bot with our service as fast as possible.

Quick Start
-------------------

```bash
npm install --save addybot-api
``` 

```javascript
const addybot = require('addybot-api')
const getAd = addybot(API_TOKEN) // Checkout your cabinet

getAd(userId, "english").then(ad => {
  let message = ad.text + '\n' + ad.uri;
  // Send this message to user
});
```

Also
-----------------

* [AddyBot API Reference](https://github.com/addybot/docs/api.md)
* [List of supported languages](https://github.com/addybot/docs/api/languages.md)
