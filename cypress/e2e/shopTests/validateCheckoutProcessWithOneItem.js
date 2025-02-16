import { URLs } from '../../fixtures/links';
import { ToasterText } from '../../fixtures/assertions';
import { InfoText } from '../../fixtures/assertions';
import { shopItems } from '../../fixtures/testData';
import { LoginPage } from '../../support/pageObject/login';
import { HomePage } from '../../support/pageObject/homePage';
import { LoginCredentials } from '../../fixtures/testData';
import { Dashboard } from '../../support/pageObject/dashboard';
import { CheckoutPage } from '../../support/pageObject/checkoutPage';
import { da, faker } from '@faker-js/faker';
import { generateUserShippingData } from '../../fixtures/testData';


describe('User purchases an item from Shop', () => {
  it('should validate user can follow all steps in checkout and purchase an item', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const dashboard= new Dashboard();
  const checkout= new CheckoutPage();
  const nextYear = new Date().getFullYear() + 1;
  const userShippingData = generateUserShippingData();
  

  cy.visit(URLs.base);
  homePage.logIn().click();
  
  // Enter valid credentials and login
  loginPage.emailField().type(LoginCredentials.validEmail);
  loginPage.passwordField().type(LoginCredentials.validPassword);
  loginPage.signInButton().click();
  cy.url().should('eq', URLs.dashboard);

  //Search for an item
  cy.wait(8000);
  dashboard.searchField().click();
  dashboard.searchField().type(shopItems.existingItemInStock, { delay: 100 });
  cy.wait(5000);

  // Store item name and price
  dashboard.productName().should('be.visible').invoke('text').as('selectedProduct');
dashboard.productPrice().should('be.visible').invoke('text').as('selectedPrice');


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

  checkout.firstNameField().clear({ force: true }).type(faker.person.firstName(), { delay: 100 }).invoke('val').as('firstName');
  checkout.lastNameField().clear().type(faker.person.lastName(), { delay: 100 }).invoke('val').as('lastName');
  checkout.emailField().clear().type(faker.internet.email()).invoke('val').as('email');
  checkout.phoneNumberField().clear().type(userShippingData.phoneNumber).invoke('val').as('phoneNumber');
  checkout.streetAndNumberField().clear().type(faker.location.streetAddress()).invoke('val').as('address');
  checkout.postalCodeField().clear().type(userShippingData.postalCode).invoke('val').as('postalCode');
  checkout.cityField().clear().type(faker.location.city()).invoke('val').as('city');
  checkout.countryField().clear().type(faker.location.country()).invoke('val').as('country');

  checkout.updateBtn1().click();
  cy.wait(5000);
  checkout.nextBtn2().click({ force: true });
  
  //Validate elements on Billing step and fill in data
  checkout.progress().should('be.visible');
  checkout.salesmanImg().should('be.visible');
  checkout.textInCloud1().should('be.visible');
  checkout.textInCloud1().contains(InfoText.infoTextCartStep3);
  checkout.makeChangesBtn().click({ force: true });

  checkout.cardHolderField().clear({ force: true }).type(faker.person.fullName(), { delay: 100 }).invoke('val').as('cardHolder');
  checkout.cardTypeField().click();
  cy.contains('li', 'Visa').click();
  checkout.cardNumberField().clear().type(faker.finance.creditCardNumber('4###-####-###L'));
  checkout.cvvField().clear().type(faker.finance.creditCardCVV('###'));
  checkout.cardExpirationMonthField().click();
  cy.contains('li', '7').click();
  checkout.cardExpirationYearField().click();
  cy.contains('li', '2030').click();
 

  checkout.updateBtn2().click({ force: true });
  checkout.nextBtn3().click({ force: true });

  //Validate Finalize step
  checkout.shippingInformationCard().should('be.visible');
  checkout.billingInformationCard().should('be.visible');
  checkout.itemInformationCard().should('be.visible');
  checkout.salesmanImg().should('be.visible');
  checkout.placeOrderBtn().should('be.visible');

// Validate shipping details
cy.get('@firstName').then((firstName) => {
    checkout.reviewFirstName().invoke('text').should('eq', firstName);
  });
  cy.get('@lastName').then((lastName) => {
    checkout.reviewLastName().invoke('text').should('eq', lastName);
  });
  cy.get('@phoneNumber').then((phone) => {
    checkout.reviewPhone().invoke('text').should('eq', phone);
  });
  cy.get('@email').then((email) => {
    checkout.reviewEmail().invoke('text').should('eq', email);
  });
  cy.get('@address').then((address) => {
    checkout.reviewAddress().invoke('text').should('eq', address);
  });
  cy.get('@postalCode').then((postalCode) => {
    checkout.reviewPostalCode().invoke('text').should('eq', postalCode);
  });
  cy.get('@city').then((city) => {
    checkout.reviewCity().invoke('text').should('eq', city);
  });
  cy.get('@country').then((country) => {
    checkout.reviewCountry().invoke('text').should('eq', country);
  });
  
  // Validate product name and price
  cy.get('@selectedProduct').then((product) => {
    checkout.reviewProductName().should('be.visible').invoke('text').should('eq', product);
  });
  
  cy.get('@selectedPrice').then((totalPrice) => {
    checkout.reviewTotalPrice().should('be.visible').invoke('text').then((displayedTotal) => {
      const finalTotal = parseFloat(displayedTotal.replace('', '€').trim());
      expect(finalTotal).to.eq(totalPrice);
    });
  });

  // Place order
  checkout.placeOrderBtn().click();

  // Validate dashboard opens again
  cy.url().should('eq', URLs.dashboard);

  // Logout
  dashboard.hamburgerMenu().click();
  dashboard.logoutButton().click();
  cy.url().should('include', URLs.base);
  
  cy.window().then((win) => {
    win.close();
    }); 
  }); 
});