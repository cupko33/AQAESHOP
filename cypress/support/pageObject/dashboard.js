export class Dashboard {
    
  hamburgerMenu() {
      return cy.get('.relative > div > span.inline-flex > .inline-flex'); 
    }
  
  logoutButton() {
      return cy.get('button.block'); 
    }

    searchField() {
      return cy.get('#search');
    }

    addToCartButton() {
      return cy.get('.ml-auto .p-button .p-component');
    }

    successToaster() {
      return cy.get('.Toastify');
    }

    shoppingCartButton() {
      return cy.get('.inline-flex .rounded-md');
    }

    shoppingCartSideBar() {
      return cy.get('.sidebar .open');
    }

    cartText() {
      return cy.get('.block .text-primary');
    }

    clearButton() {
      return cy.get('.ml-2');
    }

    itemCard() {
      return cy.get('.flex .flex-column');
    }

    itemName() {
      return cy.get('.my-1 .text-primary');
    }

   checkoutButton() {
    return cy.get('.button').contains('Checkout');
   }

    totalPrice() {
      return cy.get('.text-lg .mb-4');
    }
  }
  
  
