//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/reminder-notification', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reminderAnswer = req.session.data['reminder-notification']

  // Check whether the variable matches a condition
  if (reminderAnswer == "yes-email"){
    // Send user to next page
    res.redirect('/scenario-37/reviewContact-email')
  } else if (reminderAnswer == "yes-email-mobile"){
    // Send user to next page
    res.redirect('/scenario-37/reviewContact')
  } else  if (reminderAnswer == "yes-mobile"){
    // Send user to next page
    res.redirect('/scenario-37/reviewContact-mobile')
  } else {
    // Send user to ineligible page
    res.redirect('/scenario-37/deductionSummary')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/reminder-notification-yes-no', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reminderAnswer = req.session.data['reminder-notification-yes-no']

  // Check whether the variable matches a condition
  if (reminderAnswer == "yes"){
    // Send user to next page
    res.redirect('/scenario-37/notification-reminder')
  } else {
    // Send user to ineligible page
    res.redirect('/scenario-37/deductionSummary')
  }

})

router.post('/reminder-notification-payment-setup-done', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reminderAnswer = req.session.data['reminder-notification-payment-setup-done']

  // Check whether the variable matches a condition
  if (reminderAnswer == "yes-email"){
    // Send user to next page
    res.redirect('/scenario-37-payment-setup-done/reviewContact-email')
  } else if (reminderAnswer == "yes-email-mobile"){
    // Send user to next page
    res.redirect('/scenario-37-payment-setup-done/reviewContact-confirm')
  } else  if (reminderAnswer == "yes-mobile"){
    // Send user to next page
    res.redirect('/scenario-37-payment-setup-done/reviewContact-mobile-confirm')
  } else {
    // Send user to ineligible page
    res.redirect('/scenario-37-payment-setup-done/deductionSummary')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/reminder-notification-payment-setup-done-yes-no', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reminderAnswer = req.session.data['reminder-notification-payment-setup-done-yes-no']

  // Check whether the variable matches a condition
  if (reminderAnswer == "yes"){
    // Send user to next page
    res.redirect('/scenario-37-payment-setup-done/notification-reminder')
  } else {
    // Send user to ineligible page
    res.redirect('/scenario-37-payment-setup-done/deductionSummary')
  }

})


router.post('/confirm-mobile-number', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var mobileChanged = req.session.data['confirm-details-change']

  // Check whether the variable matches a condition
  if (mobileChanged == "yes"){
    // Send user to next page
    res.redirect('/scenario-37-payment-setup-done/change-mobile-number')
  } else {
    // Send user to ineligible page
    res.redirect('/scenario-37-payment-setup-done/deductionSummary')
  }

})



router.post('/new-reminder-method', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var newReminder = req.session.data['new-reminder-method']

  // Check whether the variable matches a condition
  if (newReminder == "yes"){
    // Send user to next page
    res.redirect('/scenario-37/notification-reminder')
  } else {
    // Send user to ineligible page
    res.redirect('/scenario-37/deductionSummary-mobile-confirm')
  }

})

router.post('/amount-too-low', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var amountLow = req.session.data['newDeductedAmount']

  // Check whether the variable matches a condition
  if (amountLow <= 4){
    // Send user to next page
    res.redirect('/scenario-37/amount-too-low')
  } else {
    // Send user to ineligible page
    res.redirect('/scenario-37/OnBenReview-3a')
  }

})

router.post('/amount-too-low-payment-setup-done', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var amountLow = req.session.data['newDeductedAmount-setupDone']

  // Check whether the variable matches a condition
  if (amountLow <= 4){
    // Send user to next page
    res.redirect('/scenario-37-payment-setup-done/amount-too-low')
  } else {
    // Send user to ineligible page
    res.redirect('/scenario-37-payment-setup-done/OnBenReview-3')
  }

})

//version-38 forms

router.post('/v-38/amount-too-low', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var amountLow = req.session.data['newDeductedAmount']

  // Check whether the variable matches a condition
  if (amountLow <= 4){
    // Send user to next page
    res.redirect('/version-38/on-benefit-no-payments-taken/amount-too-low')
  } else {
    // Send user to ineligible page
    res.redirect('/version-38/on-benefit-no-payments-taken/OnBenReview-3a')
  }

})

router.post('/v-38/amount-too-low-payment-setup-done', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var amountLow = req.session.data['newDeductedAmount-setupDone']

  // Check whether the variable matches a condition
  if (amountLow <= 4){
    // Send user to next page
    res.redirect('/version-38/on-benefit-payments-taken/amount-too-low')
  } else {
    // Send user to ineligible page
    res.redirect('/version-38/on-benefit-payments-taken/OnBenReview-3')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/v-38/reminder-notification-yes-no', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reminderAnswer = req.session.data['reminder-notification-yes-no']

  // Check whether the variable matches a condition
  if (reminderAnswer == "yes"){
    // Send user to next page
    res.redirect('/version-38/on-benefit-no-payments-taken/reviewContact-mobile')
  } else {
    // Send user to ineligible page
    res.redirect('/version-38/on-benefit-no-payments-taken/financial-situation')
  }

})

router.post('/v-38/reminder-notification-payment-setup-done', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reminderAnswer = req.session.data['reminder-notification-payment-setup-done']

  // Check whether the variable matches a condition
  if (reminderAnswer == "yes-email"){
    // Send user to next page
    res.redirect('/version-38/on-benefit-payments-taken/reviewContact-email')
  } else if (reminderAnswer == "yes-email-mobile"){
    // Send user to next page
    res.redirect('/version-38/on-benefit-payments-taken/reviewContact-confirm')
  } else  if (reminderAnswer == "yes-mobile"){
    // Send user to next page
    res.redirect('/version-38/on-benefit-payments-taken/reviewContact-mobile-confirm')
  } else {
    // Send user to ineligible page
    res.redirect('/version-38/on-benefit-payments-taken/deductionSummary')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/v-38/reminder-notification-payment-setup-done-yes-no', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reminderAnswer = req.session.data['reminder-notification-payment-setup-done-yes-no']

  // Check whether the variable matches a condition
  if (reminderAnswer == "yes"){
    // Send user to next page
    res.redirect('/version-38/on-benefit-payments-taken/reviewContact-mobile-confirm')
  } else {
    // Send user to ineligible page
    res.redirect('/version-38/on-benefit-payments-taken/financial-situation')
  }

})

router.post('/v-38/confirm-mobile-number', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var mobileChanged = req.session.data['confirm-details-change']

  // Check whether the variable matches a condition
  if (mobileChanged == "yes"){
    // Send user to next page
    res.redirect('/version-38/on-benefit-payments-taken/change-mobile-number')
  } else {
    // Send user to ineligible page
    res.redirect('/version-38/on-benefit-payments-taken/financial-situation')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/v-38/reminder-notification-payment-setup-done-continue-without-reminder', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reminderAnswer = req.session.data['continue-without-reminder']

  // Check whether the variable matches a condition
  if (reminderAnswer == "yes-without-reminder"){
    // Send user to next page
    res.redirect('/version-38/on-benefit-payments-taken/financial-situation')
  } else {
    // Send user to ineligible page
    res.redirect('/version-38/on-benefit-payments-taken/indexAccountHome')
  }

})
