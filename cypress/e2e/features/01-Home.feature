@home
Feature: Household Carbon Footprint Calculator Home Page
 
  @home_success @smoke
  Scenario: Get started with success
    Given I visit Carbon Footprint Calculator
    Then I should see Get Started Form
    When I initiate the the calculation with "4" people and the "18410" zip code

  @validade_home_fields
  Scenario Outline: Validate home page fields requiriments 
    Given I visit Carbon Footprint Calculator
    When I initiate the the calculation with <numberOfPeople> people and the <zipCode> zip code
    Then I should see the error <message>
Examples:
    | numberOfPeople | zipCode   | message                                   |
    |      ""        | "00002"   |"Please enter a valid number of people."   |
    |      "2"       |   ""      |"Please enter a valid five-digit ZIP Code."|
    |      "2"       | "1234"    |"Please enter a valid five-digit ZIP Code."|
    |      "2"       | "1000002" |"Please enter a valid five-digit ZIP Code."|
    |      "2"       | "111111"  |"We could not find your ZIP code in our database. Please try again, or you may continue using the calculator with a default value. Using the default will give you average estimates."|   