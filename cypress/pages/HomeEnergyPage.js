class HomeEnergyPage {

  selectPrimaryHeatingSource(){
    cy.get('#primaryHeatingSource').select('Natural Gas')
  }
  setNaturalGas(naturalGasTextInput){
    cy.get('#naturalGasTextInput').type(naturalGasTextInput)
    cy.get('#naturalGasSelectInput').select('Dollars')
  }
  setElectricity(electricityTextInput){
    cy.get('#electricityTextInput').type(electricityTextInput)
    cy.get('#electricitySelectInput').select('Dollars')
  }
  setFuelOil(fuelTextInput){
    cy.get('#fuelTextInput').type(fuelTextInput)
    cy.get('#fuelSelectInput').select('Dollars')
  }
  setPropane(propaneTextInput){
    cy.get('#propaneTextInput').type(propaneTextInput)
    cy.get('#propaneSelectInput').select('Dollars')
  }
  fillInEnergyCurrenctEmissions(){
    this.selectPrimaryHeatingSource()
    this.setNaturalGas('23')
    this.setElectricity('44')
    this.setFuelOil('72')
    this.setPropane('37')
  }

  setHeatingColling(energyAC, energyHeat){
    cy.get('#energyAC').type(energyAC)
    cy.get('#energyHeat').type(energyHeat)
  }

  setLighting(lightsToReplace){
    cy.get('#lightsToReplace').type(lightsToReplace)
  }

  setPowerSourceSettings(loadsPerWeek){
    cy.get('#coldWaterSelect').select('Will Do')
    cy.get('#loadsPerWeek').type(loadsPerWeek)
  }

  setWashingDrying(energyAC){
    cy.get('#pwrMgmtSelect').select('Will Do')
    cy.get('#energyAC').type(energyAC)

    cy.get('#AirDrySelect').select('Will Do')
    cy.get('#percentageAirDrySelect').select('50% of my Laundry')
  }

  setEnergyStarProducts(){
    cy.get('#fridgeSelect').select('Will Do')
    cy.get('#furnaceSelect').select('Will Do')
    cy.get('#windowSelect').select('Will Do')
  }

  fillInEnergyEmissionsReductions(){
    this.setHeatingColling(10, 10)
    this.setLighting(2)
    this.setPowerSourceSettings(2)
    this.setWashingDrying(3)
    this.setEnergyStarProducts()
  }

}
  
export const homeEnergyPage = new HomeEnergyPage();