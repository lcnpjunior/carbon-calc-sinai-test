const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { transportationPage } from '../pages/03-TransportationPage'

const data = require('../../fixtures/complete-dollar-based.json')
const transportationData = data.scenario01.transportation

When("I fill in all fields from the Transportation section", () => {
    transportationPage.fillInVehiclesAverageEmissions(transportationData.vehiclesCurrentEmissionsList)    
    transportationPage.fillInVehiclesReductionsAverage(transportationData.vehiclesEmissionsReductionsList)    
});

When("It shows the Estimated Annual Savings for Transportation", () => {
    transportationPage.validateCurrentEstimdatedCOEmissions(transportationData.vehiclesCurrentEmissionsList)
    transportationPage.validateEstimatedAnnualSavings(transportationData.vehiclesEmissionsReductionsList)
});