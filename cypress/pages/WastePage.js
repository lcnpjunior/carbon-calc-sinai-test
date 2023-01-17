class WastePage {
 
    checkCurrenctRecycleMaterials(){
        cy.get('.waste-checkboxes').children().children().contains('aluminum & steel cans').check()
    }

    checkStartRecycleMaterials(){
        cy.get('#wasteReductionRadios').children().children().contains('plastic').check()
    }
}
  
export const wastePage = new WastePage();