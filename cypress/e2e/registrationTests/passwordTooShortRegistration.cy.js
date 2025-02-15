import { URLs } from '../../fixtures/links';
import { HomePage } from '../../support/pageObject/homePage';
import { Registration } from '../../support/pageObject/registration';
import { generateUser } from '../../fixtures/testData';
import { Warnings } from '../../fixtures/assertions';


describe('User Registration - password without enough characters', () => {
  it('should show warning when password does not have enough characters', () => {

  const homePage = new HomePage();
  const registrationPage =  new Registration;
  const user = generateUser();

    cy.visit(URLs.base);
    homePage.register().click();

    // Fill in the registration form
    registrationPage.usernameField().type(user.name);
    registrationPage.emailField().type(user.email);
    registrationPage.passwordField().type('a');
    
    // Submit the form
    registrationPage.registerButton().click();

    // Validate warning shown
    registrationPage.warningBelowField().contains(Warnings.notEnoughCharPasswordWarning);

    // Close window
    cy.window().then((win) => {
    win.close();
    }); 
  });
});
  