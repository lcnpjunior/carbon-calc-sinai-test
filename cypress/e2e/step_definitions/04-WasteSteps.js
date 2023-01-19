const { When, Then, Step } = require("@badeball/cypress-cucumber-preprocessor");
import { wastePage } from '../pages/04-WastePage'

const data = require('../../fixtures/complete-dollar-based.json')
const wasteData = data.scenario01.waste

When("I fill in all fields from then Waste section", () => {
    wastePage.selectWasteRecycleMaterialsCheckboxes(wasteData.selectWasteRecycleMaterials)    
    wastePage.selectWasteReductionCheckboxes(wasteData.selectWasteReduction)    
});

When("It shows the Estimated Annual Savings for Waste", () => {
    wastePage.validadeCurrenctRecycleEmissions(wasteData.selectWasteRecycleMaterials)
    wastePage.validadeNewRecycleEmissions(wasteData.selectWasteReduction)
});