@e2e @regression @ci
Feature: Household Carbon Footprint Calculator 

Background:
  Given I visit Carbon Footprint Calculator
  Then I should see Get Started Form
  @all_sections @ready
  Scenario: Calculate Household Carbon Footprint - Complete All sections
    When I initiate the the calculation with "4" people and the "18410" zip code
      And I select "Natural Gas" as household's primary heating source
      And I fill in the all sections
    Then I click on View Your Report button and then I can check my Household Carbon Footprint Report
    And I see the message 'Congratulations! You have completed all the calculator sections.' 

  @home_section @waste_section @ready
  Scenario: Calculate Household Carbon Footprint - Complete Energy and Waste sections    
    When I initiate the the calculation with "3" people and the "66160" zip code
      And I select "Natural Gas" as household's primary heating source
      And I fill in the "Home Energy" and "Waste" sections    
    Then I click on View Your Report button and then I can check my Household Carbon Footprint Report
    And I see the message 'Make a selection in all calculator sections and fields to improve your results.' 