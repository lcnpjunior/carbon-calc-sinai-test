//import { recurse } from 'cypress-recurse'

class HomePage {
  
    getStarted(numberOfPeople,zipCode){
      
      if(numberOfPeople!= '')
        cy.get('#ppl-in-household-input').type(numberOfPeople)    

      if(zipCode!= '') 
        cy.get('#zip-code-input').clear().type(zipCode, {force: true}).should("have.value", zipCode)
        // recurse(
        //   // the commands to repeat, and they yield the input element
        //   () => cy.get('#zip-code-input').clear().type(zipCode),
        //   // the predicate takes the output of the above commands
        //   // and returns a boolean. If it returns true, the recursion stops
        //   ($input) => $input.val() === zipCode,
        // )
        //   // the recursion yields whatever the command function yields
        //   // and we can confirm that the text was entered correctly
        //   .should('have.value', zipCode)

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