Feature: Carbon Footprint Calculator Home Page

Background:
  Given I visit Carbon Footprint Calculator

  Scenario: Search the carbon footprint of your house with success
    Then I should see Get Started Form
    When I search by a number of people and zip code

  @validade_home_fields
  Scenario Outline: Validate the fields requiriments 
    When I search by <numberOfPeople> and <zipCode>
    Then I should see the <errorMessage>

Examples:
    | numberOfPeople | zipCode   | errorMessage                              |
    |      ""        | "00002"   |"Please enter a valid number of people."   |
    |      "2"       |   ""      |"Please enter a valid five-digit ZIP Code."|
    |      "2"       | "1234"    |"Please enter a valid five-digit ZIP Code."|
    |      "2"       | "1000002" |"Please enter a valid five-digit ZIP Code."|
    |      "2"       | "111111"  |"We could not find your ZIP code in our database. Please try again, or you may continue using the calculator with a default value. Using the default will give you average estimates."|   