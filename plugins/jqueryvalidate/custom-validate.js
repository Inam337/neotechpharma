//Login Form Validation 
var form_Elements = (function() {
    function disableCopyPaste() {
        $('[data-disablepaste="true"]').bind("cut copy paste",function(e) {
            e.preventDefault();
        });
    };

    function showHidePassword(){
        $(".show-password, .hide-password").on('click', function() {
            var passwordId = $(this).parent().next().attr('id');
            if ($(this).hasClass('show-password')) {
                $("#" + passwordId).attr("type", "text");
                $(this).parent().find(".show-password").hide();
                $(this).parent().find(".hide-password").show();
            } else {
                $("#" + passwordId).attr("type", "password");
                $(this).parent().find(".hide-password").hide();
                $(this).parent().find(".show-password").show();
            }
        });
    }
    function formSubmittion() {
        //Intercepts Form submittion
        $( "[id*='organisatons']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='organisatons']" ).valid() == true ) {
                //$(submitButtons).attr('disabled', 'disabled').addClass('loading');

            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }
            //orgtype Validation
            if ($("#orgtype").find(".fs-label").html() === "Select Orgranisation" ) {
                $("#orgtype").addClass("error");
                $("#orgtype").find("label").append("<span> is required</span>");
            } else{
                $("#orgtype").removeClass("error");
                $("#orgtype").find("label span").remove();
            }
        });
        $( "[id*='teachers']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='teachers']" ).valid() == true ) {
                //$(submitButtons).attr('disabled', 'disabled').addClass('loading');

            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }
            //Section Validation
            /* if ($("#tsections").find(".fs-label").html() === "Select some options" ) {
                $("#tsections").addClass("error");
                $("#tsections").find("label").append("<span> is required</span>");
            } else{
                $("#tsections").removeClass("error");
                $("#tsections").find("label span").remove();
            }
            //Subjects Validation
            if ($("#tsubjects").find(".fs-label").html() === "Select some options" ) {
                $("#tsubjects").addClass("error");
                $("#tsubjects").find("label").append("<span> is required</span>");
            } else{
                $("#tsubjects").removeClass("error");
                $("#tsubjects").find("label span").remove();
            }*/
        });

        $( "[id*='addsubjects']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='addsubjects']" ).valid() == true ) {
                //$(submitButtons).attr('disabled', 'disabled').addClass('loading');

            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }
            //All Subjects Validation
            if ($("#asubjects").find(".fs-label").html() === "Select Subjects" ) {
                $("#asubjects").addClass("error");
                $("#asubjects").find("label").append("<span> is required</span>");
            } else{
                $("#asubjects").removeClass("error");
                $("#asubjects").find("label span").remove();
            }
        });
        $( "[id*='cohort']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='cohort']" ).valid() == true ) {
                // $(submitButtons).attr('disabled', 'disabled').addClass('loading');

            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }

            //All listbox_multiselect Validation
            var count = $("#listbox_multiselect-teacher_to_wrapper ul").children().length;
            if (count < 1) {
                $("#listbox_multiselect-teacher_to_wrapper ul").addClass("error");
                return false;
            } else{
                $("#listbox_multiselect-teacher_to_wrapper ul").removeClass("error");
            }
            /* if(!$("#listbox_multiselect-teacher_wrapper ul").hasClass("error")){
                $("#listbox_multiselect-teacher_wrapper ul").addClass("error");
            }*/

        });
        $( "[id*='coach']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='coach']" ).valid() == true ) {
                //$(submitButtons).attr('disabled', 'disabled').addClass('loading');

            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }
            //Date Field Validations
            var dob = $('#dob').val();
            var joiningdate = $('#joiningdate').val();
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; 
            var yyyy = today.getFullYear();
            if(mm < 10 && dd < 10){
                var currentdate = "0"+mm+'/'+"0"+dd+'/'+yyyy;
            }
            //alert(currentdate);
            if (dob > joiningdate) {
                $('.custom-alert').removeClass("hide-box");
                $('.custom-alert').find("p").html("Invalid Date: Joining Date must be greater than Date of Birth.");
            } 
            if (dob > currentdate) {
                $('.custom-alert').removeClass("hide-box");
                $('.custom-alert').find("p").html("Invalid Date: Date Of Birth is greater then Current Date.");
            }
            // return false;
        });
        $( "[id*='courses']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='courses']" ).valid() == true ) {
                //$(submitButtons).attr('disabled', 'disabled').addClass('loading');

            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }
            //All Goal List Goals
            if ($("#goalslist").find(".fs-label").html() === "Select Goals" ) {
                $("#goalslist").addClass("error");
                $("#goalslist").find("label").append("<span> is required</span>");
                if ($('#goalslist label span').length > 0){
                    $("#goalslist label").find("span").remove();
                    $("#goalslist").find("label").append("<span> is required</span>");
                }
                return false
            } else{
                $("#goalslist").removeClass("error");
                $("#goalslist").find("label span").remove();
            }

        });

        $( "[id*='program']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='program']" ).valid() == true ) {
                // $(submitButtons).attr('disabled', 'disabled').addClass('loading');

            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }
            /* //All Goals List Validation
            if ($("#goalslist").find(".fs-label").html() === "Select Goals" ) {
                $("#goalslist").find("label").append("<span> is required</span>");
                if ($('#goalslist label span').length > 0){
                    $("#goalslist label").find("span").remove();
                    $("#goalslist").find("label").append("<span> is required</span>");
                }
                if (!$("#goalslist").find(".fs-option").hasClass("selected")){
                    $("#goalslist").addClass("error");
                     return false;
                } 
            } 

            //All Skill Tree Validation
            if ($("#skilllist").find(".fs-label").html() === "Select Skills" ) {
                $("#skilllist").find("label").append("<span> is required</span>");
                if ($('#skilllist label span').length > 0){
                    $("#skilllist label").find("span").remove();
                    $("#skilllist").find("label").append("<span> is required</span>");
                }
                if ($("#skilllist").find(".selected").length > 0){
                    $("#skilllist").addClass("error");
                }
            }*/

        });

        $( "[id*='assignprogram']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='assignprogram']" ).valid() == true ) {
                // $(submitButtons).attr('disabled', 'disabled').addClass('loading');

            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }
            //All select org List Validation
            if ($("#selectorg .filter-option-inner-inner").html() === "Select Organisation" ) {
                $("#selectorg").addClass("error");
                $("#selectorg").find("label").append("<span> is required</span>");
                if ($('#selectorg label span').length > 0){
                    $("#selectorg").find("span").remove();
                    $("#selectorg").find("label").append("<span> is required</span>");
                }
                return false;
            } else{
                $("#selectorg").removeClass("error");
                $("#selectorg").find("label span").remove();
            }

            //All Coach List Validation
            if ($("#selectcoachlist .filter-option-inner-inner").html() === "Select Coach" ) {
                $("#selectcoachlist").addClass("error");
                $("#selectcoachlist").find("label").append("<span> is required</span>");
                if ($('#selectcoachlist label span').length > 0){
                    $("#selectcoachlist label").find("span").remove();
                    $("#selectcoachlist").find("label").append("<span> is required</span>");
                }
                return false;
            } else{
                $("#selectcoachlist").removeClass("error");
                $("#selectcoachlist").find("label span").remove();
            }
            //All Skill Tree Validation
            if ($("#cohortlist").find(".fs-label").html() === "Select Cohorts" ) {
                $("#cohortlist").addClass("error");
                $("#cohortlist").find("label").append("<span> is required</span>");
                if ($('#cohortlist label span').length > 0){
                    $("#cohortlist label").find("span").remove();
                    $("#cohortlist").find("label").append("<span> is required</span>");
                }
                return false;
            } else{
                $("#cohortlist").removeClass("error");
                $("#cohortlist").find("label span").remove();
            }
        });

        $( "[id*='skilltree']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='skilltree']" ).valid() == true ) {
                // $(submitButtons).attr('disabled', 'disabled').addClass('loading');

            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }
            /*All c Validation
            if ($("#selectgoalslist .filter-option-inner-inner").html() === "Select Goals" ) {
                $("#selectgoalslist").addClass("error");
                $("#selectgoalslist").find("label").append("<span> is required</span>");
                if ($('#selectgoalslist label span').length > 0){
                    $("#selectgoalslist label").find("span").remove();
                    $("#selectgoalslist").find("label").append("<span> is required</span>");
                }
                return false;
            } else{
                $("#selectgoalslist").removeClass("error");
                $("#selectgoalslist").find("label span").remove();
            }*/
        });
        $( "[id*='createuser']" ).submit(function(e) {
            var submitButtons = $(this).find('button[type=submit]');
            if ($( "[id*='createuser']" ).valid() == true ) {
                // $(submitButtons).attr('disabled', 'disabled').addClass('loading');

            } else {
                //$(submitButtons).removeAttr('disabled').removeClass('loading');
                if ($('.disable-tooltip-scroll').length === 0) {
                    _moveToFirstInvalid();
                }
            }
            //All select org List Validation
            if ($("#selectorg .filter-option-inner-inner").html() === "Select Organisation" ) {
                $("#selectorg").addClass("error");
                $("#selectorg").find("label").append("<span> is required</span>");
                if ($('#selectorg label span').length > 0){
                    $("#selectorg").find("span").remove();
                    $("#selectorg").find("label").append("<span> is required</span>");
                }
                return false;
            } else{
                $("#selectorg").removeClass("error");
                $("#selectorg").find("label span").remove();
            }
        });

        /* $(document).on("click","#tsections .fs-option", function(e) {
            if($("#tsections").hasClass("error")){
                $("#tsections").removeClass("error");
                $("#tsections").find("label span").remove();
            }
        });

        $(document).on("click","#tsubjects .fs-option", function(e) {
            if($("#tsubjects").hasClass("error")){
                $("#tsubjects").removeClass("error");
                $("#tsubjects").find("label span").remove();
            }
        });*/
        $(document).on("click","#orgtype .fs-option", function(e) {
            if($("#orgtype").hasClass("error")){
                $("#orgtype").removeClass("error");
                $("#orgtype").find("label span").remove();
            }
        });
        $(document).on("click","#asubjects .fs-option", function(e) {
            if($("#asubjects").hasClass("error")){
                $("#asubjects").removeClass("error");
                $("#asubjects").find("label span").remove();
            }
        });


        $(document).on("click","#goalslist .fs-option", function(e) {
            if($("#goalslist").hasClass("error")){
                $("#goalslist").removeClass("error");
                $("#goalslist").find("label span").remove();
            }
        });

        $(document).on("click","#skilllist .fs-option", function(e) {
            if($("#skilllist").hasClass("error")){
                $("#skilllist").removeClass("error");
                $("#skilllist").find("label span").remove();
            }
        });

        $(document).on("click" , ".listbox_controls .add", function(e) {
            if($("#listbox_multiselect-teacher_to_wrapper ul").hasClass("error")){
                $("#listbox_multiselect-teacher_to_wrapper ul").removeClass("error");
            }
            /*if($("#listbox_multiselect-teacher_wrapper ul").hasClass("error")){
                $("#listbox_multiselect-teacher_wrapper ul").removeClass("error");
            }*/
        });
        // Assign Program Selects
        $(document).on("click",".bootstrap-select .dropdown-menu li", function(e) {
            if($("#selectorg").hasClass("error")){
                $("#selectorg").removeClass("error");
                $("#selectorg").find("label span").remove();
            }
        });

        $(document).on("click",".bootstrap-select .dropdown-menu li", function(e) {
            if($("#selectcoachlist").hasClass("error")){
                $("#selectcoachlist").removeClass("error");
                $("#selectcoachlist").find("label span").remove();
            }
        });
        $(document).on("click",".bootstrap-select .dropdown-menu li", function(e) {
            if($("#selectgoalslist").hasClass("error")){
                $("#selectgoalslist").removeClass("error");
                $("#selectgoalslist").find("label span").remove();
                /*setTimeout(function(){ 
                if($(".bootstrap-select .dropdown-menu li a").hasClass("active")){
                    alert("ff");
                    $(".dropdown-menu li").removeClass("active");
                    $(".dropdown-menu li").removeClass("selected");
                    $(".dropdown-menu li a").removeClass("active");
                    $(".dropdown-menu li a").removeClass("selected");
                    $(".dropdown-menu li:first-child").addClass("active");
                    $(".dropdown-menu li:first-child").addClass("selected");
                    $(".dropdown-menu li a:first-child").addClass("active");
                    $(".dropdown-menu li a:first-child").addClass("selected");
                }
                }, 3000);*/
            }

        });

        $(document).on("click","#cohortlist .fs-option", function(e) {
            if($("#cohortlist").hasClass("error")){
                $("#cohortlist").removeClass("error");
                $("#cohortlist").find("label span").remove();
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
    function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
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
            && /^[A-Za-z0-9\d!@#€£$%^&*()_=\[\]{};':"\\|,.<>\/?+-`~]{8,}$/.test(value) // atlesast 10 long
        }, "is required");

        $.validator.methods.email = function( value, element ) {
            return this.optional(element) || /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9]+\.)+[a-zA-Z]{2,7}$/.test(value);
        }
        $.validator.addMethod("orgname", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9\s]+$/.test(value);
        }, "No Special Characters");
        $.validator.addMethod("namefield", function(value, element) {
            return this.optional(element) || /^[a-zA-Z -]*$/.test(value);
        }, "Letters only");
        $.validator.addMethod("goalfield", function(value, element) {
            return this.optional(element) || /^[a-zA-Z -]*$/.test(value);
        }, "Letters and Dash allowed");

        $.validator.addMethod("coursefield", function(value, element) {
            return this.optional(element) || /^[a-zA-Z -]*$/.test(value);
        }, "Letters and Dash allowed");

        $.validator.addMethod("programfield", function(value, element) {
            return this.optional(element) || /^[a-zA-Z -]*$/.test(value);
        }, "Letters and Dash allowed");


        $.validator.addMethod("onlyalphabets", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9\s]+$/.test(value);
        }, "Letters only");
        $.validator.addMethod("onlynumeric", function(value, element) {
            return this.optional(element) || /^([0-9])+$/.test(value);
        }, "Numbers only");
        $.validator.addMethod("qualifyfield", function(value, element) {
            return this.optional(element) || /^[ A-Za-z-()]*$/.test(value);
        }, "No Digit and Special Character eg: BS(CS)");

        $.validator.addMethod("usernamefield", function(value, element) {
            return this.optional(element) || /^([A-Za-z0-9])+$/.test(value);
        }, "Letters and numbers only");

        $.validator.addMethod("nowhitespace", function(value, element) {
            return this.optional(element) || /^([.\S.*])/.test(value);
        });

        $.validator.addMethod("customselect", function(value, element) {
            if($(".fs-wrap .fs-label").text() === "Select some options"){
                $(".fs-label").closest(".form-group").addClass("error");
            }
        });

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
        // Login Form 
        $("#login-form").validate({
            rules: {
                username: {
                    required: true,
                },
                password: {
                    required: true,
                    pwcheck:true,
                }
            },
            messages: {
                username: {
                    // required: "Username - is required",
                    // usernamecheck: "Username - is invalid",
                },
                password: {
                    // required: "Password - is required",
                }
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

        // Forgot Username Form Validation 
        $("#forgotpassword").validate({
            rules: {
                emailaddress: {
                    required: true,
                    email:true,
                }
            },
            messages: {
                emailaddress: {
                  //  required: "Email Address - is required",
                }
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

        //Forgot Password Form Validation
        $("#newpassword").validate({
            rules: {
                password: {
                    required: true,
                    maxlength: 20
                },
                confirmpassword: {
                    required: true,
                    maxlength: 20,
                    equalTo: "#password"
                }
            },
            messages: {
                password: {
                    //required: "New password - is required",
                },
                confirmpassword: {
                    equalTo: "Password does not matched!",
                }
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

        // Organisatons Form 
        $("#organisatons").validate({
            rules: {
                organisationname: {
                    required: true,
                    orgname:true,
                    //maxlength:150,
                    nowhitespace:true,
                },
                pipelinestage: {
                    required: true,
                },
                country: {
                    required: true,
                },
                city: {
                    required: true,
                },
                numberofteachers: {
                    required: true,
                    onlynumeric:true,
                    range: [0, 10000],
                },
                numberofstudents: {
                    required: true,
                    onlynumeric:true,
                    range: [0, 100000],
                },
                contractsigndate: {
                    required: true,
                },
                servicesoptedfor: {
                    required: true,
                },
                schoolcurriculum: {
                    required: true,
                },
                note: {
                    // required: true,
                },
                typeoforganisation: {
                    required: true,
                },
                currentgrade: {
                    // required: true,
                },
                sectionsname: {
                    required: true,
                    nowhitespace:true,
                    onlyalphabets:true,
                },

                schoolownername: {
                    required: true,
                    namefield:true,
                    maxlength:40,
                    nowhitespace:true,
                },
                emailowner: {
                    required: true,
                    email:true,
                },
                ownerphone: {
                    required: true,
                },
                leadcontactname: {
                    required: true,
                    namefield:true,
                    maxlength:40,
                    nowhitespace:true,
                },
                leadphone: {
                    required: true,
                },
                leademail: {
                    required: true,
                    email:true,
                }

            },
            messages: {
                organisationname:{
                    maxlength:"Only 70 characters allowed",
                    nowhitespace:"No consecutive spaces",
                },
                numberofteachers:{
                    range:"between 1 and 100000.",
                    nowhitespace:"No consecutive spaces",
                },
                numberofstudents:{
                    range:"between 1 and 10000.",
                    nowhitespace:"No consecutive spaces",
                },
                schoolownername:{
                    nowhitespace:"No consecutive spaces",
                },
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
        // Teacher Form 
        $("#teachers").validate({
            rules: {
                teachername: {
                    required: true,
                    namefield:true,
                    nowhitespace:true,

                },
                selectschool: {
                    required: true,
                },
                yof: {
                    required: true,
                },
                qualifications: {
                    required: true,
                    nowhitespace:true,
                    qualifyfield:true,
                },
                tgrades: {
                    required: true,
                }


            },
            messages: {

                qualifications: {
                    nowhitespace:"Multiple Spaces not Allowed",

                }
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
        //Add Subjects
        $("#addsubjects").validate({
            rules: {
                selectschool: {
                    required: true,
                },
                subjects: {
                    required: true,
                    nowhitespace:true,
                },
                subjectname: {
                    required: true,
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
        // Teacher Form 
        $("#coach").validate({
            rules: {
                coachname: {
                    required: true,
                    namefield:true,
                    nowhitespace:true,
                },
                dob: {
                    required: true,
                    nowhitespace:true,
                },
                joiningdate: {
                    required: true,
                    nowhitespace:true,
                    onlynumeric:false,
                },
                startingsalary: {
                    required: true,
                    onlynumeric:true,
                    nowhitespace:true,
                },
                currentsalary: {
                    required: true,
                    onlynumeric:true,
                    nowhitespace:true,
                },
                qualifications:{
                    //required: true,
                    qualifyfield:true,
                }


            },
            messages: {

                qualifications: {
                    nowhitespace:"Multiple Spaces not Allowed",

                }
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
        // Goals Form 
        $("#goals").validate({
            rules: {
                goalname: {
                    required: true,
                    goalfield:true,
                    nowhitespace:true,

                },
                successcriteria: {
                    // required: true,
                }

            },
            messages: { 
                qualifications: {
                    nowhitespace:"Multiple Spaces not Allowed",
                },
                goalname:{
                    goalfield:" Letters Only",
                    nowhitespace:"No consecutive spaces",
                }

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
        // Goals Form 
        $("#courses").validate({
            rules: {
                coursename: {
                    required: true,
                    coursefield:true,
                    nowhitespace:true,
                }
            },
            messages: {
                qualifications: {
                    nowhitespace:"Multiple Spaces not Allowed",

                }
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
        // Goals Form 
        $("#program").validate({
            rules: {
                programname: {
                    required: true,
                    programfield:true,
                    nowhitespace:true,
                    //maxlength:100,
                }
            },
            messages: {
                qualifications: {
                    nowhitespace:"Multiple Spaces not Allowed",

                }
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
        // Goals Form 
        $("#assignprogram").validate({
            rules: {
                programname: {
                    required: true,
                },
                selectschool:{
                    required: true,
                },
                selectcoach:{
                    required: true,
                },
                startdate:{
                    required: true,
                },
                enddate:{
                    required: true,
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


        //Add Cohort
        $("#cohort").validate({
            rules: {
                cohort: {
                    required: true,
                    nowhitespace:true,
                },
                multiselectteacherto: {
                    required: true,
                },
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

        //Add Cohort
        $("#createuser").validate({
            rules: {
                username: {
                    required: true,
                    namefield:true,
                    nowhitespace:true,
                },
                userphone:{
                    required: true,
                },
                useremail: {
                    required: true,
                    nowhitespace:true,
                    email:true,
                },
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

        //Add skilltree
        $("#skilltree").validate({
            rules: {
                skilltreename: {
                    required: true,
                    namefield:true,
                    nowhitespace:true,
                },
            },
            messages: {
                skilltreename:{
                    nowhitespace:"No consecutive spaces",
                },
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
    return{
        disableCopyPaste:disableCopyPaste,
        validateForms:validateForms,
        showHidePassword:showHidePassword,
        formSubmittion:formSubmittion,

    };
})();
$(document).ready(function($) {
    form_Elements.disableCopyPaste();
    form_Elements.validateForms();
    form_Elements.showHidePassword();
    form_Elements.formSubmittion();


});
$(window).keydown(function(event){
    if(event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
});
