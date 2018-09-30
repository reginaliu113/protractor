#features/test.feature
Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given I go to "http://www.protractortest.org/#/"
        When I click on view button
        Then Url should be equal to "https://github.com/angular/protractor"