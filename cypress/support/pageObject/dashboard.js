export class Dashboard {
    
  hamburgerMenu() {
      return cy.get('.relative > div > span.inline-flex > .inline-flex'); 
    }
  
  logoutButton() {
      return cy.get('button.block'); 
    }
  }
  