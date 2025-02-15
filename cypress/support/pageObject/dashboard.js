export class Dashboard {
    hamburger() {
        return cy.get('.relative > div > span.inline-flex > .inline-flex');
    }

    logout() {
        return cy.get('button.block');
    }
};


