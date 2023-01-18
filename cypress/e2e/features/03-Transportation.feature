@transportation
Feature: Transportation - Household Carbon Footprint Calculator 

Background:
  Given I visit Carbon Footprint Calculator  

  @ready
  Scenario: Calculate the Transportation Carbon Footprint     
    When I initiate the the calculation with "4" people and the "18410" zip code
      And I click on the "Transportation" menu option 
      And I fill in all fields from the Transportation section
    Then It shows the Estimated Annual Savings for Transportation