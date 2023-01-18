import { constants } from '../../fixtures/constants'
import * as homeEnergyData  from '../../fixtures/homeEnergyData.json'

class HomeEnergyPage {

  selectPrimaryHeatingSource(primaryHeatingSelect){
    cy.get('#primaryHeatingSource').select(primaryHeatingSelect)
  }
  setNaturalGas(naturalGasTextInput, selectedType=''){
    cy.get('#naturalGasTextInput').type(naturalGasTextInput)
    if(selectedType!='')
      cy.get('#naturalGasSelectInput').select(selectedType)
  }
  setElectricity(electricityTextInput, electricityGreenTextInput=0, selectedType=''){
    cy.get('#electricityTextInput').type(electricityTextInput)
    if(selectedType!='')
      cy.get('#electricitySelectInput').select(selectedType)
    cy.get('#electricityGreenTextInput').type(electricityGreenTextInput)
  }
  setFuelOil(fuelTextInput, selectedType=''){
    cy.get('#fuelTextInput').type(fuelTextInput)
    if(selectedType!='')
      cy.get('#fuelSelectInput').select(selectedType)
  }
  setPropane(propaneTextInput, selectedType=''){
    cy.get('#propaneTextInput').type(propaneTextInput)
    if(selectedType!='')
      cy.get('#propaneSelectInput').select(selectedType)
  }

  fillInEnergyCurrenctEmissions(){       
    this.setNaturalGas(homeEnergyData.naturalGas.dollars.avg_value)
    this.setElectricity(homeEnergyData.eletricity.dollars.avg_value)
    this.setFuelOil(homeEnergyData.fuelOil.dollars.avg_value)
    this.setPropane(homeEnergyData.propane.dollars.avg_value)
  }

  setHeatingColling(energyAC, energyHeat){
    cy.get('#energyAC').type(energyAC)
    cy.get('#energyHeat').type(energyHeat)
  }

  setLighting(lightsToReplace){
    cy.get('#lightsToReplace').type(lightsToReplace)
  }

  setPowerSourceSettings(increaseGreenInput, choose='Will Do'){
    cy.get('#pwrMgmtSelect').select(choose)
    cy.get('#increaseGreenInput').type(increaseGreenInput)
  }

  setWashingDrying(loadsPerWeek, choose1='Will Do', choose2='Will Do'){
    cy.get('#coldWaterSelect').select(choose1)
    cy.get('#loadsPerWeek').type(loadsPerWeek)

    cy.get('#AirDrySelect').select(choose2)
    cy.get('#percentageAirDrySelect').select('50% of my Laundry')
  }

  setEnergyStarProducts(choose1='Will Do', choose2='Will Do', choose3='Will Do'){
    cy.get('#fridgeSelect').select(choose1)
    cy.get('#furnaceSelect').select(choose2)
    cy.get('#windowSelect').select(choose3)
  }

  fillInEnergyEmissionsReductions(){
    this.setHeatingColling(10, 10)
    this.setLighting(2)
    this.setPowerSourceSettings(2)
    this.setWashingDrying(3)
    this.setEnergyStarProducts()
  }

  validateNaturalGasEmissions(){
    let naturalGasEmissions = this.calcNaturalGasEmissions(homeEnergyData.naturalGas.dollars.avg_value)    
    cy.get('.naturalGas .green-lb-total').should('be.visible').and('contains.text', naturalGasEmissions.toLocaleString("en-US"))
  }

  calcNaturalGasEmissions(naturalGasInput, naturalGasSelected="Dollars") {
    let currentNatGasEmission = 0;
    if (naturalGasSelected == "Dollars") {
      currentNatGasEmission = (naturalGasInput / constants.g_AVG_NAT_GAS_PRICE_PER_THOUSAND_CUBIC_FEET) * constants.g_NAT_GAS_CUBIC_FEET_EMISSIONS_FACTOR * constants.g_NUM_MONTHS_PER_YEAR;
    }
    else if (naturalGasSelected == "Thousand Cubic Feet") {
      currentNatGasEmission = constants.g_NAT_GAS_CUBIC_FEET_EMISSIONS_FACTOR * naturalGasInput * constants.g_NUM_MONTHS_PER_YEAR;
    }
    else if (naturalGasSelected == "Therms") {
      currentNatGasEmission = constants.g_NAT_GAS_THERMS_EMISSIONS_FACTOR * naturalGasInput * constants.g_NUM_MONTHS_PER_YEAR;
    }
    return Math.round(currentNatGasEmission)
	}


  // validateEletricEmissions(){
  //   let eletricEmissions = this.calcEletricEmissions(homeEnergyData.eletricity.dollars.avg_value)    
  //   cy.get('.electricity .green-lb-total').should('be.visible').and('contains.text', eletricEmissions.toLocaleString("en-US"))
  // }

	// calcEletricEmissions(electricityInput, electricitySelectInput="Dollars") {
	// 		let currentElectricityEmission = 0 
  //     if (electricitySelectInput == "Dollars") {
  //       currentElectricityEmission = (electricityInput / constants.g_AVG_ELEC_PRICE_PER_KILOWATT) * constants.g_eFactorValue * constants.g_NUM_MONTHS_PER_YEAR;
  //     }
  //     else if (electricitySelectInput == "kWh") {
  //       currentElectricityEmission = electricityInput * constants.g_eFactorValue * constants.g_NUM_MONTHS_PER_YEAR;
  //     }		
  //     return Math.round(currentElectricityEmission)		
	// }

}
  
export const homeEnergyPage = new HomeEnergyPage();