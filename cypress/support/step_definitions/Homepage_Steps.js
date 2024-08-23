/// <reference types="cypress" />

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.webdriveruniversity.com/";

const contact_us = "#contact-us";

Given(`I navigate the WebdriverUniversity homepage`, ()=>{
    cy.visit(url)
})

When(`I click on the Contact us button`, ()=>{
    cy.get(contact_us).invoke("removeAttr","target").click();
})

When(`I Click on the Login portal button`, ()=>{
    cy.get('#login-portal').invoke('removeAttr','target').type('webdriver')
})