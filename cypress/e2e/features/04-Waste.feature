@waste
Feature: Waste - Household Carbon Footprint Calculator 

Background:
  Given I visit Carbon Footprint Calculator

  Scenario: Calculate the Home Waste Carbon Footprint     
    When I initiate the the calculation with "4" people and the "18410" zip code
      And I click on the "Waste" menu option 
      And I fill in all fields from then Waste section
    Then It shows the Estimated Annual Savings for Waste