import { URLs } from '../../fixtures/environments/links';
import { LoginPage } from '../../support/pageObject/login';
import { HomePage } from '../../support/pageObject/homePage';


describe('UI Validation LoginPage', () => {
  it('should validate the existence of elements on the page', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  
  cy.visit(URLs.base);
  homePage.logIn().click();
  
  //Validate login form
  loginPage.loginForm().should('be.visible');

  // Validate title
  loginPage.loginFormTitle().should('be.visible');
  loginPage.loginFormTitle().contains('Welcome Back!');

  //Validate login gif
  loginPage.loginFormGif().should('be.visible');

  loginPage.infoText().should('be.visible');
  loginPage.infoText().contains('have an account?');

  //Validate register link

  loginPage.registerLink().should('be.visible');

  //Validate email field

  loginPage.emailFieldLabel().should('be.visible');
  loginPage.emailFieldLabel().contains('Email');
  loginPage.emailField().should('be.visible', 'have.attr', 'placeholder', 'Email address');

  //Validate email password

  loginPage.passwordFieldLabel().should('be.visible');
  loginPage.passwordFieldLabel().contains('Password');
  loginPage.passwordFiel().should('be.visible', 'have.attr', 'placeholder', 'Password');

  //Validate forget link

  loginPage.forgotPasswordLink().should('be.visible');

  //Validate sign button

  loginPage.sighInButton().should('be.visible');
  

  // Close window
  cy.window().then((win) => {
    win.close();
    });
  });
});