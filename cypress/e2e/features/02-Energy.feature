@energy
Feature: HomeEnergy - Household Carbon Footprint Calculator 

Background:
  Given I visit Carbon Footprint Calculator

  @ready @dollar-based
  Scenario: Calculate the Home Energy Carbon Footprint - Dollar-Based
    When I initiate the the calculation with "4" people and the "18410" zip code
      And I select "Natural Gas" as household's primary heating source
      And I fill in the Home average monthly bills with dollar-based
      And I fill in the Home Emissions Reductions
    Then It shows the Estimated Annual Savings for Home Energy

  # Scenario: Calculate the Home Energy Carbon Footprint - Random Selected Input
  #   When I search by a number of people and zip code
  #     And I select "Natural Gas" as household's primary heating source
  #     And I fill in the average monthly bills with random select inputs
  #     And I fill the Heating & Cooling Reductions 
  #     And I fill the Lighting Reductions 
  #     And I fill the Power Source & Settings Reductions 
  #     And I fill the Washing & Drying Reductions 
  #     And I fill the ENERGY STAR Products Reductions 
  #   Then It shows the Estimated Annual Saving for "Home Energy"


  # @dollar_based
  # Examples:
  #       |naturalGas|naturalGasType|eletricity|eletricityType|greenEletricity|fuelOil|fuelOilType|propane|propaneType|
  #       |    23    |Dollars       |    44    |Dollars       |       0       |   72  |Dollars    |  37   |Dollars    |
    