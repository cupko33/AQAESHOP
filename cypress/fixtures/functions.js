
import { Dashboard } from '../support/pageObject/logout';
import { LoginPage } from '../support/pageObject/login';
import { LoginCredentials } from './testData';
import { URLs } from './links';

export const logout = () => {
  Dashboard.hamburgerMenu.click();
  Dashboard.logoutButton.click();
  cy.url().should('include', URLs.base);
};


export const login = () => {
    cy.visit(URLs.base); 
  
    LoginPage.emailField().type(LoginCredentials.validEmail);
    LoginPage.passwordField().type(LoginCredentials.validPassword);
    LoginPage.signInButton().click();
    cy.url().should('eq', URLs.dashboard);
}
