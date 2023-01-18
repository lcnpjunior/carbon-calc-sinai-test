const { When, Then, Step } = require("@badeball/cypress-cucumber-preprocessor");
import { wastePage } from '../pages/04-WastePage'

When("I fill in all fields from then Waste section", () => {
    wastePage.selectWasteRecycleMaterialsCheckboxes(['plastic', 'magazines'])    
    wastePage.selectWasteReductionCheckboxes(['glass'])    
});

When("It shows the Estimated Annual Savings for Waste", () => {
    wastePage.validadeCurrenctRecycleEmissions(['plastic', 'magazines'])
    wastePage.validadeNewRecycleEmissions(['glass'])
});