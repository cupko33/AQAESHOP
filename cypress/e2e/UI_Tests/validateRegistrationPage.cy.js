import { URLs } from '../../fixtures/environments/links';
import { HomePage } from '../../support/pageObject/homePage';
import { Registration } from '../../support/pageObject/registration';


describe('UI Validation Login Page', () => {
  it('should validate the existence of elements on the page', () => {


  const homePage = new HomePage();
  const registrationPage =  new Registration;
  
  cy.visit(URLs.base);
  homePage.register().click();
  
  //Validate registration form
  registrationPage.registrationForm().should('be.visible');
  registrationPage.mainTitle().should('be.visible');
  registrationPage.infoText().should('be.visible');
  registrationPage.loginLink().should('be.visible');
  registrationPage.usernameFieldLabel().should('be.visible');
  registrationPage.usernameField().should('be.visible');
  registrationPage.usernameField().should('have.attr', 'placeholder', 'Username address');
  registrationPage.emailFieldLabel().should('be.visible');
  registrationPage.emailField().should('be.visible');
  registrationPage.emailField().should('have.attr', 'placeholder', 'Email');
  registrationPage.passwordFieldLabel().should('be.visible');
  registrationPage.passwordField().should('be.visible');
  registrationPage.passwordField().should('have.attr', 'placeholder', 'Password');
  registrationPage.registerButton().should('be.visible');

  // Close window
  cy.window().then((win) => {
    win.close();
    });
  });
});