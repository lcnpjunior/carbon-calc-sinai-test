import { constants } from '../../fixtures/constants'

class HomeEnergyPage {

  selectPrimaryHeatingSource(primaryHeatingSelect){
    cy.get('#primaryHeatingSource').select(primaryHeatingSelect)
  }
  setNaturalGas(naturalGasTextInput, selectedType=''){
    cy.get('#naturalGasTextInput').type(naturalGasTextInput)
    if(selectedType!='')
      cy.get('#naturalGasSelectInput').select(selectedType)
  }
  setElectricity(electricityTextInput, selectedType='', electricityGreenTextInput=0,){
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

  // fillInEnergyCurrenctEmissions(){       
  //   this.setNaturalGas(homeEnergyData.naturalGas.dollars.avg_value)
  //   this.setElectricity(homeEnergyData.eletricity.dollars.avg_value)
  //   this.setFuelOil(homeEnergyData.fuelOil.dollars.avg_value)
  //   this.setPropane(homeEnergyData.propane.dollars.avg_value)
  // }

  setHeatingColling(energyAC, energyHeat){
    cy.get('#energyAC').type(energyAC)
    cy.get('#energyHeat').type(energyHeat)
  }

  setLighting(lightsToReplace){
    cy.get('#lightsToReplace').type(lightsToReplace)
  }

  setPowerSourceSettings(pwrMgmtOption='Choose One', increaseGreenInput){
    cy.get('#pwrMgmtSelect').select(pwrMgmtOption)
    cy.get('#increaseGreenInput').type(increaseGreenInput)
  }

  setWashingDrying(coldWaterOption, loadsPerWeek, airDryOption, percentageAirDryOption){
    cy.get('#coldWaterSelect').select(coldWaterOption)
    cy.get('#loadsPerWeek').type(loadsPerWeek)

    cy.get('#AirDrySelect').select(airDryOption)
    cy.get('#percentageAirDrySelect').select(percentageAirDryOption)
  }

  setEnergyStarProducts(fridgeOption, furnaceOption, windowOption){
    cy.get('#fridgeSelect').select(fridgeOption)
    cy.get('#furnaceSelect').select(furnaceOption)
    cy.get('#windowSelect').select(windowOption)
  }

  validateCurrenctTotalEmissions(currentTotal){     
    cy.get('.totalEmissions').should('be.visible').and('contains.text', currentTotal)
  }

  validateNewTotalEmissions(newTotal){     
    cy.get('.newEmissionTotal').should('be.visible').and('contains.text', newTotal)
  }

  // fillInEnergyEmissionsReductions(reductionsData){
  //   this.setHeatingColling(reductionsData.energyAC, reductionsData.energyHeat)
  //   this.setLighting(reductionsData.lightsToReplace)
  //   this.setPowerSourceSettings(reductionsData.pwrMgmtSelect, reductionsData.increaseGreenInput)
  //   this.setWashingDrying(reductionsData.coldWaterSelect, reductionsData.loadsPerWeek, reductionsData.AirDrySelect, reductionsData.percentageAirDrySelect)
  //   this.setEnergyStarProducts(reductionsData.fridgeSelect, reductionsData.furnaceSelect, reductionsData.windowSelect)
  // }

  validateNaturalGasEmissions(homeEnergyEmissions){
    let naturalGasEmissions = this.calcNaturalGasEmissions(homeEnergyEmissions.naturalGasTextInput, homeEnergyEmissions.naturalGasSelectInput)    
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