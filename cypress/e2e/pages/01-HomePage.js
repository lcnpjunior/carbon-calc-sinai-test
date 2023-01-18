class HomePage {
  
    getStarted(numberOfPeople,zipCode){
      
      if(numberOfPeople!= '')
        cy.get('#ppl-in-household-input').type(numberOfPeople)    

      if(zipCode!= '') 
        cy.get('#zip-code-input').clear().type(zipCode, {force: true}).should("have.value", zipCode)
        
      cy.get('#get-started').click()
    }

    checkErrorMessage(errorMsg){
      cy.get('div[class=failMsg]', { timeout: 10000 })
        .should('be.visible')
        .and('contain', errorMsg)
    }

    clickOnContinue(nextPage){
      cy.get(`Continue to ${nextPage}`).click()
    }

  }
  
  export const homePage = new HomePage();