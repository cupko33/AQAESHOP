import { URLs } from '../../fixtures/links';
import { LoginPage } from '../../support/pageObject/login';
import { HomePage } from '../../support/pageObject/homePage';


describe('UI Validation Login Page', () => {
  it('should validate the existence of elements on the page', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  
  cy.visit(URLs.base);
  homePage.logIn().click();
  
  //Validate login form
  loginPage.loginForm().should('be.visible');
  loginPage.loginFormTitle().should('be.visible');
  loginPage.loginFormTitle().contains('Welcome Back!');
  loginPage.loginFormGif().should('be.visible');
  loginPage.infoText().should('be.visible');
  loginPage.infoText().contains('have an account?');
  loginPage.registerLink().should('be.visible');
  loginPage.emailFieldLabel().should('be.visible');
  loginPage.emailFieldLabel().contains('Email');
  loginPage.emailField().should('be.visible', 'have.attr', 'placeholder', 'Email address');
  loginPage.passwordFieldLabel().should('be.visible');
  loginPage.passwordFieldLabel().contains('Password');
  loginPage.passwordField().should('be.visible', 'have.attr', 'placeholder', 'Password');
  loginPage.forgotPasswordLink().should('be.visible');
  loginPage.signInButton().should('be.visible');
  
  // Close window
  cy.window().then((win) => {
    win.close();
    });
  });
});