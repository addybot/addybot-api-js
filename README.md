Introduction
-------------------

AddyBot is a first global advertising platform created specialy for chatbots. As most of the chatbots are written in Node.js, we assumed it would be great to have an npm module to quickly integrate your bot with the our service.

Quick Start
-------------------

```bash
npm install --save addybot-api
``` 

```javascript
var addybot = require('addybot-api');
var getAd = addybot(API_TOKEN); // Checkout your cabinet

getAd(userId, "english").then(ad => {
  var message = ad.text + '\n' + ad.uri;
  // Send this message to user
});
```

Also
-----------------

* [AddyBot API Reference](https://github.com/addybot/docs/api.md)
* [List of supported languages](https://github.com/addybot/docs/api/languages.md)
