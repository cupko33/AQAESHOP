import { URLs } from '../../fixtures/links';
import { LoginPage } from '../../support/pageObject/login';
import { HomePage } from '../../support/pageObject/homePage';
import { Warnings } from '../../fixtures/assertions';
import { LoginCredentials } from '../../fixtures/testData';


describe('Invalid Email in Login', () => {
  it('should validate warning displayed when email is invalid', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  
  cy.visit(URLs.base);
  homePage.logIn().click();
  
  loginPage.emailField().type(LoginCredentials.invalidEmail);
  loginPage.passwordField().type(LoginCredentials.validPassword);
  loginPage.signInButton().click();
  loginPage.warningText().should('be.visible');
  loginPage.warningText().contains(Warnings.invalidCredentialsWarning);

  cy.window().then((win) => {
    win.close();
    });
  });
});