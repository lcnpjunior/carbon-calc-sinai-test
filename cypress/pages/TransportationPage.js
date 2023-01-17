class TransportationPage {
  
    setVehiclesQtd(numVehiclesInput){
        cy.get('#numVehiclesInput').select(numVehiclesInput)
    }

    setCurrentMaintenance(numVehiclesInput){
        cy.get('#maintCurrentSelect').select(numVehiclesInput)
    }

    setVehiclesAverage(vehiclesEmissions){        
        vehiclesEmissions.forEach((el, index) => {
            cy.get(`#vehicle${index+1}Miles`).type(el.vehicleMiles)
            cy.get(`#vehicle${index+1}Select`).select(el.vehicleSelec)
            cy.get(`#vehicle${index+1}GasMileage`).type(el.vehicleGasMileage)
        })
    }

    setReductionMaintenance(maintReduceSelect){
        cy.get('#maintReduceSelect').select(maintReduceSelect)
    }

    setReductionAverage(vehiclesEmissionsReduction){
        vehiclesEmissionsReduction.forEach((el, index) => {
            cy.get(`#reduceMilesInput${index+1}`).type(el.reduceMilesInput)
            cy.get(`#reduceMilesSelect${index+1}`).select(el.reduceMilesSelect)
            cy.get(`#replaceVehicleInput${index+1}`).type(el.replaceVehicleInput)
        })
    }

    fillInTransportationCurrentEmissions(){
        this.setVehiclesQtd(3)
        this.setCurrentMaintenance('Already Done')
        this.setVehiclesAverage(            
            [
                {
                    'vehicleMiles': '100',
                    'vehicleSelec': 'Per Year',
                    'vehicleGasMileage': '21.4'
                },
                {
                    'vehicleMiles': '100',
                    'vehicleSelec': 'Per Year',
                    'vehicleGasMileage': '21.4'
                },
                {
                    'vehicleMiles': '100',
                    'vehicleSelec': 'Per Year',
                    'vehicleGasMileage': '21.4'
                }
            ]            
        )
    }

    fillInTransportationEmissionsReductions(){
        this.setReductionAverage(
            [
                {
                    'reduceMilesInput': '10',
                    'reduceMilesSelect': 'Per Year',
                    'replaceVehicleInput': '23.4'
                },
                {
                    'reduceMilesInput': '10',
                    'reduceMilesSelect': 'Per Year',
                    'replaceVehicleInput': '23.4'
                },
                {
                    'reduceMilesInput': '10',
                    'reduceMilesSelect': 'Per Year',
                    'replaceVehicleInput': '23.4'
                }
            ] 
        )
    }

}
  
export const transportationPage = new TransportationPage();