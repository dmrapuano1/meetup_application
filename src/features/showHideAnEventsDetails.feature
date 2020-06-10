Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default
Given the events list has loaded
When the event is displayed to the UI
Then the UI displays the event collapsed by default

Scenario: User can expand an event to see its details
Given the event display is collapsed
When the user clicks the expand button
Then the UI displays the event expanded

Scenario: User can collapse an event to hide its details
Given the event display is expanded
When the user clicks the minimize button
Then the UI displays the event collapsed
