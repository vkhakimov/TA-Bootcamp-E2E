Feature: Bootcamp E2E

    Background: I am on the home page
        Given I am on the home page
        When I refresh the browser page to close the promo banner

    Scenario Outline: Search bar
        When I enter the <value> into the search bar
        And I click on the Search button
        Then I should see at least one search result for <value>

    Examples:
      | value |
      | Windows     |

    Scenario: Internet shop logo button
        When I click on the Today's Best Deals tab
        And I click on the first internet shop logo
        Then I should see the main brand page opened