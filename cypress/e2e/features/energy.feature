Feature: Carbon Footprint Calculator Home Page

Background:
  Given I visit Carbon Footprint Calculator

  Scenario: Search the carbon footprint of your house with success
    Then I should see Get Started Form
    When I search by a number of people and zip code
    And I fill the energies sources of the current emissions from home energy
    And I fill the emissions reductions
    Then It shows the Annual CO2 Emissions Carbon Footprint for Home Energy