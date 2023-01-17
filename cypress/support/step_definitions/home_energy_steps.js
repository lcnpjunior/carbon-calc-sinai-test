const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { homeEnergyPage } from '../../pages/HomeEnergyPage'

When("I fill the energies sources of the current emissions from home energy", () => {
    homeEnergyPage.fillInEnergyCurrenctEmissions()
});

When("I fill the emissions reductions", () => {
    homeEnergyPage.fillInEnergyEmissionsReductions()
});

Then("It shows the Annual CO2 Emissions Carbon Footprint for Home Energy", () => {
    
});