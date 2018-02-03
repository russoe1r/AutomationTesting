const selector = require('../lib/selectors')
const urls = require('../lib/urls')

module.exports = {
    searchGoogle: function(browser) {
        browser
        .url(urls.google)
        .waitForElementVisible(selector.body, 1000)
        .setValue(selector.input, 'nightwatch')
        .waitForElementVisible(selector.button, 1000)
        .click(selector.button)
        .pause(1000)
        .assert.containsText(selector.main, 'Night Watch')
        .end();
    }
}