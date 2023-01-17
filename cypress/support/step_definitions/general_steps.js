const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { homeEnergyPage } from '../../pages/HomeEnergyPage'
import { transportationPage } from '../../pages/TransportationPage'


When("I click on the {string} menu option", (menuName) => {    
    cy.get('h2').contains(menuName, { timeout: 100000 }).should('be.visible').click()
});

When("I fill in the Current Emission fields from {string}", (menuName) => {
    switch (menuName) {
        case 'Home Energy':
            homeEnergyPage.fillInEnergyCurrenctEmissions()
            homeEnergyPage.fillInEnergyEmissionsReductions()    
        break;
        case 'Transportation':
            transportationPage.fillInTransportationCurrentEmissions()
            transportationPage.fillInTransportationEmissionsReductions()
        break;
    }
});

When("And I fill the Emissions Reductions", (menuName) => {
    
});

Then("It shows the Estimated Annual Saving for {string}", (menuName) => {
    
});
