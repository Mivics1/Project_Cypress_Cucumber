/// <reference types="cypress" /> 

import { After, Before, Given, When } from "@badeball/cypress-cucumber-preprocessor";

// Before (()=>{
//     cy.log("Executes before each Scenario/Test.");
//     cy.clearLocalStorage();
// })

Before({ tags: "@Smoke_test"},()=>{
    cy.log("Executing Smoke Test");
})

Before({ tags: "@regression"},()=>{
    cy.log("Executing Regression Test");
})

Before({ tags: "@contact-us"},()=>{
    cy.log("Executing Contact-Us page testing")
})

After(()=>{
    cy.log("Execute after each Scenario/Test.")
})

When("I wait for {} seconds",(seconds)=>{
    cy.wait(seconds * 1000)
})