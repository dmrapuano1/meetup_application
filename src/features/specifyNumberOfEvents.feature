Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user hasn’t specified a number of events to display
When the events page loads
Then 32 events will display by default

Scenario: User can change the number of events they want to see
Given the application is displaying events
When the user edits the number of events to display
Then the entered number of events will display