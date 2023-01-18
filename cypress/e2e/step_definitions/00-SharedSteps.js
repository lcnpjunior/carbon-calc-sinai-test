const { When, Step } = require("@badeball/cypress-cucumber-preprocessor");

When("I fill in the all sections", () => {
    Step(this, `I fill in all fields from the Home Energy section`)
    Step(this, `It shows the Estimated Annual Savings for Home Energy`)

    Step(this, `I click on the "Transportation" menu option`)
    Step(this, `I fill in all fields from the Transportation section`)
    Step(this, `It shows the Estimated Annual Savings for Transportation`)

    Step(this, `I click on the "Waste" menu option`)
    Step(this, `I fill in all fields from then Waste section`)
    Step(this, `It shows the Estimated Annual Savings for Waste`)
});


When("I fill in the {string} and {string} sections", function (section1, section2) {
    Step(this, `I fill in all fields from the ${section1} section`)
    Step(this, `It shows the Estimated Annual Savings for ${section1}`)
    Step(this, `I click on the "${section2}" menu option`)
    Step(this, `I fill in all fields from then ${section2} section`)
    Step(this, `It shows the Estimated Annual Savings for ${section2}`)
});
