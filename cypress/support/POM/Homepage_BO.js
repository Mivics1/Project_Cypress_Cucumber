/// <reference types="cypress" />

import Base_PO from "./Base_PO";


class Homepage_PO extends Base_PO{
    navigateToHomepage(){
        super.navigate("");
    }

    clickOn_contactUs_button(){
        cy.OpenLink_In_Same_Tab('#contact-us');
    }

    clickOn_login_button(){
        cy.OpenLink_In_Same_Tab('#login-portal');
    }


}
export default Homepage_PO;