export class LoginPage {
    loginForm(): Cypress.Chainable {
        return cy.get('.surface-card');
    };

    loginFormTitle(): Cypress.Chainable {
        return cy.get ('.flex.flex-column.text-primary');
    }
   
    loginFormGif(): Cypress.Chainable {
        return cy.get('.animate-waving-hand');
    };

    infoText(): Cypress.Chainable {
        return cy.get('.text-gray-600');
    };

    registerLink(): Cypress.Chainable {
        return cy.get('.mb-5 >.font-medium');
    };
    
    emailFieldLabel(): Cypress.Chainable {
        return cy.get(':nth-child(1) > .block'); 
    }

    emailField(): Cypress.Chainable {
        return cy.get('#email');
    };

    passwordFieldLabel(): Cypress.Chainable {
       return cy.get(':nth-child(2) > .block') ;
    };

    passwordFiel(): Cypress.Chainable{
        return cy.get('#password');
    }
    forgotPasswordLink(): Cypress.Chainable{
        return cy.get('.align-items-center > .font-medium');
    }
    sighInButton(): Cypress.Chainable{
        return cy.get('.flex-column > .w-full');
    }
   
}