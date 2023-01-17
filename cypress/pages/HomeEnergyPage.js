
class HomeEnergyPage {

  selectPrimaryHeatingSource(){
    cy.get('#primaryHeatingSource').select('Natural Gas')
  }
  setNaturalGas(input){
    cy.get('#naturalGasTextInput').type(input)
    cy.get('#naturalGasSelectInput').select('Dollars')
  }
  setElectricity(input){
    cy.get('#electricityTextInput').type(input)
    cy.get('#electricitySelectInput').select('Dollars')
  }
  setFuelOil(input){
    cy.get('#fuelTextInput').type(input)
    cy.get('#fuelSelectInput').select('Dollars')
  }
  setPropane(input){
    cy.get('#propaneTextInput').type(input)
    cy.get('#propaneSelectInput').select('Dollars')
  }
  fillInEnergiesSources(){
    this.selectPrimaryHeatingSource()
    this.setNaturalGas('23')
    this.setElectricity('44')
    this.setFuelOil('72')
    this.setPropane('37')
  }

  setHeatingColling(input, input2){
    cy.get('#energyAC').type(input)
    cy.get('#energyHeat').type(input2)
  }

  setLighting(input){
    cy.get('#lightsToReplace').type(input)
  }

  setPowerSourceSettings(input){
    cy.get('#coldWaterSelect').select('Will Do')
    cy.get('#loadsPerWeek').type(input)
  }

  setWashingDrying(input){
    cy.get('#pwrMgmtSelect').select('Will Do')
    cy.get('#energyAC').type(input)

    cy.get('#AirDrySelect').select('Will Do')
    cy.get('#percentageAirDrySelect').select('50% of my Laundry')
  }

  setEnergyStarProducts(){
    cy.get('#fridgeSelect').select('Will Do')
    cy.get('#furnaceSelect').select('Will Do')
    cy.get('#windowSelect').select('Will Do')
  }

  fillInReduceYourEmissions(){
    this.setHeatingColling(10, 10)
    this.setLighting(2)
    this.setPowerSourceSettings(2)
    this.setWashingDrying(3)
    this.setEnergyStarProducts()
  }



}
  
export const homeEnergyPage = new HomeEnergyPage();