import { URLs } from '../../fixtures/links';
import { HomePage } from '../../support/pageObject/homePage';
import { Registration } from '../../support/pageObject/registration';
import { generateUser } from '../../fixtures/testData';
import { Warnings } from '../../fixtures/assertions';


describe('User Registration - duplicate email', () => {
  it('should show warning when email is already used', () => {

  const homePage = new HomePage();
  const registrationPage =  new Registration;
  const user = generateUser();

    cy.visit(URLs.base);
    homePage.register.click();

    // Register first user
    registrationPage.usernameField().type(user.name);
    registrationPage.emailField().type(user.email);
    registrationPage.passwordField().type(user.password);
    
    // Submit the form and validate page
    registrationPage.registerButton().click();
    cy.url().should('eq', URLs.dashboard);

    //Logout
    dashboard.hamburger().click();
    dashboard.logout().click();

    // Register with the same email but a different username
    registrationPage.usernameField().type(`New${user.name}`);
    registrationPage.emailField().type(user.email);
    registrationPage.passwordField().type(user.password);
    registrationPage.registerButton().click();

    // Validate warning shown
    registrationPage.warningText().contains(Warnings.usedEmailWarning)
    
    // Close window
    cy.window().then((win) => {
    win.close();
    }); 
  });
});
  