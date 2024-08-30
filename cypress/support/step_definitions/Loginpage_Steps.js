/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../POM/Login_PO";

let stub;

const loginPage = new Login_PO();

When('I navigate to the Webdriver university login portal',()=>{
    loginPage.navigateToLoginPage();
})

When('I type the username {}', (username)=>{
    // cy.get('#text').type(username,{delay: 100});
    loginPage.typeUsername(username);

})
When('I type the password {}',(password)=>{
    // cy.get('#password').type(password, {delay: 100});
    loginPage.typePassword(password);
})
When('I Click on the Login button', ()=>{
    stub = cy.stub();
    cy.on('window:alert', stub);
    // cy.get('#login-button').click();
    loginPage.clickOnLoginButton();
})
Then('The system should display {string}',(expectedAlertText)=>{
    expect(stub).to.have.been.calledWith(expectedAlertText);
})
// Then('The system should display {string}',(expectedAlertText)=>{
//     cy.on(`window:alert`, (alertText) => {
//     expect(alertText).to.equal(expectedAlertText)  
// });
// })