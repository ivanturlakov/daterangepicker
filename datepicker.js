$(document).ready(function() {
    $( "#datepicker" ).daterangepicker({
        dateFormat: 'd, M yy',
        altFormat: 'd, M yy',
        initialText: 'Select date range...',
        datepickerOptions: {
//             minDate: 0,
//             maxDate: null,
//             numberOfMonths : 2,
        },
        applyButtonText: "Confirm",
        rangeSplitter: '<span>|</span>',
    });

    let datePickerHeader = `
        <div class="date-picker-header">
            <h3>Select Date</h3>
            <p class="range-preview">Start Date <span>|</span> End Date</p>
        </div>
    `
    $(".comiseo-daterangepicker.ui-widget.ui-widget-content").append(datePickerHeader);

    // Disable confirm button
    $('.apply-button').prop('disabled', true);

    // Scroll issue fix
    $("#datepicker").on('daterangepickeropen', function() {
        $('body').addClass('noscroll');
    });
    $("#datepicker").on('daterangepickerclose', function() {
        $('body').removeClass('noscroll');
    });
});
