/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Login_PO extends Base_PO{

    navigateToLoginPage(){
        super.navigate("/Login-Portal/index.html");
    }

    typeUsername(username){
        cy.get('#text').type(username,{delay: 100});
    }

    typePassword(password){
        cy.get('#password').type(password, {delay: 100});
    }

    clickOnLoginButton(){
        cy.get('#login-button').click();
    }

}
export default Login_PO;