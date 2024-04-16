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

function expenditure() {
  var numOne = {{ data['housing'] }};
  var numTwo = {{ data['utilities'] }};
  var numThree = {{ data['travel'] }};
  var numFour = {{ data['pension-contributions'] }};
  var numFive = {{ data['groceries'] }};
  var numSix = {{ data['childcare-costs'] }};
  var numSeven = {{ data['personal-costs'] }};
  var numEight = {{ data['communications'] }};
  var numNine = {{ data['other-repayments'] }};



  var sum = numOne+numTwo+numThree+numFour+numFive+numSix+numSeven+numEight+numNine;

  document.write(sum);

}
