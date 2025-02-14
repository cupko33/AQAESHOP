import { URLs } from '../../fixtures/environments/links';
import { LoginPage } from '../../support/pageObject/login';
import { HomePage } from '../../support/pageObject/homePage';
import { LoginCredentials } from '../../fixtures/environments/testData';
import { Dashboard } from '../../support/pageObject/dashchboard';

describe('Valid Login', () => {
  it('should validate user can login in with valid credentials', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const dashboard = new Dashboard();

  cy.visit(URLs.base);
  homePage.logIn().click();
  
  loginPage.emailField().type(LoginCredentials.validEmail);
  loginPage.passwordField().type(LoginCredentials.validPassword);
  loginPage.signInButton().click();
  cy.url(URLs.dashboard);
  dashboard.hamburger().click();
  dashboard.logout().click();

  cy.window().then((win) => {
    win.close();
    });
  });
});