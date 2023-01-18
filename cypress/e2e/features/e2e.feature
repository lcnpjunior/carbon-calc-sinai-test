@e2e @regression
Feature: Household Carbon Footprint Calculator 

Background:
  Given I visit Carbon Footprint Calculator

  # @all_sections @ready
  # Scenario: Calculate Household Carbon Footprint - Complete All sections
  #   Then I should see Get Started Form
  #   When I search by a number of people and zip code
  #   And I fill in the "Home Energy", "Transportation" and, "Waste" sections
  #   Then I can check my Household Carbon Footprint Report
  #   And I see the message 'Congratulations! You have completed all the calculator sections.' 

  @home @transportation @ready
  Scenario: Calculate Household Carbon Footprint - Complete Energy and Transportation sections
    Then I should see Get Started Form
    When I search by a number of people and zip code
    And I fill in the all sections
    Then I can check my Household Carbon Footprint Report
    And I see the message 'Make a selection in all calculator sections and fields to improve your results.' 

  # Scenario: Calculate Household Carbon Footprint 
  #   Then I should see Get Started Form
  #   When I search by a number of people and zip code
  #   And I fill in the "Home Energy", "Transportation" and, "Waste" sections
  #   Then I can check my Household Carbon Footprint Report        
