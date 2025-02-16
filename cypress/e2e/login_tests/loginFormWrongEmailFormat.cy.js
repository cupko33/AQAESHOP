import { URLs } from '../../fixtures/links';
import { LoginPage } from '../../support/pageObject/login';
import { HomePage } from '../../support/pageObject/homePage';
import { Warnings } from '../../fixtures/assertions';
import { LoginCredentials } from '../../fixtures/testData';


describe('Wrong Email Format in Login', () => {
  it('should validate warning displayed when email has wrong format', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  
  cy.visit(URLs.base);
  homePage.logIn().click();
  
  loginPage.emailField().type(LoginCredentials.wrongEmailFormat);
  loginPage.passwordField().type(LoginCredentials.validPassword);
  loginPage.signInButton().click();
  loginPage.warningText().should('be.visible');
  loginPage.warningText().contains(Warnings.wrongEmailFormatWarning);

  cy.window().then((win) => {
    win.close();
    });
  });
});