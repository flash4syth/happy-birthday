var prompt = require('prompt');

describe('Protractor Demo App', function(){
  beforeEach(function(){
    isAngularSite(false);
  });

  it('should have a title', function(){

    //var username = process.env['FB_USERNAME'];
    //var password = process.env['FB_PASSWORD'];

    browser.get('https://facebook.com/');
    expect(browser.getTitle()).toEqual('Phony Title');
    expect(browser.getTitle()).toEqual('Facebook - Log In or Sign Up');

    //element(by.css('#email')).sendKeys(username);
    //element(by.css('#pass')).sendKeys(password);
    //element(by.css('#loginbutton input[type="submit"]')).click();


  });
});
