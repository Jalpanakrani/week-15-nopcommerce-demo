
Feature: register Page test

  As user I want to register on nopcommerce website

  Background: User is on register page
    Given I am on home page for registration
    And  I click on register link
    Then I am on register page

#  @smoke
  Scenario: verify User Should Navigate To Register Page Successfully
    When I click on register link
    Then I should be navigate to register page successfully
    And  I should be able to see register text

#  @sanity
  Scenario Outline: verify That FirstName LastName Email Password And ConfirmPassword Fields Are Mandatory
    When I click on Register button
    Then I should get errror for first name field "<FnameEerrorMessage>" message
    And  I should get  error for last name field "<LnameErrorMessage>" message
    And  I should get error for email field "<emilErrorMessage>" message
    And  I should get error for password  field "<passwordErrorMessage>" message
    And  I should get  error for confirm password field "<ConfirmPasswordErrorMessage>" message
    Examples:
      | FnameEerrorMessage      | LnameErrorMessage      | emilErrorMessage   | passwordErrorMessage  | ConfirmPasswordErrorMessage |
      | First name is required. | Last name is required. | Email is required. | Password is required. | Password is required.       |

#  @regression
  Scenario: verify That User Should Create Account Successfully
    When I select gender "Female"
    And  I Enter "Jalpa" FirstName
    And  I Enter "Nakrani" LastName
    And  I select "30" Day
    And  I select "November"Month
    And  I select "1987" Year
    And  I enter valid email "nakranijalpa@gmail.com" in email registration field  for register
    And  I enter valid password "123456" in password registration field for register
    And  I enter valid confirmpassword "123456" in confirmpassword field for register
    And  I click on Register button
    Then I should creat account successfully
    And  I should able to see Your registration completed message
