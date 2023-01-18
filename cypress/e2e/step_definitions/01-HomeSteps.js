const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { homePage } from '../pages/01-HomePage'

// Before(() => {
//     cy.request({
//         url: 'https://www3.epa.gov/carbon-footprint-calculator/data/egrid.csv',        
//       }).then((resp) => {        
//         expect(resp.status).to.eq(200)
//         cy.log(resp.body)
//         cy.writeFile('cypress/fixtures/egrid.csv', resp.body)
//       })      
// });

When("I visit Carbon Footprint Calculator", () => {
  cy.visit("/");
});

Then("I should see Get Started Form", () => {
  cy.get("#ppl-in-household-input")
    .should("be.visible")
    .and('have.attr', 'placeholder', 'Number of people in your household')
  cy.get("#zip-code-input")
    .should("be.visible")
    .and('have.attr', 'placeholder', 'ZIP Code')
  cy.get("#get-started")
    .should("be.visible")
    .and('have.text', 'Get Started')
});

When("I search by a number of people and zip code", () => {
  homePage.getStarted(3, '00002')
});

When("I click on the {string} menu option", (menuName) => {    
  cy.get('h2').contains(menuName, { timeout: 100000 }).should('be.visible').click()
});

When("I initiate the the calculation with {string} people and the {string} zip code", function (people, zipCode) {
  numberOfPeople = people
  homePage.getStarted(numberOfPeople, zipCode)
});

Then("I should see the error {string}", function (errorMessage) {
  homePage.checkErrorMessage(errorMessage)
});

Then("I click on View Your Report button and then I can check my Household Carbon Footprint Report", () => {
  cy.get('#view-full-report').contains('View Your Report').should('be.visible').click()
  cy.get('h1').contains('Your Household Carbon Footprint Report').should('be.visible')
});

Then("I see the message {string}", (msg) => {
  cy.get('div').contains(msg).should('be.visible')
});

