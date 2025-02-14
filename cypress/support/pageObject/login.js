export class LoginPage {
    loginForm(){
        return cy.get('.surface-card');
    };

    loginFormTitle(){
        return cy.get ('.flex.flex-column.text-primary');
    }
   
    loginFormGif(){
        return cy.get('.animate-waving-hand');
    };

    infoText() {
        return cy.get('.text-gray-600');
    };

    registerLink() {
        return cy.get('.mb-5 >.font-medium');
    };
    
    emailFieldLabel() {
        return cy.get(':nth-child(1) > .block'); 
    }

    emailField() {
        return cy.get('#email');
    };

    passwordFieldLabel() {
       return cy.get(':nth-child(2) > .block') ;
    };

    passwordFiel(){
        return cy.get('#password');
    }
    forgotPasswordLink() {
        return cy.get('.align-items-center > .font-medium');
    }
    sighInButton() {
        return cy.get('.flex-column > .w-full');
    }
   
}