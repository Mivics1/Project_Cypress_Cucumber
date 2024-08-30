/// <reference types="cypress" />

import Base_PO from "./Base_PO"

class Contact_PO extends Base_PO {

    navigateToContactPage(){
        super.navigate("/Contact-Us/contactus.html");
    }

    typeFirstName(firstname){
        cy.get('input[name="first_name"]').clear().type(firstname);
    }

    typeLastName(lastname){
        cy.get('input[name="last_name"]').clear().type(lastname);
    }

    typeEmailAddress(emailaddress){
        cy.get('input[name="email"]').clear().type(emailaddress);
    }

    typeComment(comment){
        cy.get('textarea[name="message"]').clear().type(comment);
    }

    clickOnSubmitButton(){
        cy.get('input[type="submit"]').click();
    }
}
export default Contact_PO;