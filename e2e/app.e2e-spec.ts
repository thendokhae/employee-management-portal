import { AppPage } from './app.po';

describe('em-portal App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login screen', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login');
  });

  it('should display username input', () =>{
    expect(page.getUsernameInputElement().getText()).toEqual('');
  })

  it('should display password input', () =>{
    expect(page.getPasswordInputElement().getText()).toEqual('');
  })

  it('should display login button', () =>{
    expect(page.getLoginButtnElement().getText()).toEqual('LOGIN');
  })

  it('should login', () => {
    var usernameField = page.getUsernameInputElement();
    var passwordField = page.getPasswordInputElement();
    
    //populate inputs
    usernameField.sendKeys("pravin.gordhan");
    passwordField.sendKeys("pravin.gordhan");

    //ensure fields are updated
    expect(usernameField.getAttribute('value')).toEqual("pravin.gordhan");
    expect(passwordField.getAttribute('value')).toEqual("pravin.gordhan");

    //click button to login
    page.getLoginButtnElement().click().then(()=>{
      page.navigateToDashboard()
      expect(page.getBackEndersText()).toEqual("Back-enders");
    });
  });
});
