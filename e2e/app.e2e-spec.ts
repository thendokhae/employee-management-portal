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

  it('should display dashboard screen', () => {
    page.navigateToDashBoard();
    expect(page.getDashboardText()).toEqual('Dashboard');
  });
});
