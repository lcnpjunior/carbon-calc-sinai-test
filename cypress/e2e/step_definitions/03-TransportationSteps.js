const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { transportationPage } from '../pages/03-TransportationPage'

When("I fill in all fields from the Transportation section", () => {
    transportationPage.fillInVehiclesAverageEmissions()    
    transportationPage.fillInVehiclesReductionsAverage()    
});

When("It shows the Estimated Annual Savings for Transportation", () => {
    transportationPage.validateCurrentEstimdatedCOEmissions()
    transportationPage.validateEstimatedAnnualSavings()
});