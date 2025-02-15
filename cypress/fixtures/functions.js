
import { Logout } from '../support/pageObject/dashboard';
import { URLs } from './links';

export const logout = () => {
  Logout.hamburgerMenu.click();
  Logout.logoutButton.click();

  cy.url().should('include', URLs.base);
};