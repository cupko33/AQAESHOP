import { URLs } from '../../fixtures/links';
import { ToasterText } from '../../fixtures/assertions';
import { InfoText } from '../../fixtures/assertions';
import { shopItems } from '../../fixtures/testData';
import { LoginPage } from '../../support/pageObject/login';
import { HomePage } from '../../support/pageObject/homePage';
import { LoginCredentials } from '../../fixtures/testData';
import { Dashboard } from '../../support/pageObject/dashboard';
import { CheckoutPage } from '../../support/pageObject/checkoutPage';
import { faker } from '@faker-js/faker';


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
  cy.wait(8000);
  dashboard.searchField().click();
  dashboard.searchField().type(shopItems.existingItemInStock, { delay: 100 });
  cy.wait(5000);

  // Send item to basket and open shopping basket
  dashboard.addToCartButton().first().click();
  cy.wait(5000);
  dashboard.shoppingCartButton().click();

  //Validate side panel opens
  dashboard.shoppingCartSideBar().should('be.visible');

  //Go to Checkout
  dashboard.checkoutButton().click();
  cy.url().should('eq', URLs.checkout);

  //Validate elements on page and go to Next step
  checkout.progress().should('be.visible');
  checkout.salesmanImg().should('be.visible');
  checkout.textInCloud1().should('be.visible');
  checkout.textInCloud1().contains(InfoText.infoText1CartStep1);
  checkout.nextBtn1().click();

  //Validate elements on Shipping step and fill in data
  checkout.progress().should('be.visible');
  checkout.salesmanImg().should('be.visible');
  checkout.textInCloud2().should('be.visible');
  checkout.textInCloud2().contains(InfoText.infoTextCartStep2);
  checkout.makeChangesBtn().click();

  checkout.firstNameField().clear().type(faker.person.firstName()); 
  checkout.lastNameField().clear().type(faker.person.lastName());
  checkout.emailField().clear().type(faker.internet.email());
  checkout.phoneNumberField().clear().type(faker.phone.number('##########'));
  checkout.streetAndNumberField().clear().type(faker.location.streetAddress()); 
  checkout.postalCodeField().clear().type(faker.location.zipCode());
  checkout.cityField().clear().type(faker.location.city()); 
  checkout.countryField().clear().type(faker.location.country()); 

  checkout.updateBtn().click();




  

  




  
  // Logout
  //dashboard.hamburgerMenu().click();
  //dashboard.logoutButton().click();
  //cy.url().should('include', URLs.base);
  
  //cy.window().then((win) => {
    //win.close();
    //});
  });
});