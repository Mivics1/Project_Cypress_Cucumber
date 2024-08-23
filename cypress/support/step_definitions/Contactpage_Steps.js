/// <reference types="cypress" />

import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`I type a first name`, ()=>{
    cy.get('input[name="first_name"]').type("Agboola Michael")
})