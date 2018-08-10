describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.google.com.tw/');
    expect(browser.getCurrentUrl()).toMatch('https://www.google.com');
    browser.ignoreSynchronization = false;
  });
});