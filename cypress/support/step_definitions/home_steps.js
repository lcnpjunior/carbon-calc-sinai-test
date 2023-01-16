const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import {homePage} from '../../pages/HomePage'

When("I visit Carbon Footprint Calculator", () => {
  cy.visit("/");
});

Then("I should see Get Started Form", () => {
  cy.get("#get-started").should("be.visible")
});

When("I search by a number of people and zip code", () => {
  homePage.getStarted(3, '00002')
});

When("I search by {string} and {string}", function (numerOfPeople, zipCode) {
  homePage.getStarted(numerOfPeople, zipCode)
});

Then("I should see the {string}", function (errorMessage) {
  homePage.checkErrorMessage(errorMessage)
});

