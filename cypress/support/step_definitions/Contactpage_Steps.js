/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When(`I type a first name`, ()=>{
    cy.get('input[name="first_name"]').type("Agboola Michael");
})
When(`I type a last name`, ()=>{
    cy.get('input[name="last_name"]').type("Daramola")
})
When(`I enter an email address`, ()=>{
    cy.get('input[name="email"]').type("agbooladaramola7@gmail.com")
})
When(`I type a comment`, ()=>{
    cy.get('textarea[name="message"]').type("Testing 1, 2, 3...")
})
When(`I click on the submit button`, ()=>{
    cy.get('input[type="submit"]').type("Daramola")
})