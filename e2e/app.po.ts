import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToDashBoard(){
    return browser.get('/dashboard');
  }

  //get login screen header text
  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

  //get login button element
  getLoginButtnElement(){
    return element(by.css('.loginBtn'));
  }

  //return username input
  getUsernameInputElement(){
    return element(by.css('.usernameInput'));
  }

  //return password input
  getPasswordInputElement(){
    return element(by.css('.passwordInput'));
  }

  getDashboardText(){
    return element(by.css('.nav-container')).getText();  
  }
}
