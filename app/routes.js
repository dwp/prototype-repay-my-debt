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

//version-39 forms

router.post('/v-39/amount-too-low', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var amountLow = req.session.data['newDeductedAmount']

  // Check whether the variable matches a condition
  if (amountLow <= 4){
    // Send user to next page
    res.redirect('/version-39/on-benefit-no-payments-taken/amount-too-low')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-no-payments-taken/OnBenReview-3a')
  }

})

router.post('/v-39/amount-too-low-payment-setup-done', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var amountLow = req.session.data['newDeductedAmount-setupDone']

  // Check whether the variable matches a condition
  if (amountLow <= 4){
    // Send user to next page
    res.redirect('/version-39/on-benefit-payments-taken/amount-too-low')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-payments-taken/OnBenReview-3')
  }

})

router.post('/sign-in-options', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['sign-in']

  // Check whether the variable matches a condition
  if (option == 'secuity-code'){
    // Send user to next page
    res.redirect('/version-39/on-benefit-payments-taken/inGuard')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-payments-taken/register-new-account')
  }

})


///on-benefit-no-payments-taken/how-do-want-access

router.post('/on-benefit-no-payments-taken/how-do-want-access', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['access-option']

  // Check whether the variable matches a condition
  if (option == 'security-code'){
    // Send user to next page
    res.redirect('/version-39/on-benefit-no-payments-taken/inGuard')
  } else if (option == 'repay-account') {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-no-payments-taken/sign-in-oidv')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-no-payments-taken/register-new-account')
  }
})

///on-benefit-no-payments-taken/how-do-want-access

router.post('/on-benefit-payments-taken/how-do-want-access', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['access-option-for-taken']

  // Check whether the variable matches a condition
  if (option == 'security-code'){
    // Send user to next page
    res.redirect('/version-39/on-benefit-payments-taken/inGuard')
  } else if (option == 'repay-account') {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-payments-taken/sign-in-oidv')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-payments-taken/register-new-account')
  }
})

//on-benefit-no-payments-taken/security-code
router.post('/on-benefit-no-payments-taken/security-code', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['security-code']

  // Check whether the variable matches a condition
  if (option == 'yes'){
    // Send user to next page
    res.redirect('/version-39/on-benefit-no-payments-taken/inGuard')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-no-payments-taken/are-you-registered')
  }

})

//on-benefit-no-payments-taken/is-registered
router.post('/on-benefit-no-payments-taken/is-registered', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['is-registered']

  // Check whether the variable matches a condition
  if (option == 'yes'){
    // Send user to next page
    res.redirect('/version-39/on-benefit-no-payments-taken/sign-in-oidv')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-no-payments-taken/register-new-account')
  }

})

//on-benefit-payments-taken/security-code
router.post('/on-benefit-payments-taken/security-code', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['security-code']

  // Check whether the variable matches a condition
  if (option == 'yes'){
    // Send user to next page
    res.redirect('/version-39/on-benefit-payments-taken/inGuard')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-payments-taken/are-you-registered')
  }

})

//on-benefit-payments-taken/is-registered
router.post('/on-benefit-payments-taken/is-registered', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['is-registered']

  // Check whether the variable matches a condition
  if (option == 'yes'){
    // Send user to next page
    res.redirect('/version-39/on-benefit-payments-taken/sign-in-oidv')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-payments-taken/register-new-account')
  }

})

//on-benefit-no-payments-taken/keep-using-code
router.post('/on-benefit-no-payments-taken/keep-using-code', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['keep-using-code']

  // Check whether the variable matches a condition
  if (option == 'yes'){
    // Send user to next page
    res.redirect('/version-39/on-benefit-no-payments-taken/indexGuard')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-no-payments-taken/register-new-account')
  }

})

//on-benefit-no-payments-taken/keep-using-code
router.post('/on-benefit-payments-taken/keep-using-code', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['keep-using-code']

  // Check whether the variable matches a condition
  if (option == 'yes'){
    // Send user to next page
    res.redirect('/version-39/on-benefit-payments-taken/indexGuard')
  } else {
    // Send user to ineligible page
    res.redirect('/version-39/on-benefit-payments-taken/register-new-account')
  }

})

router.post('/version-40/sign-in-options', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['sign-in-new']

  // Check whether the variable matches a condition
  if (option == 'sign-in-oidv'){
    // Send user to next page
    res.redirect('/version-40/on-benefit-no-payments-taken/sign-in-oidv')

  } else {
    // Send user to ineligible page
    res.redirect('/version-40/on-benefit-no-payments-taken/inGuard')
  }

})

//Mange you repayments routes

router.post('/v42/manage-your-repayments/amount-low', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var amountLow = req.session.data['new-affordable-amount']

  // Check whether the variable matches a condition
  if (amountLow <= 4){
    // Send user to next page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/amount-too-low')
  } else {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/what-this-will-mean-for-your-repayments')
  }

})

//Mange you repayments routes

router.post('/manage-your-repayments/amount-low', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var amountLow = req.session.data['new-affordable-amount']

  // Check whether the variable matches a condition
  if (amountLow <= 4){
    // Send user to next page
    res.redirect('/version-40/manage-your-repayments/amount-too-low')
  } else {
    // Send user to ineligible page
    res.redirect('/version-40/manage-your-repayments/what-this-will-mean-for-your-repayments')
  }

})

router.post('/version-40/sign-in', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['sign-in-new']

  // Check whether the variable matches a condition
  if (option == 'sign-in-oidv'){
    // Send user to next page
    res.redirect('/version-40/sign-in-oidv')

  } else {
    // Send user to ineligible page
    res.redirect('/version-40/sign-in-using-security-code')
  }

})





router.post('/version-40/on-benefit-no-payments-taken/signGuard-update-nobanner', function (req, res) {

  var option = req.session.data['new-signin']

  if (option == 'sign-in-oidv'){
    res.redirect('/version-40/sign-in-oidv')

  } else {
    res.redirect('/version-40/sign-in-using-security-code')
  }

})


router.post('/v42/account-improvement/on-benefit/sign-in-choice', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['sign-in-choice']

  // Check whether the variable matches a condition
  if (option == 'sign-in-one-login'){
    // Send user to next page
    res.redirect('/v42/account-improvement/on-benefit/sign-in-one-login')

  } else if (option == 'security-code') {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/sign-in-security-code')
  }  else {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/register-new-account')
  }

})

router.post('/v42/account-improvement/on-benefit-test-2/sign-in-choice', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['sign-in-choice']

  // Check whether the variable matches a condition
  if (option == 'sign-in-one-login'){
    // Send user to next page
    res.redirect('/v42/account-improvement/on-benefit-test-2/sign-in-one-login')

  } else if (option == 'security-code') {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit-test-2/sign-in-security-code')
  }  else {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit-test-2/register-new-account')
  }

})

router.post('/v42/account-improvement/off-benefit/flex-account/sign-in-choice', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['sign-in-choice']

  // Check whether the variable matches a condition
  if (option == 'sign-in-oidv'){
    // Send user to next page
    res.redirect('/v42/account-improvement/off-benefit/flex-account/sign-in-oidv')

  } else if (option == 'security-code') {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/off-benefit/flex-account/sign-in-security-code')
  }  else {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/off-benefit/flex-account/register-new-account')
  }

})



router.post('/version-41/sign-in-choice', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['sign-in-choice']

  // Check whether the variable matches a condition
  if (option == 'sign-in-oidv'){
    // Send user to next page
    res.redirect('/version-41/sign-in-oidv')

  } else if (option == 'security-code') {
    // Send user to ineligible page
    res.redirect('/version-41/sign-in-security-code')
  }  else {
    // Send user to ineligible page
    res.redirect('/version-41/register-new-account')
  }

})

// New for Version 42 - Income and Expenses

router.post('/income-expenses/income-type', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['income-type']

  // Check whether the variable matches a condition
  if (option == 'monthly-income'){
    // Send user to next page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/income-details-monthly.html')

  } else if (option == 'benefits') {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/income-details-benefits.html')
  }  else  if (option == 'pension'){
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/income-details-pension.html')
  }
  else {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/income-details-other-income.html')
  }

})


router.post('/income-expenses/expense-type', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['expense-type']

  // Check whether the variable matches a condition
  if (option == 'housing'){
    // Send user to next page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/expense-details-housing.html')

  } else if (option == 'utilities') {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/expense-details-utilities.html')
  }  else  if (option == 'other-repayments'){
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/expense-details-other-repayments.html')
  }
  else  if (option == 'pension-contributions'){
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/expense-details-pension-contributions.html')
  }
  else  if (option == 'travel'){
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/expense-details-travel.html')
  }
  else  if (option == 'childcare-costs'){
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/expense-details-childcare-costs.html')
  }
  else  if (option == 'personal-costs'){
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/expense-details-personal-costs.html')
  }
  else  if (option == 'groceries'){
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/expense-details-groceries.html')
  }
  else  if (option == 'leisure'){
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/expense-details-leisure.html')
  }
  else {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/expense-details-insurance.html')
  }

})

router.post('/expense-list/yes-no', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['add-another-expense']

  // Check whether the variable matches a condition
  if (option == 'Yes'){
    // Send user to next page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/choose-expense-type.html')

  } else {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/income-expenses.html')
  }

})

router.post('/income-list/yes-no', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var option = req.session.data['add-another-income']

  // Check whether the variable matches a condition
  if (option == 'Yes'){
    // Send user to next page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/choose-income-type.html')

  } else {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/income-expenses.html')
  }

})

router.post('/income-expense/amount-low', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var amountLow = req.session.data['new-affordable-amount']

  // Check whether the variable matches a condition
  if (amountLow <= 4){
    // Send user to next page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/amount-too-low')
  } else {
    // Send user to ineligible page
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/income-expenses')
  }

})



router.post('/income-expenses/how-much-you-can-afford-choices', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var payableAmount = req.session.data['final-affordable-amount']
  var initialAmount = req.session.data['new-affordable-amount']

  var selectedChoice = req.session.data['selected-amount-choice']


  if (selectedChoice == 'inital-amount') {
    if (initialAmount < 5){
      res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/amount-too-low')
    } else {
      res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/what-this-will-mean-for-your-repayments.html')
    }

  } else { if (payableAmount < 5){
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/amount-too-low')
  } else {
    res.redirect('/v42/account-improvement/on-benefit/manage-your-repayments/what-this-will-mean-for-your-repayments.html')
  }


}




})



router.post('/income-expenses-v2/how-much-you-can-afford-choices', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var payableAmount = req.session.data['final-affordable-amount-v2']


  if (payableAmount < 5){
    res.redirect('/v42/account-improvement/on-benefit-test-2/manage-your-repayments-test-2/amount-too-low')
  } else {
    res.redirect('/v42/account-improvement/on-benefit-test-2/manage-your-repayments-test-2/what-this-will-mean-for-your-repayments.html')
  }

})



router.post('/income-expenses-v2/how-much-you-can-afford-choices-negative', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var payableAmount = req.session.data['final-affordable-amount-v2']


  if (payableAmount < 5){
    res.redirect('/v42/account-improvement/on-benefit-test-2/manage-your-repayments-test-2/amount-too-low')
  } else {
    res.redirect('/v42/account-improvement/on-benefit-test-2/manage-your-repayments-test-2/what-this-will-mean-for-your-repayments-negative.html')
  }

})


router.post('/flow-v1/income-expenses-v2/how-much-you-can-afford-choices', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var payableAmount = req.session.data['final-affordable-amount-v2']


  if (payableAmount < 5){
    res.redirect('/v42/account-improvement/on-benefit-flow-v1/manage-your-repayments-test-2/amount-too-low')
  } else {
    res.redirect('/v42/account-improvement/on-benefit-flow-v1/manage-your-repayments-test-2/what-this-will-mean-for-your-repayments.html')
  }

})


router.post('/flow-v1/income-expenses-v2/how-much-you-can-afford-choices-negative', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var payableAmount = req.session.data['final-affordable-amount-v2']


  if (payableAmount < 5){
    res.redirect('/v42/account-improvement/on-benefit-flow-v1/manage-your-repayments-test-2/amount-too-low')
  } else {
    res.redirect('/v42/account-improvement/on-benefit-flow-v1/manage-your-repayments-test-2/what-this-will-mean-for-your-repayments-negative.html')
  }

})


router.post('/flow-v2/income-expenses-v2/how-much-you-can-afford-choices', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var payableAmount = req.session.data['final-affordable-amount-v2']


  if (payableAmount < 5){
    res.redirect('/v42/account-improvement/on-benefit-flow-v2/manage-your-repayments-test-2/amount-too-low')
  } else {
    res.redirect('/v42/account-improvement/on-benefit-flow-v2/manage-your-repayments-test-2/what-this-will-mean-for-your-repayments.html')
  }

})


router.post('/flow-v2/income-expenses-v2/how-much-you-can-afford-choices-negative', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var payableAmount = req.session.data['final-affordable-amount-v2']


  if (payableAmount < 5){
    res.redirect('/v42/account-improvement/on-benefit-flow-v2/manage-your-repayments-test-2/amount-too-low')
  } else {
    res.redirect('/v42/account-improvement/on-benefit-flow-v2/manage-your-repayments-test-2/what-this-will-mean-for-your-repayments-negative.html')
  }

})


//// ONE LOGIN ROUTES ////

router.post('/one-login/sign-in', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var signin = req.session.data['signin']

  // Check whether the variable matches a condition
  if (signin == 'onelogin'){
    // Send user to next page
    res.redirect('/one-login/ol_transition')
  } else {
    // Send user to ineligible page
    res.redirect('/one-login/sign-in-security-code')
  }

})

router.post('/one-login/signinchoice', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var choice = req.session.data['choice']

  // Check whether the variable matches a condition
  if (choice == 'code'){
    // Send user to next page
    res.redirect('/one-login/account-home')
  } else {
    // Send user to ineligible page
    res.redirect('/one-login/ol_transition')
  }

})


//// FIRST TIME USER -  ROUTES ////

router.post('/v43/first-time/sign-in', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var signin = req.session.data['signin']

  // Check whether the variable matches a condition
  if (signin == 'onelogin'){
    // Send user to next page
    res.redirect('/v43/first-time/ol_transition')
  } else {
    // Send user to ineligible page
    res.redirect('/v43/first-time/sign-in-security-code')
  }

})

router.post('/v43/first-time/signinchoice', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var choice = req.session.data['choice']

  // Check whether the variable matches a condition
  if (choice == 'code'){
    // Send user to next page
    res.redirect('/v43/first-time/what-do-you-want-to-do')
  } else {
    // Send user to ineligible page
    res.redirect('/v43/first-time/ol_transition')
  }

})

router.post('/v43/first-time/what-do-you-want-to-do', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var choice = req.session.data['whatDoYouWantToDo']

  // Check whether the variable matches a condition
  if (choice == 'payment-options'){
    // Send user to next page
    res.redirect('/v43/first-time/payment-options')
  } else if (choice == 'view-debt-details'){
    // Send user to ineligible page
    res.redirect('/v43/first-time/view-debt-details')
  } else {
    // Send user to ineligible page
    res.redirect('/v43/first-time/help-support')
  }

})


router.post('/v43/first-time/payment-options', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var choice = req.session.data['paymentOptions']

  // Check whether the variable matches a condition
  if (choice == 'pay-in-full'){
    // Send user to next page
    res.redirect('/v43/first-time/pay-the-full-amount')
  } else {
    // Send user to ineligible page
    res.redirect('/v43/first-time/set-up-a-payment')
  }

})
