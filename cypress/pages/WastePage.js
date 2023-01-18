import { constants } from '../support/constants'

export let wasteAlreadySaved = 0
export let wasteWillSave = 0 

class WastePage {

    selectWasteRecycleMaterialsCheckboxes(items){
		items.forEach(item => {
			cy.get('.waste-checkboxes')
            .first()
            .children()
            .children()
            .contains(item)
            .click()
			wasteAlreadySaved += this.wasteSavings(3, item)
		})
		cy.log(Math.round(wasteAlreadySaved))
    }

    selectWasteReductionCheckboxes(items){
		items.forEach(item => {
			cy.get('#wasteReductionRadios')
            .children()
            .children()
            .contains(item)
            .click()  
			wasteWillSave += this.wasteSavings(3, item)
		})  
		cy.log(Math.round(wasteWillSave))                
    }

	validadeCurrenctRecycleEmissions(){
		cy.get('.wasteAlreadySaved')
			.should('be.visible')
			.and('contain.text', Math.round(wasteAlreadySaved*-1).toString())
	}

	validadeNewRecycleEmissions(){
		cy.get('.wasteWillSave')
			.should('be.visible')
			.and('contain.text', Math.round(wasteWillSave*-1).toString())
	}



    wasteSavings(numPeople, item){
		let savings = 0;
		switch (item) {
			case 'newspaper':
				savings = numPeople * constants.g_NEWSPAPER_REDUCTION;
				break;
			case 'glass':
				savings = numPeople * constants.g_GLASS_REDUCTION;
				break;
			case 'plastic':
				savings = numPeople * constants.g_PLASTIC_REDUCTION;
				break;
			case 'aluminum & steel cans':
				savings = numPeople * constants.g_METAL_REDUCTION;
				break;
			case 'magazines':
				savings = numPeople * constants.g_MAGAZINE_REDUCTION;
				break;
			default:
				break;
		}
		return savings;
    }
}
  
export const wastePage = new WastePage();