'use strict'

let http = require('http');
let Promise = require('promise');

/**
 * Configure AddyBot API
 * @param apiToken Checkout your bot owner cabinet
 */
module.exports = (apiToken) => {
  /**
   * Get the ad that your bot shold send to user.
   * `{"uri": "http://example.com", "text": "Hello world", "revenue": 100500 }`
   *
   * @param userId Any identifier of user. For Telegram it will be `fromId`
   * @param language Language that your bot speaking with user
   * @callback function(error, result)
   * @return promise
   */
  return (userId, language, callback) => {
    let options = {
      method: 'POST',
      host: 'api.addybot.com',
      path: '/' + apiToken + '/ad',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    };
    return new Promise((resolve, reject) => {
      let request = http.request(options, (respose) => {
        var acc = ""
        respose.setEncoding('utf8');
        respose.on('data', chunk => acc = acc + chunk);
        respose.on('end', () => {
          var json;
          try { json = JSON.parse(acc); } 
          catch(e) { json = acc; }
          if (respose.statusCode == 200) {
            if (callback) callback(null, json.data);
            resolve(json.data);
          } else {
            if (callback) callback(json.message, null);
            reject(json.message);
          }
        });
      });
      request.on('error', (error) => {
        if (callback) callback(error, null);
        reject(error);
      });
      request.end(JSON.stringify({
        userIdentifier: userId,
        language: language
      }));
    });
  };
}