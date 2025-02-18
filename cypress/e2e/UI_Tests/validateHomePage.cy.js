
import { URLs } from '../../fixtures/links';
import { HomePage } from '../../support/pageObject/homePage';


describe('UI Validation Home Page', () => {
  it('should validate the existence of elements on the page', () => {

  const homePage = new HomePage();
  
  cy.visit(URLs.base);
  
  //Validate elements on the page
  homePage.logo().should('be.visible');
  homePage.dashboardButton().should('be.visible');
  homePage.register().should('be.visible');
  homePage.logIn().should('be.visible');
  homePage.mainTitle().should('be.visible');
  homePage.mainTitle().contains('AQA eShop');
  homePage.subTitle().should('be.visible');
  homePage.subTitle().contains('...test your automation skills');
  homePage.text1().should('be.visible');
  homePage.text1().contains('Welcome to Automaticity');
  homePage.text2().should('be.visible');
  homePage.text2().contains('providing a smooth and seamless shopping experience');
  homePage.text3().should('be.visible');
  homePage.text3().contains('Let Automaticity be your trusted companion');
  homePage.signUp().should('be.visible');
  homePage.copyrightLink().should('exist');
  homePage.linkedin().should('exist');
  homePage.facebook().should('exist');
  homePage.instagram().should('exist');
  homePage.mailTo().should('exist');
  
  // Close window
  cy.window().then((win) => {
    win.close();
    });
  });
});