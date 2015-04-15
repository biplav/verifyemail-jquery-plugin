# Advanced jQuery Email Address Validator by BakBak
A simple jQuery plugin to show capability of http://www.bakbak.io/verifyemail

Given an arbitrary address, BakBak/VerifyEmail will validate the address based on:

Syntax checks (RFC defined grammar)
DNS validation
Spell checks
Email Service Provider (ESP) specific local-part grammar (if available)
MX Validation

How to use the email validator on your form?

Include jQuery
Include bakbak_validator.js
Attach bakbak_validator() function to the email field you want validated
Decide what should happen for valid emails, invalid emails and suggestions
Attaching to a form field:

   $('jquery_selector').bakbak_validator({
       in_progress: in_progress_callback, // called when request is made to validator
       success: success_callback,         // called when validator has returned
       error: validation_error,           // called when an error reaching the validator has occured
   });
Sample JSON in success callback:

 {
 "is_valid":true,
 "address":"biplav.saraf@gmail.com",
 "parts":
       {
       "display_name":null,
       "domain":"gmail.com",
       "local_part":"biplavsaraf"
       },
  "did_you_mean":null,
  "syntaxValid":true,
  "mxValid":true
}
Demo

http://www.bakbak.io/verifyemail
