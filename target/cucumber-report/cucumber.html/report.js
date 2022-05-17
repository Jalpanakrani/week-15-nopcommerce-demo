$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "computer page test",
  "description": "As a user I should be able to buy computer",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4773385000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "# Background: user is on homepage page"
    },
    {
      "line": 7,
      "value": "#  @smoke @regression"
    }
  ],
  "line": 9,
  "name": "verify User Should Navigate To Computer Page SuccessfullyWhen    I click on Computers tab",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfullywhen----i-click-on-computers-tab",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I should be navigated to computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iShouldBeNavigatedToComputerPage()"
});
formatter.result({
  "duration": 127319200,
  "status": "passed"
});
formatter.after({
  "duration": 772974100,
  "status": "passed"
});
formatter.before({
  "duration": 2851708000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on home page for shopping",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be navigated to desktop page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Desktop Text should be visible",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomePageForShopping()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 597428300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 490015500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldBeNavigatedToDesktopPage()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.desktopTextShouldBeVisible()"
});
formatter.result({
  "duration": 36124600,
  "status": "passed"
});
formatter.after({
  "duration": 771930700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 21,
      "value": "#  @regression"
    }
  ],
  "line": 22,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-test;i-should-able-to-select-my-own-build-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on home page for shopping",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select desktop product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select processor \"\u003cProcessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select ram \"\u003cRAM\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select hdd \"\u003cHDD\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select os \"\u003cOS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select software \"\u003cSoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;",
  "rows": [
    {
      "cells": [
        "Processor",
        "RAM",
        "HDD",
        "OS",
        "Software"
      ],
      "line": 37,
      "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 38,
      "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 39,
      "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 40,
      "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2381619100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on home page for shopping",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select desktop product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomePageForShopping()"
});
formatter.result({
  "duration": 24900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 521216000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 511681000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectDesktopProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 826373100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 90347800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 74788200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 68279200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 58247800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 60555400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 42027400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerSteps.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 853086000,
  "status": "passed"
});
formatter.after({
  "duration": 775954700,
  "status": "passed"
});
formatter.before({
  "duration": 2309926800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on home page for shopping",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select desktop product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select os \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomePageForShopping()"
});
formatter.result({
  "duration": 43200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 604450200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 455396000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectDesktopProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 797659000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 47567900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 71308300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 86922100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 77264400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 72757400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 41489100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerSteps.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 284037400,
  "status": "passed"
});
formatter.after({
  "duration": 785451100,
  "status": "passed"
});
formatter.before({
  "duration": 2313473200,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on home page for shopping",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select desktop product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomePageForShopping()"
});
formatter.result({
  "duration": 70900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 548527800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 504436800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectDesktopProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 774830600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 50174900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 70682100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 69361200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 60220700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 76971400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 45494600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 17100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerSteps.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 291948400,
  "status": "passed"
});
formatter.after({
  "duration": 792553600,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2330397500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#  @smoke @regression"
    }
  ],
  "line": 6,
  "name": "User should navigate to the log in page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-the-log-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to log in page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 131500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 503338300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLogInPageSuccessfully()"
});
formatter.result({
  "duration": 32299000,
  "status": "passed"
});
formatter.after({
  "duration": 782985400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 11,
      "value": "#  @sanity @regression"
    }
  ],
  "line": 12,
  "name": "verify the error message with  invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with--invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-the-error-message-with--invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 22,
      "id": "login-test;verify-the-error-message-with--invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 23,
      "id": "login-test;verify-the-error-message-with--invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3003817200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify the error message with  invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 64800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 519165200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 80062600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 26
    }
  ],
  "location": "LoginSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 64137000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 464709500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 36898700,
  "status": "passed"
});
formatter.after({
  "duration": 803739300,
  "status": "passed"
});
formatter.before({
  "duration": 2217186200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify the error message with  invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 525967400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 75703800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "LoginSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 63432100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 414327100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 32409100,
  "status": "passed"
});
formatter.after({
  "duration": 777702500,
  "status": "passed"
});
formatter.before({
  "duration": 3088353000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify the error message with  invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 30500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 510947400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 85084800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 26
    }
  ],
  "location": "LoginSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 65357200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 425409700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 29249900,
  "status": "passed"
});
formatter.after({
  "duration": 766751200,
  "status": "passed"
});
formatter.before({
  "duration": 3003892800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "#  @regression"
    }
  ],
  "line": 27,
  "name": "User should login successfuly with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfuly-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I enter valid email \"nakranijalpa@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter valid password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Logout Button should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 23100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 533491600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nakranijalpa@gmail.com",
      "offset": 21
    }
  ],
  "location": "LoginSteps.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 79837600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 24
    }
  ],
  "location": "LoginSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 67349600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 419700900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 16700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.logoutButtonShouldBeDisplayed()"
});
formatter.result({
  "duration": 40134439200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-logout\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-09BGILIP\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d2061a4434a97efc5b8c0d83842519f6, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-logout\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\nakra\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49831}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49831/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d2061a4434a97efc5b8c0d83842519f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.LoginHomePage.logOutButonDisplayed(LoginHomePage.java:23)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.logoutButtonShouldBeDisplayed(LoginSteps.java:67)\r\n\tat ✽.And Logout Button should be displayed(login.feature:34)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 992887900,
  "status": "passed"
});
formatter.before({
  "duration": 2074045400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 36,
      "value": "#  @regression"
    }
  ],
  "line": 37,
  "name": "Verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter valid email \"nakranijalpa@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter valid password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should login successfully",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on logOut link",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should be able to see log in link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 41500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 489488400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nakranijalpa@gmail.com",
      "offset": 21
    }
  ],
  "location": "LoginSteps.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 79803400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 24
    }
  ],
  "location": "LoginSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 54566200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 427622100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 20062226200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-logout\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-09BGILIP\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b148f13ab05fa8499b71593a25febf40, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-logout\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\nakra\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49972}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49972/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b148f13ab05fa8499b71593a25febf40\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.LoginHomePage.clickOnLogOut(LoginHomePage.java:26)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iClickOnLogOutLink(LoginSteps.java:72)\r\n\tat ✽.And I click on logOut link(login.feature:44)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iShouldBeAbleToSeeLogInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 888027900,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "register Page test",
  "description": "\nAs user I want to register on nopcommerce website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2860527100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is on register page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home page for registration",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePageForRegistration()"
});
formatter.result({
  "duration": 90700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 502483500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#  @smoke"
    }
  ],
  "line": 12,
  "name": "verify User Should Navigate To Register Page Successfully",
  "description": "",
  "id": "register-page-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should be navigate to register page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should be able to see register text",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 407037800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldBeNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldBeAbleToSeeRegisterText()"
});
formatter.result({
  "duration": 28622800,
  "status": "passed"
});
formatter.after({
  "duration": 774412400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 17,
      "value": "#  @sanity"
    }
  ],
  "line": 18,
  "name": "verify That FirstName LastName Email Password And ConfirmPassword Fields Are Mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should get errror for first name field \"\u003cFnameEerrorMessage\u003e\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should get  error for last name field \"\u003cLnameErrorMessage\u003e\" message",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should get error for email field \"\u003cemilErrorMessage\u003e\" message",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should get error for password  field \"\u003cpasswordErrorMessage\u003e\" message",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should get  error for confirm password field \"\u003cConfirmPasswordErrorMessage\u003e\" message",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "FnameEerrorMessage",
        "LnameErrorMessage",
        "emilErrorMessage",
        "passwordErrorMessage",
        "ConfirmPasswordErrorMessage"
      ],
      "line": 26,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "First name is required.",
        "Last name is required.",
        "Email is required.",
        "Password is required.",
        "Password is required."
      ],
      "line": 27,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2287592700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is on register page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home page for registration",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePageForRegistration()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 511444700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 11500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify That FirstName LastName Email Password And ConfirmPassword Fields Are Mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should get errror for first name field \"First name is required.\" message",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should get  error for last name field \"Last name is required.\" message",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should get error for email field \"Email is required.\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should get error for password  field \"Password is required.\" message",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should get  error for confirm password field \"Password is required.\" message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 71439000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 42
    }
  ],
  "location": "RegisterSteps.iShouldGetErrrorForFirstNameFieldMessage(String)"
});
formatter.result({
  "duration": 37207900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 41
    }
  ],
  "location": "RegisterSteps.iShouldGetErrorForLastNameFieldMessage(String)"
});
formatter.result({
  "duration": 21674700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 36
    }
  ],
  "location": "RegisterSteps.iShouldGetErrorForEmailFieldMessage(String)"
});
formatter.result({
  "duration": 22463000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.iShouldGetErrorForPasswordFieldMessage(String)"
});
formatter.result({
  "duration": 23235200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 48
    }
  ],
  "location": "RegisterSteps.iShouldGetErrorForConfirmPasswordFieldMessage(String)"
});
formatter.result({
  "duration": 26921600,
  "status": "passed"
});
formatter.after({
  "duration": 766204600,
  "status": "passed"
});
formatter.before({
  "duration": 2334974500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is on register page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home page for registration",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePageForRegistration()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 515232900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 29900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 29,
      "value": "#  @regression"
    }
  ],
  "line": 30,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I select gender \"Female\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I Enter \"Jalpa\" FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Enter \"Nakrani\" LastName",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select \"30\" Day",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select \"November\"Month",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select \"1987\" Year",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter valid email \"nakranijalpa@gmail.com\" in email registration field  for register",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter valid password \"123456\" in password registration field for register",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter valid confirmpassword \"123456\" in confirmpassword field for register",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should creat account successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I should able to see Your registration completed message",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iSelectGenderFemale()"
});
formatter.result({
  "duration": 355200,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.demo.steps.RegisterSteps.iSelectGenderFemale() in file:/C:/Users/nakra/IdeaProjects/homework_week_15_project2/target/test-classes/\u0027 with pattern [^I select gender \"([^\"]*)\"$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Female]. \nStep: When I select gender \"Female\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa",
      "offset": 9
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nakrani",
      "offset": 9
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 10
    }
  ],
  "location": "RegisterSteps.iSelectDay(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "November",
      "offset": 10
    }
  ],
  "location": "RegisterSteps.iSelectMonth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1987",
      "offset": 10
    }
  ],
  "location": "RegisterSteps.iSelectYear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "nakranijalpa@gmail.com",
      "offset": 21
    }
  ],
  "location": "RegisterSteps.iEnterValidEmailInEmailRegistrationFieldForRegister(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 24
    }
  ],
  "location": "RegisterSteps.iEnterValidPasswordInPasswordRegistrationFieldForRegister(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterSteps.iShouldCreatAccountSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterSteps.iShouldAbleToSeeYourRegistrationCompletedMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 948658900,
  "status": "passed"
});
});