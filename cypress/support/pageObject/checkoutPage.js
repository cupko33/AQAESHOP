export class CheckoutPage {
    
    // Review step
    progress() {
        return cy.get('.flex .justify-center .py-4'); 
      }
    
    infoText() {
        return cy.get('.bg-white .p-4 .my-6 .rounded-lg .shadow-2xl'); 
      }

    salesmanImg() {
        return cy.get('img').should('have.attr', 'src', '/images/hero/lucius.png');
    };
  
    textInCloud1() {
        return cy.get('.ml-auto .p-button .p-component');
      }
      
    nextBtn1() {
        return cy.get('.p-button-label .p-c').should('have.attr', 'label', 'Next step');
      }
  
      // Shipping step
  
      textInCloud2() {
        return cy.get('.bg-white .p-4 .my-6');
      }

      makeChangesBtn() {
        return cy.get('.p-button-label .p-c').should('have.attr', 'label', 'Make changes');
      }

      nextBtn2() {
        return cy.get('.p-button-label .p-c').should('have.attr', 'label', 'Next step');
      }

      // Billing step
    
      placeOrderBtn() {
        return cy.get('.bg-white .text-primary').should('have.attr', 'aria-label', 'Place your order!');
      }
}