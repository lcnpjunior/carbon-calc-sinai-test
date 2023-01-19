const { When, Then, Step } = require("@badeball/cypress-cucumber-preprocessor");
import { homeEnergyPage } from '../pages/02-HomeEnergyPage'

const data = require('../../fixtures/complete-dollar-based.json')
const homeEnergyData = data.scenario01.homeEnergy

When("I select {string} as household's primary heating source", (primaryHeatingSource) => {
    homeEnergyPage.selectPrimaryHeatingSource(primaryHeatingSource)
});

When("I fill in the Home Energy Current Emissions with the average monthly bills dollar-based", () => {
    const emissions = homeEnergyData.emissions
    cy.log(emissions)
    homeEnergyPage.setNaturalGas(emissions.naturalGasTextInput, emissions.naturalGasSelectInput)
    homeEnergyPage.setElectricity(emissions.electricityTextInput, emissions.electricitySelectInput, emissions.electricityGreenTextInput)
    homeEnergyPage.setFuelOil(emissions.fuelTextInput, emissions.fuelSelectInput)
    homeEnergyPage.setPropane(emissions.propaneTextInput, emissions.propaneSelectInput)
});

When("I fill in the Home Energy Emissions Reductions", () => {
    const reductions = homeEnergyData.reductions
    homeEnergyPage.setHeatingColling(reductions.energyAC, reductions.energyHeat)
    homeEnergyPage.setLighting(reductions.lightsToReplace)
    homeEnergyPage.setPowerSourceSettings(reductions.pwrMgmtSelect, reductions.increaseGreenInput)
    homeEnergyPage.setWashingDrying(reductions.coldWaterSelect, reductions.loadsPerWeek, reductions.AirDrySelect, reductions.percentageAirDrySelect)
    homeEnergyPage.setEnergyStarProducts(reductions.fridgeSelect, reductions.furnaceSelect, reductions.windowSelect)
});

When("I fill in all fields from the Home Energy section", () => {
    Step(this, 'I fill in the Home Energy Current Emissions with the average monthly bills dollar-based')
    Step(this, 'I fill in the Home Energy Emissions Reductions')
});

Then("It shows the Estimated Annual Savings for Home Energy", () => {
    homeEnergyPage.validateCurrenctTotalEmissions(homeEnergyData.expectedResults.currentTotal)
    homeEnergyPage.validateNewTotalEmissions(homeEnergyData.expectedResults.newTotal)
    homeEnergyPage.validateNaturalGasEmissions(homeEnergyData.emissions)
});