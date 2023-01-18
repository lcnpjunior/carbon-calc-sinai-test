import { constants } from '../../fixtures/constants'
import * as vehicleData  from '../../fixtures/vehicleData.json'

class TransportationPage {
  
    fillInVehiclesQtd(numVehiclesInput){
        cy.get('#numVehiclesInput').select(numVehiclesInput)
    }

    selectVehicleCurrentMaintenance(numVehiclesInput){
        cy.get('#maintCurrentSelect').select(numVehiclesInput)
    }

    fillInVehiclesAverageEmissions(){   
        this.fillInVehiclesQtd(vehicleData.vehiclesCurrentEmissionsList.length)
        this.selectVehicleCurrentMaintenance('Already Done')     
        vehicleData.vehiclesCurrentEmissionsList.forEach((el, index) => {
            cy.get(`#vehicle${index+1}Miles`).type(el.vehicleMiles)
            cy.get(`#vehicle${index+1}Select`).select(el.vehicleSelec)
            cy.get(`#vehicle${index+1}GasMileage`).type(el.vehicleGasMileage)
        })
    }

    selectVehicleReductionMaintenance(maintReduceSelect){
        cy.get('#maintReduceSelect').select(maintReduceSelect)
    }

    fillInVehiclesReductionsAverage(){
        vehicleData.vehiclesEmissionsReductionsList.forEach((el, index) => {
            cy.get(`#reduceMilesInput${index+1}`).type(el.reduceMilesInput)
            cy.get(`#reduceMilesSelect${index+1}`).select(el.reduceMilesSelect)
            cy.get(`#replaceVehicleInput${index+1}`).type(el.replaceVehicleInput)
        })
    }

    validateCurrentEstimdatedCOEmissions(){
        vehicleData.vehiclesCurrentEmissionsList.forEach((el, index)=> {
            let coEmission = this.calcVehicleExhaust(el.vehicleMiles, el.vehicleGasMileage)
            cy.get(`.vehicle${index+1}Co2`).should('be.visible').and('contain.text', coEmission.toLocaleString("en-US"))
        })
    }

    validateEstimatedAnnualSavings(){
        vehicleData.vehiclesEmissionsReductionsList.forEach((el, index)=> {

            let calcVehicleExhaustSaving = this.calcVehicleExhaust(el.reduceMilesInput, el.replaceVehicleInput)
            cy.get(`.reduceMilesVehicle${index+1}Co2`).should('be.visible').and('contain.text', calcVehicleExhaustSaving.toLocaleString("en-US")) 

            let calcMilesSavings = this.calcMilesSavings(el.reduceMilesInput)
            cy.get(`.reduceMilesVehicle${index+1}Dollars`).should('be.visible').and('contain.text', calcMilesSavings.toLocaleString("en-US")) 
            
            let calcMilesPGallonSavingCosts = this.calcMilesPGallonSavingCosts(vehicleData.vehiclesCurrentEmissionsList[index].vehicleMiles, vehicleData.vehiclesCurrentEmissionsList[index].vehicleGasMileage, el.replaceVehicleInput)

            cy.get(`.replaceVehicle${index+1}Dollars`).should('be.visible').and('contain.text', calcMilesPGallonSavingCosts.toLocaleString("en-US"))
            
            let calcVehicleExhausSavingCO = this.calcVehicleExhausSavingCO(vehicleData.vehiclesCurrentEmissionsList[index].vehicleMiles, vehicleData.vehiclesCurrentEmissionsList[index].vehicleGasMileage, el.replaceVehicleInput)
            cy.get(`.replaceVehicle${index+1}Co2`).should('be.visible').and('contain.text', calcVehicleExhausSavingCO.toLocaleString("en-US"))
        })
    }

    calcVehicleExhaust(miles,milesPerGallon){
		let exhaust=0;
		exhaust = miles / milesPerGallon * constants.g_CO2_EMITTED_PER_GALLON_OF_GASOLINE * constants.g_NONCO2_EMITTED_PER_GALLON_OF_GASOLINE;		
		if (isNaN(exhaust)) {
			exhaust = 0;
		}		
		return Math.round(exhaust);
	}

    calcVehicleCost(miles,milesPerGallon){
		let cost=0;
		// convert miles per week to miles per year first
		cost = miles / milesPerGallon * constants.g_AVG_GAS_PRICE_PER_GALLON;
		return Math.round(cost);
	}

    calcMilesSavings(newMiles){
        let revMiles = newMiles * constants.g_AVG_COST_PER_MILE;  
        return Math.round(revMiles);
    }

    calcMilesPGallonSavingCosts(miles, milesPerGallon, newmilesPerGallon){
        let v1 = this.calcVehicleCost(miles,milesPerGallon)
        let v2 = this.calcVehicleCost(miles,newmilesPerGallon)
        return Math.round(v1-v2)
    }

    calcVehicleExhausSavingCO(miles, milesPerGallon, newmilesPerGallon){
        let v1 = this.calcVehicleExhaust(miles,milesPerGallon)
        let v2 = this.calcVehicleExhaust(miles,newmilesPerGallon)
        return Math.round(v1-v2)
    }

}
  
export const transportationPage = new TransportationPage();