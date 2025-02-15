import { URLs } from '../../fixtures/links';
import { LoginPage } from '../../support/pageObject/login';
import { HomePage } from '../../support/pageObject/homePage';
import { LoginCredentials } from '../../fixtures/testData';
import { Dashboard } from '../../support/pageObject/dashboard';


describe('Valid Login', () => {
  it('should validate user can login in with valid credentials', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const dashboard= new Dashboard();

  cy.visit(URLs.base);
  homePage.logIn().click();
  
  // Enter valid credentials and login
  loginPage.emailField().type(LoginCredentials.validEmail);
  loginPage.passwordField().type(LoginCredentials.validPassword);
  loginPage.signInButton().click();
  cy.url().should('eq', URLs.dashboard);
  
  // Logout
  dashboard.hamburgerMenu().click();
  dashboard.logoutButton().click();
  cy.url().should('include', URLs.base);
  
  cy.window().then((win) => {
    win.close();
    });
  });
});