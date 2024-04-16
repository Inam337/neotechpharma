$(document).ready(function () {
    var table = $('#table1').DataTable({
        paging: true,
        searching: false,
        responsive: true,
        order: [],
        autoWidth: false,
        "tabIndex": -1,
       aoColumnDefs: [{bSortable: false,aTargets: [ -1 ]}],
        
        "initComplete": function (settings, json) {
            $('.table-wrapper').addClass('loaded');
        },
        dom: '<"table-top"t><"table-controls"flip>'
    });
    var table = $('#gradesections').DataTable({
        //paging: true,
        searching: false,
        responsive: true,
        order: [],
        autoWidth: false,
        "tabIndex": -1,
        aoColumnDefs: [{bSortable: false,aTargets: [ -1 ]}],
        
        "initComplete": function (settings, json) {
            $('.table-wrapper').addClass('loaded');
        },
        dom: '<"table-top"t>'
    });
     var table = $('#subjectlist').DataTable({
        //paging: true,
        searching: false,
        responsive: true,
        order: [],
        autoWidth: false,
        "tabIndex": -1,
        aoColumnDefs: [{bSortable: false,aTargets: [ -1 ]}],
        
        "initComplete": function (settings, json) {
            $('.table-wrapper').addClass('loaded');
        },
        dom: '<"table-top"t>'
    });
    //displaytable
    var table = $('.displaytable').DataTable({
        //paging: true,
        searching: false,
        responsive: true,
        order: [],
        autoWidth: false,
        "tabIndex": -1,
        //aoColumnDefs: [{bSortable: false,aTargets: [ -1 ]}],
        
        "initComplete": function (settings, json) {
            $('.table-wrapper').addClass('loaded');
        },
        dom: '<"table-top"t>'
    });
    
    $('.paginate_button').on('click', function (e) {
        $('.dataTables_processing').show()
        setTimeout(function () {
            $('.dataTables_processing').hide()
        }, 1000)
    });
});
