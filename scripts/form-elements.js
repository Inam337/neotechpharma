var form_Elements = (function() {
    // 'use strict';
    function formProgression() {
        $('.l-progressbar__bar span').css({
            width: '0%'
        });
        $('input, select').on('change change.fs', function(){
            var cntreq = 0;
            var cntvals = 0;
            $('input, select').each(function(i, val) {
                if($(this).attr('required')) {
                    cntreq++;
                }
                if($(this).attr('required')) {
                    if($(this).val() != '') {
                        cntvals++;
                    }
                }
            });
            var count = (cntvals/cntreq)*100;
            $('.l-progressbar__bar span').css({
                width: '0%'
            });
            $('.l-progressbar__bar span').css({
                width: count +'%'
            });
        });

    };
    function disableCopyPaste() {
        $('[data-disablepaste="true"]').bind("cut copy paste",function(e) {
            e.preventDefault();
        });
    };
    function formSubmittion() {
        //Intercepts Form submittion
        $( "[id*='l-admin-dashboard-id']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='l-admin-dashboard-id']" ).valid() == true ) {
                $(submitButtons).attr('disabled', 'disabled').addClass('loading');
            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }
            // Add local delay for visual impact
            // setTimeout(function() {
            // 	submitButtons.removeClass('loading');
            // 	return
            // }, 1500);
        });
    };
    function fieldAutoFocus() {
        $("input[id^='dob_day'], input[id^='dob_month']").keyup(function (event) {
            if (!(event.keyCode == 16 || event.keyCode == 9)) {
                if (this.value.length == this.maxLength) {
                    $(this).next('input').focus();
                }
            }
        });
        $("input[id^='passcode']").keyup(function (event) {
            var inputVal 	= $(this).val();
            if (!(event.keyCode == 16 || event.keyCode == 9)) {
                if (this.value.length == this.maxLength && $.isNumeric(inputVal)) {
                    $(this).next('input').focus();
                }
            }
        });
        $("input[id^='sortcode']").keyup(function (event) {
            var inputVal 	= $(this).val();
            if (!(event.keyCode == 16 || event.keyCode == 9)) {
                if (this.value.length == this.maxLength && $.isNumeric(inputVal)) {
                    $(this).next('input').focus();
                }
            }
        });
        $( "input[id^='dob_day'], input[id^='dob_day_business'], input[id^='additional_dob_day'], input[id^='dob_month']" ).focusout(function() {
            var inputVal 	= $(this).val();
            if(inputVal.length == 1 && $.isNumeric(inputVal)) {
                $(this).val( '0' + inputVal);
            }
        });
    };
    function _moveToFirstInvalid() {
        var firstInvalid = $('input.error, .fancy-select.error').first();
        $('html, body').animate({
            scrollTop: firstInvalid.offset().top - 150
        }, 500);
        firstInvalid.focus();
    };
    function showHidePass() {
        $('#admin-password, #password, #choosepassword, #confirm_password, #memorable, #confirm_memorable').hideShowPassword({
            show: false,
            innerToggle: true,
            states: {
                shown: {
                    className: 'hideShowPassword-shown',
                    changeEvent: 'passwordShown',
                    props: { type: 'text' },
                    toggle: {
                        className: 'hideShowPassword-toggle-hide icon-eye-close',
                        content: '',
                        attr: {
                            'aria-pressed': 'true',
                            title: 'Hide Password',
                        }
                    }
                },
                hidden: {
                    className: 'hideShowPassword-hidden',
                    changeEvent: 'passwordHidden',
                    props: { type: 'password' },
                    toggle: {
                        className: 'hideShowPassword-toggle-show icon-eye-open',
                        content: '',
                        attr: {
                            'aria-pressed': 'false',
                            title: 'Show Password',
                        }
                    }
                }
            }
        });
    };
    function addloading() {
        $('form').addClass('loading');
    };
    function clearloading() {
        $('form').removeClass('loading');
    };
    function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    };
    function isNumberKeyAndDecimal(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 46 || charCode > 57 || charCode == 47))
            return false;
        return true;
    };
    function dataToggleShow() {
        $('[data-toggle-show]').on('click', function(e) {
            e.preventDefault();
            var 	target = $(this).attr('data-toggle-show'),
                self = $(this);
            $('.'+target).toggleClass('active');
            $(self).toggleClass('active');
        });
    };
    function dataShowInput() {
        $('[data-show-input]').on('click', function(e) {
            // e.preventDefault();
            var 	target = $(this).attr('data-show-input'),
                self = $(this),
                isRequired = $('.'+target).find('input').hasClass('is-required');
            // If input was originally required the add this back
            if (isRequired) {
                $('.'+target).find('input').removeClass('is-required').attr('required', '');
            }
            $('.'+target).addClass('active');
        });
    };
    function dataHideInput() {
        $('[data-hide-input]').on('click', function(e) {
            // e.preventDefault();
            var 	target = $(this).attr('data-hide-input'),
                self = $(this),
                isRequired = $('.'+target).find('input').attr('required');
            // If input is required then track this for later switches
            if (isRequired) {
                $('.'+target).find('input').removeAttr('required').addClass('is-required').valid();
            }
            $('.'+target).removeClass('active');
        });

    };
    function fieldsetAutoSubmit() {
        var fields = [],
            formFailed = false;
        $('[data-autosub] input').each(function(index, el) {
            field = {
                'index': index,
                'src': el
            };
            fields.push(field);

        });
        var isLast = fields.length - 1;
        $(fields[isLast].src).keyup(function (e) {
            e.preventDefault();
            var thisForm =  $(this).closest('form'),
                requestStatus = true;
            $(this).blur();
            $(thisForm).addClass('loading');
            setTimeout(
                function() {
                    if (requestStatus === true) {
                        $(thisForm).submit();
                        if ($(thisForm).valid() === false) {
                            formFailed = true;
                            $(thisForm).removeClass('loading');
                            $(fields).each(function(index, el) {
                                $(fields[index].src).val('');
                            });
                            form_Elements.clearMessages();
                            form_Elements.failedMessage("Sorry the code entered isn't correct, Try again");
                        }
                    } else {
                        formFailed = true;
                        $(thisForm).removeClass('loading');
                        $(fields).each(function(index, el) {
                            $(fields[index].src).val('');
                        });
                        form_Elements.clearMessages();
                        form_Elements.failedMessage("Sorry the code entered isn't correct, Try again");
                    }
                }
                , 1500);
        });
    };
    function validateForms() {

        $('.optional-input').on('change', function(e) {
            if ($(this).val() === '') {
                $(this).prop('required',false);
            } else {
                $(this).prop('required',true);
            }
        });

        $.validator.addMethod("pwcheck", function(value) {
            return /^[A-Za-z0-9\d!@#€£$%^&*()_=\[\]{};':"\\|,.<>\/?+-`~]+]*$/.test(value) // consists of only these
            && /[A-Z]/.test(value) // has a lowercase letter
            && /\d/.test(value) // has a digit
            && /^[A-Za-z0-9\d!@#€£$%^&*()_=\[\]{};':"\\|,.<>\/?+-`~]{10,}$/.test(value) // atlesast 10 long
        }, "is required");
        /*$.validator.addMethod("notoggleinfo", function(value, element) {
            if($('#notoggleA').is(':checked')) {
                return false;
            }
            return true;
        }, "We are unable to proceed with your application without being able to communicate with you in these ways.");*/
        $.validator.addMethod("hpwcheck", function(value) {
            return /^[A-Za-z0-9\d!@#€£$%^&*()_=\[\]{};':"\\|,.<>\/?+-`~]+]*$/.test(value) // consists of only these
            && /[A-Z]/.test(value) // has a lowercase letter
            && /\d/.test(value) // has a digit
            && /^[A-Za-z0-9\d!@#€£$%^&*()_=\[\]{};':"\\|,.<>\/?+-`~]{10,}$/.test(value) // atlesast 10 long
        }, "is required");

        $.validator.addMethod("choosepwcheck", function(value) {
            return /^[A-Za-z0-9\d!@#€£$%^&*()_=\[\]{};':"\\|,.<>\/?+-`~]+]*$/.test(value) // consists of only these
            && /[A-Z]/.test(value) // has a lowercase letter
            && /\d/.test(value) // has a digit
            && /^[A-Za-z0-9\d!@#€£$%^&*()_=\[\]{};':"\\|,.<>\/?+-`~]{10,}$/.test(value) // atleast 10 long
            && /[!@#$%^&=*()-._]/.test(value) // atleast 1 special character

        }, "is required");

        // Digits and 12 Min Length
        $.validator.addMethod("customerID", function(value) {
            return /^[0-9]+]*$/.test(value) // consists of only these
            && /\d/.test(value) // has a digit
            && /^[0-9]{10,10}$/.test(value)
        }, "is required");

        $.validator.methods.email = function( value, element ) {
            return this.optional( element ) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
        }
        $.validator.addMethod("username", function(value, element) {
            return this.optional(element) || /^([A-Za-z0-9])+$/.test(value);
        }, "Letters and numbers only");
        $.validator.addMethod("husername", function(value, element) {
            return this.optional(element) || /^([A-Za-z0-9])+$/.test(value);
        }, "Letters and numbers only");
        $.validator.addMethod("adminusername", function(value, element) {
            return this.optional(element) || /^([A-Za-z0-9])+$/.test(value);
        }, "Letters and numbers only");

        /* $.validator.addMethod("mobilenumberfield", function(value, element) {
			return this.optional(element) || /\W\S/.test(value);
		}, "Letters are not allowed");*/

        $.validator.addMethod("usernamefield", function(value, element) {
            return this.optional(element) || /^([A-Za-z0-9])+$/.test(value);
        }, "Letters and numbers only");

        $.validator.addMethod("nowhitespace", function(value, element) {
            return this.optional(element) || /\S/i.test(value);
        }, "The entry was invalid, please try again");
        $.validator.addMethod("textareanowhitespace", function(value, element) {
            return this.optional(element) || /\S/i.test(value);
        }, "The entry was invalid, please try again");

        $.validator.addMethod("noconsecutivewhitespace", function(value, element) {
            return this.optional(element) || /^((?!\s{2}).)*$/.test(value);
        }, "The entry was invalid, Please try again");

        $.validator.addMethod("twoDecial", function (value, element) {
            return this.optional(element) || /^(\d+|\d+.\d{1,2})$/.test(value);
        }, "Please specify the correct number format eg 99.9 or 99.99");

        $.validator.addMethod("passcodesGroup", function (value, element) {
            return this.optional(element) || /^(\d)$/.test(value);
        }, "The entry was invalid, please try again");

        $.validator.addMethod( "phonePk", function( phone_number, element ) {
            phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
            return this.optional( element ) || phone_number.length > 9 &&
                phone_number.match( /^(?:(?:(?:00\s?|\+)92\s?)|(?:\(?3))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/ );
        }, "Please specify a valid Pk phone number");

        $.validator.addMethod( "daterange", function( value, element ) {
            return this.optional(element) || /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/.test(value);
        }, "Please enter valid date range");

        $.validator.addMethod("notjustzeros", function(value, element) {
            // Checking for dump data
            if ( value != "00000000") {
                return true;
            }
        }, "The entry was invalid, please try again");

        $.validator.addMethod("sortcodeVal", function(value, element) {

            var sortcode1 = $('#sortcode1').val(),
                sortcode2 = $('#sortcode2').val(),
                sortcode3 = $('#sortcode3').val(),
                sortcodeAll = sortcode1 + sortcode2 + sortcode3;

            // Checking for dump data
            if ( sortcodeAll != "000000") {
                return true;
            }

        }, "The entry was invalid, please try again");

        $.extend($.validator.messages, {
            required: 'is required',
            require_from_group: 'at least 1 is required.',
            phoneUK: 'Please specify a valid UK phone number.',
            postcodeUK: 'Please specify a valid UK postcode.',
            pwcheck: 'Your password must include at least:<br><span class="reduced">- one uppercase character<br>- one number<br>- and be at least 10 characters long</span>.',
            choosepwcheck: 'Your password must include at least:<br><span class="reduced">- one uppercase character<br>- one number<br>- one special character<br>- and be at least 10 characters long</span>.',
            // customerID: 'Your ID will be:<br><span class="reduced">- 12 characters long<br>- numbers only</span>',
            memorable: 'Your Security number will be:<br><span class="reduced">- 6 characters long<br>- numbers only</span>.'
        });

        $.validator.addClassRules("optional-input", {
            nowhitespace: true,
            noconsecutivewhitespace: true
        });
        $("[id*='ui-admin-dashboard-id']").validate({
            wrapper: 'span',
            focusInvalid: false,
            rules: {
                fullname: {
                    required: true
                },
                username: {
                    required: true,
                    username: true
                },
                firstname: {
                    required: true
                },
                /*toggleswitchA: {
                    required: true,
                    notoggleinfo:true
                },
                toggleswitchA: {
                    required: true,

                },*/
                sampletext: {
                    required: true,
                },
                sampletextarea:{
                    required: true,
                },
                selectcategory:{
                    required: true
                },
                
                emailaddress: {
                    required: true,
                    email: true
                },

                confirm_emailaddress: {
                    equalTo: '#emailaddress'
                },
                firstname: {
                    letterswithbasicpunc: true
                },
                surname: {
                    letterswithbasicpunc: true
                },
                confirm_password: {
                    equalTo: '#password'
                },


            },
            groups: {
                username: "title firstname surname",
            },
            messages: {
                confirm_emailaddress: "These emails don't match. Try again?",
                confirm_password: "These passwords don't match. Try again?"
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('fieldset').find('label'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).closest('fieldset').addClass(errorClass);
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).closest('fieldset').removeClass(errorClass);
            },

        });
        $("[id*='l-admin-dashboard-id-adduser']").validate({
            wrapper: 'span',
            focusInvalid: false,
            rules: {
                username: {
                    required: true,
                    husername: true
                },
                emailaddress: {
                    required: true,
                    email: true
                },
                mobilenumber: {
                    required: true
                },
                createdby: {
                    required: true
                },
                userstatus: {
                    required: true
                },
            },
            groups: {
                vusername: "title firstname surname",
            },
            messages: {
                vconfirm_emailaddress: "These emails don't match. Try again?",
                vconfirm_password: "These passwords don't match. Try again?"
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('fieldset').find('label'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).closest('fieldset').addClass(errorClass);
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).closest('fieldset').removeClass(errorClass);
            },

        });
        $("[id*='review-block-form']").validate({
            wrapper: 'span',
            focusInvalid: false,
            rules: {
                rusername: {
                    required: true,
                    husername: true
                },
                rphone: {
                    required: true,
                    nowhitespace:true
                },
                remailaddress: {
                    required: true,
                    //email: true
                },
                rcomment: {
                    required: true
                }
            },
            groups: {
                vusername: "title firstname surname",
            },
            messages: {
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('fieldset').find('label'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).closest('fieldset').addClass(errorClass);
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).closest('fieldset').removeClass(errorClass);
            },

        });
        $("[id*='contact-block-form']").validate({
            wrapper: 'span',
            focusInvalid: false,
            rules: {
                cfullname: {
                    required: true
                },
                cemail: {
                    required: true,
                    email: true
                },
                cphone: {
                    required: true,
                    nowhitespace:true
                },
                csubject: {
                    required: true
                },
                cmessage: {
                    required: true
                }
            },
            messages: {
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('fieldset').find('label'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).closest('fieldset').addClass(errorClass);
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).closest('fieldset').removeClass(errorClass);
            },

        });



    };
    return {
        formProgression: formProgression,
        disableCopyPaste: disableCopyPaste,
        formSubmittion: formSubmittion,
        fieldAutoFocus: fieldAutoFocus,
        addloading: addloading,
        clearloading: clearloading,
        dataToggleShow: dataToggleShow,
        dataShowInput: dataShowInput,
        dataHideInput: dataHideInput,
        //fieldsetAutoSubmit: fieldsetAutoSubmit,
        validateForms: validateForms,
    };

})();

$(document).ready(function($) {

    form_Elements.formProgression();
    form_Elements.disableCopyPaste();
    form_Elements.formSubmittion();
    form_Elements.fieldAutoFocus();
    form_Elements.addloading();
    form_Elements.clearloading();
    form_Elements.dataToggleShow();
    form_Elements.dataShowInput();
    form_Elements.dataHideInput();
    //form_Elements.fieldsetAutoSubmit();
    form_Elements.validateForms();
});