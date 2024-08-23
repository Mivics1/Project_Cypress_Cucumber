/// <reference types="cypress" />

import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`The system should display a Successful message as a feedback`, ()=>{
    cy.get('h1').should('have.text','Thank You for your Message!');
})

Then(`The system should display Invalid Email Address as a feedback`, ()=>{
    cy.get('body').contains('Error: Invalid email address');
})