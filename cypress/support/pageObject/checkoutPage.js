export class CheckoutPage {
    
    // Review Step
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
  
      // Shipping Step
  
      textInCloud2() {
        return cy.get('.bg-white .p-4 .my-6');
      }

      makeChangesBtn() {
        return cy.get('.p-button-label .p-c').should('have.attr', 'label', 'Make changes');
      }

      firstNameField() {
        return cy.get('#first_name');
      }

      lastNameField() {
        return cy.get('#last_name');
      }

      emailField() {
        return cy.get('#email');
      }

      phoneNumberField() {
        return cy.get('#phone_number');
      }

      streetAndNumberField() {
        return cy.get('#street_and_number');
      }

      cityField() {
        return cy.get('#city');
      }

      postalCodeField() {
        return cy.get('#postal_code');
      }

      countryField() {
        return cy.get('#country');
      }

      updateBtn() {
        return cy.get('.p-button-label .p-c').should('have.attr', 'aria-label', 'Update');
      }

    
      // Billing Step

      cardHolderField() {
        return cy.get('#cardholder');
      }
      
      cardTypeField() {
        return cy.get('#card_type');
      }

      cardTypeField() {
        return cy.get('#card_number');
      }

      cvvField() {
        return cy.get('#cvv');
      }

      cvvField() {
        return cy.get('#cvv');
      }

      cardExpirationMonthField() {
        return cy.get('#card_expiration_month');
      }

      cardExpirationYearField() {
        return cy.get('#card_expiration_year');
      }

      
      placeOrderBtn() {
        return cy.get('.bg-white .text-primary').should('have.attr', 'aria-label', 'Place your order!');
      }


      // Finalize Purchase Step

      shippingInformationCard() {
        return cy.get('.max-w-7xl > :nth-child(1)');
      }

      firstNameShip() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(1) > .font-semibold');
      }

      lastNameShip() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(2) > .font-semibold');
      }

      emailShip() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(3) > .font-semibold');
      }

      phoneShip() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(4) > .font-semibold');
      }

      streetAndNumberShip() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(5) > .font-semibold');
      }

      cityShip() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(6) > .font-semibold');
      }

      postalCodeShip() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(7) > .font-semibold');
      }

      countryShip() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(8) > .font-semibold');
      }

      billingInformationCard() {
        return cy.get('.max-w-7xl > :nth-child(2)');
      }

      cardHolderShip() {
        return cy.get(':nth-child(2) > .mt-4 > :nth-child(1) > .font-semibold');
      }

      cardTypeShip() {
        return cy.get(':nth-child(2) > .mt-4 > :nth-child(2) > .font-semibold');
      }

      cardNumberShip() {
        return cy.get(':nth-child(2) > .mt-4 > :nth-child(3) > .font-semibold');
      }

      cvvShip() {
        return cy.get(':nth-child(2) > .mt-4 > :nth-child(4) > .font-semibold');
      }
      
      expirationDateShip() {
        return cy.get(':nth-child(2) > .mt-4 > :nth-child(5) > .font-semibold');
      }

      itemInformationCard() {
        return cy.get('.max-w-7xl > :nth-child(3)');
      }

      itemName() {
        return cy.get('.border-b-2 > .flex > .font-semibold');
      }

      totalPrice() {
        return cy.get(':nth-child(3) > .mt-4 > :nth-child(2)');
      }

}
      
     