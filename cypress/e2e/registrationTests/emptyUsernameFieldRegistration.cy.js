import { URLs } from '../../fixtures/links';
import { HomePage } from '../../support/pageObject/homePage';
import { Registration } from '../../support/pageObject/registration';
import { generateUser } from '../../fixtures/testData';
import { Warnings } from '../../fixtures/assertions';


describe('User Registration - empty username', () => {
  it('should show warning when Username field is empty', () => {

  const homePage = new HomePage();
  const registrationPage =  new Registration;
  const dashboard = new Dashboard();
  const user = generateUser();

    cy.visit(URLs.base);
    homePage.register.click();

    // Fill in the registration form
    registrationPage.emailField().type(user.email);
    registrationPage.passwordField().type(user.password);

    // Submit the form
    registrationPage.registerButton().click();
    
    // Validate warning
    registrationPage.warningText().contains(Warnings.emptyUsernameWarning)

    // Close window
    cy.window().then((win) => {
    win.close();
    }); 
  });
});
  