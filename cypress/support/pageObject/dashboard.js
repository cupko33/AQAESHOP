class Dashboard {
    get hamburgerMenu() {
      return cy.get('.relative > div > span.inline-flex > .inline-flex'); 
    }
  
    get logoutButton() {
      return cy.get('button.block'); 
    }
  }
  
  export default new Logout();