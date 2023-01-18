import { constants } from '../../fixtures/constants'

class WastePage {

    selectWasteRecycleMaterialsCheckboxes(items){
		items.forEach(item => {
			cy.get('.waste-checkboxes')
            .first()
            .children()
            .children()
            .contains(item)
            .click()
		})	
    }

    selectWasteReductionCheckboxes(items){
		items.forEach(item => {
			cy.get('#wasteReductionRadios')
            .children()
            .children()
            .contains(item)
            .click()  			
		})  		          
    }

	validadeCurrenctRecycleEmissions(items){
		let wasteAlreadySaved = 0
		items.forEach(item => {
			wasteAlreadySaved += this.wasteSavings(numberOfPeople, item)
		})
		cy.get('.wasteAlreadySaved')
			.should('be.visible')
			.and('contain.text', Math.round(wasteAlreadySaved*-1).toLocaleString("en-US"))
	}

	validadeNewRecycleEmissions(items){
		let wasteWillSave = 0 
		items.forEach(item => {
			wasteWillSave += this.wasteSavings(numberOfPeople, item)
		})
		cy.get('.wasteWillSave')
			.should('be.visible')
			.and('contain.text', Math.round(wasteWillSave*-1).toLocaleString("en-US"))
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