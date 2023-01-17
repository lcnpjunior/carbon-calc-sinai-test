class WastePage {
 
    checkCurrenctRecycleMaterials(productName){
        cy.get('.waste-checkboxes')
            .first()
            .children()
            .children()
            .contains(productName)
            .click()
    }

    checkStartRecycleMaterials(productName){
        cy.get('#wasteReductionRadios')
            .children()
            .children()
            .contains(productName)
            .click()                    
    }

    wasteSavings(factor){
		let savings = 0;
		switch (factor) {
			case 0:
				savings = numPeople * g_NEWSPAPER_REDUCTION;
				break;
			case 1:
				savings = numPeople * g_GLASS_REDUCTION;
				break;
			case 2:
				savings = numPeople * g_PLASTIC_REDUCTION;
				break;
			case 3:
				savings = numPeople * g_METAL_REDUCTION;
				break;
			case 4:
				savings = numPeople * g_MAGAZINE_REDUCTION;
				break;
			default:
				break;
		}
		return savings;
    }
}
  
export const wastePage = new WastePage();