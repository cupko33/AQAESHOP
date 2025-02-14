export class HomePage {
    logo() {
        return cy.get('[href="/"] > .md\:ml-4');
    };

    dashboardButton() {
        return cy.get('.ml-4 > .md\:ml-4');
    }
   
    register() {
        return cy.get(('a').contains('Register'));
    };

    logIn() {
        return cy.get('#loginBtn');
    };

    mainTitle() {
        return cy.get('.text-5xl');
    };
    
    subTitle() {
        return cy.get('.text-left > .text-xl'); 
    }

    robotImg() {
        return cy.get('.md\:ml-auto');
    };

    signUp() {
        return cy.get('.md\:col-12 > .align-items-center > .bg-gray-200');
    };

    copyrightLink() {
        return cy.get('span.sm\:text-sm'); 
    }

    linkedin() {
        return cy.get('[href="https://www.linkedin.com/company/automaticity-it/mycompany/"] > .pi');
    }

    instagram() {
        return cy.get('[href="https://www.instagram.com/automaticity.qa/"] > .pi');
    }

    mailTo() {
        return cy.get('[href="mailto:office@automaticity.rs"] > .pi');
    }
    facebook() {
        return cy.get('[href="https://www.facebook.com/automaticity.qa"] > .pi');
    };

    text1() {
        return cy.get('.mb-2');
    }

    text2() {
        return cy.get('.md\:col-12 > .mb-4');
    }

    text3() {
        return cy.get('.mt-6');

    }
}