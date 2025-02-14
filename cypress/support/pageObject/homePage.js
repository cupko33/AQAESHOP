export class HomePage {
    logo(): Cypress.Chainable {
        return cy.get('[href="/"] > .md\:ml-4');
    };

    dashboardButton(): Cypress.Chainable {
        return cy.get('.ml-4 > .md\:ml-4');
    }
   
    register(): Cypress.Chainable {
        return cy.get(('a').contains('Register'));
    };

    logIn(): Cypress.Chainable {
        return cy.get('#loginBtn');
    };

    mainTitle(): Cypress.Chainable {
        return cy.get('.text-5xl');
    };
    
    subTitle(): Cypress.Chainable {
        return cy.get('.text-left > .text-xl'); 
    }

    robotImg(): Cypress.Chainable {
        return cy.get('.md\:ml-auto');
    };

    signUp(): Cypress.Chainable {
        return cy.get('.md\:col-12 > .align-items-center > .bg-gray-200');
    };

    copyrightLink(): Cypress.Chainable {
        return cy.get('span.sm\:text-sm'); 
    }

    linkedin(): Cypress.Chainable {
        return cy.get('[href="https://www.linkedin.com/company/automaticity-it/mycompany/"] > .pi');
    }

    instagram(): Cypress.Chainable {
        return cy.get('[href="https://www.instagram.com/automaticity.qa/"] > .pi');
    }

    mailTo(): Cypress.Chainable {
        return cy.get('[href="mailto:office@automaticity.rs"] > .pi');
    }
    facebook(): Cypress.Chainable {
        return cy.get('[href="https://www.facebook.com/automaticity.qa"] > .pi');
    };

    text1(): Cypress.Chainable {
        return cy.get('.mb-2');
    }

    text2(): Cypress.Chainable {
        return cy.get('.md\:col-12 > .mb-4');
    }

    text3(): Cypress.Chainable {
        return cy.get('.mt-6');

    }
}