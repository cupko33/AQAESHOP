import { URLs } from '../../fixtures/environments/links';
import { HomePage } from '../../support/pageObject/homePage';
import { Registration } from '../../support/pageObject/registration';
import { generateUser } from '../../fixtures/environments/testData';
import { Warnings } from '../../fixtures/environments/assertions';


describe('User Registration - empty email', () => {
  it('should show warning when Email field is empty', () => {

  const homePage = new HomePage();
  const registrationPage =  new Registration;
  const dashboard = new Dashboard();
  const user = generateUser();

    cy.visit(URLs.base);
    homePage.register.click();

    // Fill in the registration form
    registrationPage.usernameField().type(user.name);
    registrationPage.passwordField().type(user.password);
    
    // Submit the form
    registrationPage.registerButton().click();
    
    // Validate warnign shown
    registrationPage.warningText().contains(Warnings.emptyEmailWarning);
    
    // Close window
    cy.window().then((win) => {
    win.close();
    }); 
  });
});
  