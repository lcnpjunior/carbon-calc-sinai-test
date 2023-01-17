@transportation
Feature: Transportation - Household Carbon Footprint Calculator 

Background:
  Given I visit Carbon Footprint Calculator

  @ready
  Scenario: Calculate the Transportation Carbon Footprint 
    Then I should see Get Started Form
    When I search by a number of people and zip code
    And I click on the "Transportation" menu option 
    And I fill in the Current Emission fields from "Transportation"
    And I fill the Emissions Reductions
    Then It shows the Estimated Annual Saving for "Transportation"