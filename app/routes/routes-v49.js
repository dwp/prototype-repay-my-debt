const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

// CYA routing: Change payment date
router.get('/v49/off-benefit/rfu/direct-debit/payment-summary/v1/change-payment-date', function (request, response) {
    request.session.data['referer'] = request.get('referer');
    response.redirect("/v49/off-benefit/rfu/direct-debit/payment-date");
});

router.post('/v49/off-benefit/rfu/direct-debit/payment-date/check-payment-date', function (request, response) {
    var ddPaymentDay = request.session.data['ddPaymentDay'];
    var referer = request.session.data['referer'];

    if(ddPaymentDay == undefined || ddPaymentDay == "" ) {
        response.redirect('/v49/off-benefit/rfu/direct-debit/payment-date/?error=empty');
    }

    else if (ddPaymentDay.match(/[a-zA-Z]/g)) {
        response.redirect('/v49/off-benefit/rfu/direct-debit/payment-date/?error=letters');
    }

    else if(referer == undefined) {
        response.redirect('/v49/off-benefit/rfu/direct-debit/account-details/index');
    }

    else if (referer.includes('/payment-summary')) {
        response.redirect('/v49/off-benefit/rfu/direct-debit/payment-summary/v1');

    }

    else {
        response.redirect('/v49/off-benefit/rfu/direct-debit/account-details/index');

    }

});

// FTU: What do you want to do?

router.post('/v49/off-benefit/ftu/what-do-you-want-to-do/what-do-you-want-to-do-routing', function (request, response) {
    var option = request.session.data['selected-option'];

    if(option == 'I want to view my payment options') {
        response.redirect('/v49/off-benefit/ftu/payment-options');
    }

    else if (option == 'I want to view details of what I owe') {
        response.redirect('/v49/details-of-what-you-owe/case3');
    }

    else  {
        response.redirect('/v49/help-and-support/case2');
    }

});

// FTU: Select a payment option

router.post('/v49/off-benefit/ftu/payment-options/payment-options-routing', function (request, response) {
    var paymentOption = request.session.data['payment-option'];

    if(paymentOption == 'Pay the full amount') {
        response.redirect('/v49/off-benefit/ftu/pay-the-full-amount');
    }

    else  {
        response.redirect('/v49/off-benefit/ftu/payment-plan');
    }

});

// FTU: Choose a payment plan

router.post('/v49/off-benefit/ftu/payment-plan/payment-plan-routing', function (request, response) {
    var paymentPlanAmount = request.session.data['paymentPlanAmount'];

    if(paymentPlanAmount == 'Pay a different amount above') {
        response.redirect('/v49/off-benefit/ftu/payment-plan/different-amount/index');
    }

    else if(paymentPlanAmount == 'I need a more affordable plan') {
        response.redirect('/v49/off-benefit/ftu/payment-plan/affordable-plan/index');
    }

    else  {
        response.redirect('/v49/off-benefit/ftu/monthly-option/index');
    }

});

//FTU: Monthly payment options

router.post('/v49/off-benefit/ftu/monthly-option/monthly-option-routing', function (request, response) {
    var monthlyOption = request.session.data['monthly-option'];

    if(monthlyOption == 'Monthly Direct Debit') {
        response.redirect('/v49/off-benefit/ftu/direct-debit/setup/index');
    }

    else  {
        response.redirect('/v49/off-benefit/ftu/flexible/how-flexible-payments-work/index');
    }

});

router.post('/v49/research-index-routing', function (req, res) {

    res.redirect('/v49/research-index')

})
