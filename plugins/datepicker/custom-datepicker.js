/*$(document).ready(function(){
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    var checkin = $('#startdate').datepicker({
        onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
        }
        checkin.hide();
        $('#enddate')[0].focus();
    }).data('datepicker');
    var checkout = $('#enddate').datepicker({
        onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        checkout.hide();
    }).data('datepicker');

    // Enabling calendar on icon click
    $('.calender-icon').click(function (e) {
        $(this).prev('input').focus();
    });
    $('#dob').datepicker({
        onRender: function(date) {
            return date.valueOf() > now.valueOf() ? 'disabled' : '';
        },

    });
    $('#joiningdate').datepicker({
        onRender: function(date) {
            return date.valueOf() > now.valueOf() ? 'disabled' : '';
        }
    });
    $('#contractsigndate').datepicker();
    $("#dob").on("focusout",function(){
        //  $('#dob').val('');
        if($('.datepicker-days .day').hasClass("active")){
            $('.datepicker-days .day').removeClass("active");
        }
        $('#dob').data('datepicker').date = null;
    });
    $("#joiningdate").on("focusout",function(){
        // $('#joiningdate').val('');
        if($('.datepicker-days .day').hasClass("active")){
            $('.datepicker-days .day').removeClass("active");
        }
        $('#joiningdate').data('datepicker').date = null;
    });
    $("#joiningdate").on("focusout",function(){
        //$('#joiningdate').val('');
        if($('.datepicker-days .day').hasClass("active")){
            $('.datepicker-days .day').removeClass("active");
        }
        $('#joiningdate').data('datepicker').date = null;
    });

   /* var GivenDate = $('#dob').val();
    var CurrentDate = new Date();
    GivenDate = new Date(GivenDate);
    console.log(GivenDate);
    if(GivenDate > CurrentDate){
        $('.custom-alert').removeClass("hide-box");
    }else{
      //  alert('Given date is not greater than the current date.');
    }




});*/


$(document).ready(function () {   
    //DatePicker
    /*$('.datepicker').datepicker({
        container:'.datepicker-container'
    });*/
    $('#dob').datepicker('setEndDate', 'd');
    $('#joiningdate').datepicker('setEndDate', 'd');
    $('#contractsigndate').datepicker('setEndDate', 'd');
    //('#startdate').datepicker('setStartDate','d');
    //$('#enddate').datepicker('setEndDate','d');
    // Enabling calendar on icon click
    $('.calender-icon').click(function (e) {
        $(this).prev('input').focus();
    });
    // set default dates
var start = new Date();
// set end date to max one year period:
var end = new Date(new Date().setYear(start.getFullYear()+1));

$('#startdate').datepicker({
    startDate : start,
    endDate   : end
// update "toDate" defaults whenever "fromDate" changes
}).on('changeDate', function(){
    // set the "toDate" start to not be later than "fromDate" ends:
    $('#enddate').datepicker('setStartDate', new Date($(this).val()));
}); 

$('#enddate').datepicker({
    startDate : start,
    endDate   : end
// update "fromDate" defaults whenever "toDate" changes
}).on('changeDate', function(){
    // set the "fromDate" end to not be later than "toDate" starts:
    $('#startdate').datepicker('setEndDate', new Date($(this).val()));
});
});


