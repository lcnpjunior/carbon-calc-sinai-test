const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { homeEnergyPage } from '../pages/02-HomeEnergyPage'

When("I select {string} as household's primary heating source", (primaryHeatingSource) => {
    homeEnergyPage.selectPrimaryHeatingSource(primaryHeatingSource)
});

When("I fill in the Home average monthly bills with dollar-based", () => {
    homeEnergyPage.fillInEnergyCurrenctEmissions()
});

When("I fill in the Home Emissions Reductions", () => {
    homeEnergyPage.fillInEnergyEmissionsReductions()
});

When("I fill in all fields from the Home Energy section", () => {
    homeEnergyPage.fillInEnergyCurrenctEmissions()    
    homeEnergyPage.fillInEnergyEmissionsReductions()    
});

Then("It shows the Estimated Annual Savings for Home Energy", () => {
    homeEnergyPage.validateNaturalGasEmissions()
});