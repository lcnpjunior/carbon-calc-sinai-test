@energy
Feature: HomeEnergy - Household Carbon Footprint Calculator 

Background:
  Given I visit Carbon Footprint Calculator

  @ready
  Scenario: Calculate the Home Energy Carbon Footprint 
    Then I should see Get Started Form
    When I search by a number of people and zip code
    And I fill in the Current Emission fields from "Home Energy"
    And I fill the Emissions Reductions
    Then It shows the Estimated Annual Saving for "Home Energy"