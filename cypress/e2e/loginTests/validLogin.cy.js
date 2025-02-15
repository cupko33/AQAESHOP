import { URLs } from '../../fixtures/links';
import { LoginPage } from '../../support/pageObject/login';
import { HomePage } from '../../support/pageObject/homePage';
import { LoginCredentials } from '../../fixtures/testData';
import { Logout } from '../../support/pageObject/logout';


describe('Valid Login', () => {
  it('should validate user can login in with valid credentials', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const logout = new Logout();

  cy.visit(URLs.base);
  homePage.logIn().click();
  
  // Enter valid credentials and login
  loginPage.emailField().type(LoginCredentials.validEmail);
  loginPage.passwordField().type(LoginCredentials.validPassword);
  loginPage.signInButton().click();
  cy.url().should('eq', URLs.dashboard);
  
  // Logout
  logout();

  cy.window().then((win) => {
    win.close();
    });
  });
});