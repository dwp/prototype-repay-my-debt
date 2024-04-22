/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  'email-address': 'sarah.phillips@example.com',
  'mobile-number': '07700 900457',
  'confirm-details-change': 'yes',
  'left-over-income':'100.00',

  'income-monthly':'0.00',
  'benefits':'0.00',
  'pension':'0.00',
  'other-income':'0.00',



  'housing':'0.00',
  'utilities':'0.00',
  'travel':'0.00',
  'pension-contributions':'0.00',
  'groceries':'0.00',
  'childcare-costs':'0.00',
  'personal-costs':'0.00',
  'communications':'0.00',
  'other-repayments':'0.00'

  // Insert values here

}
