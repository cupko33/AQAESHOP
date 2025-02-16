import { URLs } from '../../fixtures/links';
import { ToasterText } from '../../fixtures/assertions';
import { InfoText } from '../../fixtures/assertions';
import { shopItems } from '../../fixtures/testData';
import { LoginPage } from '../../support/pageObject/login';
import { HomePage } from '../../support/pageObject/homePage';
import { LoginCredentials } from '../../fixtures/testData';
import { Dashboard } from '../../support/pageObject/dashboard';
import { CheckoutPage } from '../../support/pageObject/checkoutPage';


describe('User purchases an item from Shop', () => {
  it('should validate user can follow all steps in checkout and purcase an item', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const dashboard= new Dashboard();
  const checkout= new CheckoutPage();

  cy.visit(URLs.base);
  homePage.logIn().click();
  
  // Enter valid credentials and login
  loginPage.emailField().type(LoginCredentials.validEmail);
  loginPage.passwordField().type(LoginCredentials.validPassword);
  loginPage.signInButton().click();
  cy.url().should('eq', URLs.dashboard);

  // Search for an item
  dashboard.searchField().type(shopItems.existingItemInStock);

  // Send item to basket and open shopping basket
  dashboard.addToCartButton().click();
  dashboard.shoppingCartButton().click();

  //Validate side panel opens
  dashboard.shoppingCartSideBar().should('be.visible');

  //Go to Checkout
  dashboard.checkoutButton().click();
  



  
  // Logout
  //dashboard.hamburgerMenu().click();
  //dashboard.logoutButton().click();
  //cy.url().should('include', URLs.base);
  
  //cy.window().then((win) => {
    //win.close();
    //});
  });
});