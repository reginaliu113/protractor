// const { until, By, Key } = require('selenium-webdriver')
const {defineSupportCode} = require('cucumber');
const {setDefaultTimeout} = require('cucumber');
const seleniumWebdriver = require('selenium-webdriver');
const EC = protractor.ExpectedConditions;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
defineSupportCode(function ({ Given, When, Then }) {
    setDefaultTimeout(60 * 1000);
    var viewButton = element(by.css('a.btn'));

    Given('I go to {string}', function (url) {
        browser.get(url);
    });

	When('I click on view button', function() {
        browser.wait(EC.visibilityOf(viewButton),10000,"couldn't find the button!");
        viewButton.click();
  	});

	Then('Url should be equal to {string}', function (url) {
        var githubDiscussion = element(by.css('.new-discussion-timeline'));
        browser.wait(EC.visibilityOf(githubDiscussion),10000,"couldn't find github!")
        browser.getCurrentUrl().then( currentUrl => expect(currentUrl).to.equal(url) );
	});

});
