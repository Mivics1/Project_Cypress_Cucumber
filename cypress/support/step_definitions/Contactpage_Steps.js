/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Contact_PO from "../POM/Contact_PO";

const contactPage = new Contact_PO();

// When(`I type a first name`, () => {
//   cy.get('input[name="first_name"]').type("Agboola Michael");
// });
// When(`I type a last name`, () => {
//   cy.get('input[name="last_name"]').type("Daramola");
// });
// When(`I enter an email address`, () => {
//   cy.get('input[name="email"]').type("agbooladaramola7@gmail.com");
// });
// When(`I type a comment`, () => {
//   cy.get('textarea[name="message"]').type("Testing 1, 2, 3...");
// });
When(`I click on the submit button`, () => {
  // cy.get('input[type="submit"]').click();
  contactPage.clickOnSubmitButton();
});
// When(`I type a specific first name {string}`, (first_name) => {
//   cy.get('input[name="first_name"]').type(first_name);
// });
// When(`I type a specific last name {string}`, (last_name) => {
//   cy.get('input[name="last_name"]').type(last_name);
// });
// When(`I enter a specific email address {string}`, (email) => {
//   cy.get('input[name="email"]').type(email);
// });
// When(
//   `I type a specific word {string} and number {int} within the comment input field`,
//   (word, number) => {
//     cy.get('textarea[name="message"]').type(word + " " + number);
//   }
// );

Given('I navigate to the WebdriverUniversity contact url', ()=>{
  contactPage.navigateToContactPage();
})

When(`I type an {} and a comment {}`, (emailaddress, comment) => {
  // if (emailaddress !== " ") {
    // cy.get('input[name="email"]').clear().type(emailaddress, { delay: 100 });
    contactPage.typeEmailAddress(emailaddress);
  // } else {
  //   cy.get('input[name="email"]').clear(); // Ensure field is empty if value is empty
  // }
  // if (comment !== " ") {
    // cy.get('textarea[name="message"]').clear().type(comment, { delay: 100 });
    contactPage.typeComment(comment);
  // } else {
  //   cy.get('textarea[name="message"]').clear(); // Ensure field is empty if value is empty
  // }
});

When(`I type a first name {} and a last name {}`, (firstname, lastname) => {
  // if (firstname !== " ") {
    // cy.get('input[name="first_name"]').clear().type(firstname, { delay: 100 });
    contactPage.typeFirstName(firstname);
  // } else {
  //   cy.get('input[name="first_name"]').should('contain.text', 'Error: all fields are required');
  //   // cy.get('input[name="first_name"]').clear(); // Ensure field is empty if value is empty
  // }
  // if (lastname !== " ") {
    // cy.get('input[name="last_name"]').clear().type(lastname, { delay: 100 });
    contactPage.typeLastName(lastname);
  // } else {
  //   cy.get('input[name="last_name"]').should('contain.text', 'Error: all fields are required');
  // }
});

Then(`I should be presented with header text {string}`,(message)=>{
  cy.xpath("//body | //h1").should('contain.text',message);
    // cy.xpath('//body | //h1').each(($el) => {
    //   if ($el.is('body')) {
    //     // Perform an assertion on the body element
    //     cy.wrap($el).should('contain.text', message); // Assuming the background is white
    //   } else if ($el.is('h1')) {
    //     // Perform an assertion on the h1 element
    //     cy.wrap($el).should('contain.text', message);
    //   }
    // });
});