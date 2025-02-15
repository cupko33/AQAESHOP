import { URLs } from '../../fixtures/links';
import { HomePage } from '../../support/pageObject/homePage';
import { Registration } from '../../support/pageObject/registration';
import { generateUser } from '../../fixtures/testData';
import { Logout } from '../../support/pageObject/logout';


describe('User Registration', () => {
  it('should successfully register with valid details', () => {

  const homePage = new HomePage();
  const registrationPage =  new Registration;
  const logout = new Logout();
  const user = generateUser();

    cy.visit(URLs.base);
    homePage.register.click();

    // Fill in the registration form
    registrationPage.usernameField().type(user.name);
    registrationPage.emailField().type(user.email);
    registrationPage.passwordField().type(user.password);
    
    // Submit the form
    registrationPage.registerButton().click();

    // Validate successful registration
    cy.url().should('eq', URLs.dashboard);

    //Logout
    logout();
    
    // Close window
    cy.window().then((win) => {
    win.close();
    }); 
  });
});
  