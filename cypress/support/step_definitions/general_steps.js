const { When, Then, Step } = require("@badeball/cypress-cucumber-preprocessor");
import { homeEnergyPage } from '../../pages/HomeEnergyPage'
import { transportationPage } from '../../pages/TransportationPage'
import { wastePage } from '../../pages/WastePage'

// cy.fixture('example').then(function (data) {
//     Cypress.env("calcData") = data
// })

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
        case 'Waste':
            wastePage.checkCurrenctRecycleMaterials('plastic')
            wastePage.checkStartRecycleMaterials('magazines')
        break;
        default:
        break;
    }
});

When("And I fill the Emissions Reductions", () => {
    return "pending";
});

Then("It shows the Estimated Annual Saving for {string}", () => {
    return "pending";
});

When("I fill in the {string}, {string} and, {string} sections", function (m1, m2, m3) {
    Step(this, `I fill in the Current Emission fields from "${m1}"`)
    Step(this, `I click on the "${m2}" menu option`)
    Step(this, `I fill in the Current Emission fields from "${m2}"`)
    Step(this, `I click on the "${m3}" menu option`)
    Step(this, `I fill in the Current Emission fields from "${m3}"`)
});


Then("I can check my Household Carbon Footprint Report", () => {
    cy.get('#view-full-report').contains('View Your Report').should('be.visible').click()
    cy.get('h1').contains('Your Household Carbon Footprint Report').should('be.visible')
});

Then("I see the message {string}", (msg) => {
    cy.get('div').contains(msg).should('be.visible')
});
