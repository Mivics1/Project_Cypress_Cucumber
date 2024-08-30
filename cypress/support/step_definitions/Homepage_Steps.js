/// <reference types="cypress" />

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../POM/Base_PO";
import Homepage_PO from "../POM/Homepage_BO";

// const url = "https://www.webdriveruniversity.com/";
// const basePage = new Base_PO();
const homePage = new Homepage_PO();

const contactUs_button = "#contact-us";
const login_button = "#login-portal";

Given(`I navigate the WebdriverUniversity homepage`, ()=>{
    // cy.visit(url);
    // basePage.navigate("");
    homePage.navigate("");
})

When(`I click on the Contact us button`, ()=>{
    // cy.get(contactUs_button).invoke("removeAttr","target").click();
    // cy.OpenLink_In_Same_Tab('#contact-us');
    homePage.clickOn_contactUs_button();
})

When(`I Click on the Login portal button`, ()=>{
    // cy.get('#login-portal').invoke('removeAttr','target').click();
    // cy.OpenLink_In_Same_Tab('#login-portal');
    homePage.clickOn_login_button();
})