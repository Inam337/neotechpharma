var masked = (function() {
    // Phone Number MaskInput Function
    function phoneNumberMaskInput() {
        $(function($){
            $(".phonemaskinput").mask("(999) 999-9999",{placeholder:"(000) 000-0000"});
        });
        $(function($){
            $(".contactnumbermask").mask("(999) 999-9999",{placeholder:"(000) 000-0000"});
        });
        
        $(function($){
            $(".userphone").mask("(999) 999-9999",{placeholder:"(000) 000-0000"});
        });
        
    }
    //Datepicker Number MaskInput Function
    function datepickerNumberMaskInput() {
        $(function($){
            $(".datemask").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
        });
    }
    return{
        phoneNumberMaskInput:phoneNumberMaskInput,
        datepickerNumberMaskInput:datepickerNumberMaskInput
        
    };
})();
$(document).ready(function($) {
    masked.phoneNumberMaskInput();
    masked.datepickerNumberMaskInput();
});
