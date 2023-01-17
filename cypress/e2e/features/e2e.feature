@e2e @regression
Feature: Household Carbon Footprint Calculator 

Background:
  Given I visit Carbon Footprint Calculator

  Scenario: Calculate Household Carbon Footprint 
    Then I should see Get Started Form
    When I search by a number of people and zip code
    And click on the "Waste" menu option
    And I fill in the Current Emission fields from "Waste" 
    And I fill the Emissions Reductions
    Then It shows the Estimated Annual Saving for "Waste"