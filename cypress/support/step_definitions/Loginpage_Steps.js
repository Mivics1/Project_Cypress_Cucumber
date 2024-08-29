/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When('I type the username {}', (username)=>{
    cy.get('#text').type(username,{delay: 100});
})
When('I type the password {}',(password)=>{
    cy.get('#password').type(password, {delay: 100});
})
When('I Click on the Login button', ()=>{
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('#login-button').click();
})
Then('The system should display {string}',(expectedAlertText)=>{
    expect(stub).to.have.been.calledWith(expectedAlertText);
})
// Then('The system should display {string}',(expectedAlertText)=>{
//     cy.on(`window:alert`, (alertText) => {
//     expect(alertText).to.equal(expectedAlertText)  
// });
// })