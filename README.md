Introduction
-------------------

As you know AddyBot is a worlds first advertising platform created specialy for chatbots. Most of the chatbots are written in Node.js, so we suppose it will be great to have npm module to integrate your bot with the our service as fast as possible.

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
