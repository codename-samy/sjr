var numberOfMonths = 2;
var dateFormat = "mm/dd/yy"
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    numberOfMonths = 1;

}


$(function () {

    if ($("#modify").val() == "2") {

        dateFormat = "dd M yy";
    }

    $('#Fly_depdate_mobb').datepicker({
        minDate: 0,
        changeMonth: false,
        dateFormat: dateFormat,
        numberOfMonths: numberOfMonths,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        onClose: function (selectedDate) {
            // alert("hi");
            $("#Fly_retate_mobb").datepicker("option", "minDate", selectedDate);
            //if ($("#hfTripType").val() == "true") {
            //    $("#Fly_retate_mobb").datepicker("option", "minDate", selectedDate);


            //}

        },
        onSelect: function (selectedDate) {


            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sep";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";

            var weekday = new Array();
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday ";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var dayString = new Date(selectedDate);

            var datearray;
            if (selectedDate.indexOf("/") != -1) {


                datearray = selectedDate.split('/');

                if ((dayString.getMonth() + 1).toString().length == "1") {
                    $("#hfFromDate").val(datearray[1] + "/" + "0" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }
                else {
                    $("#hfFromDate").val(datearray[1] + "/" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }


                $("#Fly_depdate_Text").val("" + datearray[1] + "" + " " + month[dayString.getMonth()] + ", " + datearray[2]);




            }

            else {

                datearray = selectedDate.split(' ');
                if ((dayString.getMonth() + 1).toString().length == "1") {
                    $("#hfFromDate").val(datearray[0] + "/" + "0" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }
                else {
                    $("#hfFromDate").val(datearray[0] + "/" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }

            }
            $("#Fly_retate_mobb").datepicker("option", "minDate", selectedDate);
            $('.close').trigger("click");

        }

    });

    $('#Fly_retate_mobb').datepicker({
        minDate: 0,
        changeMonth: false,
        dateFormat: dateFormat,
        numberOfMonths: numberOfMonths,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',

        onSelect: function (selectedDate) {


            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sep";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";

            var weekday = new Array();
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday ";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var dayString = new Date(selectedDate);

            var datearray;
            if (selectedDate.indexOf("/") != -1) {

                datearray = selectedDate.split('/');

                if ((dayString.getMonth() + 1).toString().length == "1") {

                    $("#hfToDate").val(datearray[1] + "/" + "0" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());

                }
                else {
                    $("#hfToDate").val(datearray[1] + "/" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }




                $("#Fly_retdate_Text").val("" + datearray[1] + "" + " " + month[dayString.getMonth()] + ", " + datearray[2]);




            }

            else {

                datearray = selectedDate.split(' ');
                if ((dayString.getMonth() + 1).toString().length == "1") {
                    $("#hfToDate").val(datearray[0] + "/" + "0" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }
                else {
                    $("#hfToDate").val(datearray[0] + "/" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }

            }
            $('.close').trigger("click");
        }

    });


    $("#Fly_dep_datepickerid").click(function () {
        $("#Fly_depdate").datepicker("show");
    });

    $("#Fly_ret_datepickerid").click(function () {
        if ($("#hfTripType").val() == "true") {
            $("#Fly_retdate").datepicker("show");
        }

    });


    $('#Fly_depdate').datepicker({
        minDate: 0,
        changeMonth: false,
        dateFormat: dateFormat,
        numberOfMonths: numberOfMonths,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        onClose: function (selectedDate) {


            if ($("#hfTripType").val() == "true")
            {
                $("#Fly_retdate").datepicker("option", "minDate", selectedDate);

                if ($("#modify").val() == "1") {
                    $("#Fly_ret_datepickerid").trigger("click");
                }
                else {
                    $("#Fly_retdate").focus();

                }
            }

        },
        onSelect: function (selectedDate) {


            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sep";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";

            var weekday = new Array();
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday ";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var dayString = new Date(selectedDate);

            var datearray;
            if (selectedDate.indexOf("/") != -1) {

                datearray = selectedDate.split('/');

                if ((dayString.getMonth() + 1).toString().length == "1") {
                    $("#hfFromDate").val(datearray[1] + "/" + "0" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }
                else {
                    $("#hfFromDate").val(datearray[1] + "/" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }
                $("#Fly_depdate_val").html("<big>" + datearray[1] + "</big>" + " " + month[dayString.getMonth()] + "'" + datearray[2].replace("2022", "22"));


               // $("#Fly_dep_day").text(weekday[dayString.getDay()]);

                $("#Fly_ret_datepickerid").focus(200);
            }

            else {

                datearray = selectedDate.split(' ');
                if ((dayString.getMonth() + 1).toString().length == "1") {
                    $("#hfFromDate").val(datearray[0] + "/" + "0" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }
                else {
                    $("#hfFromDate").val(datearray[0] + "/" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }

            }

            //  $("#ret_datepickerid").trigger("click");
            //  $("#retdate").datepicker("show");
            //$("#ret_datepickerid").datepicker();
            //  $("#retdate").focus(200);

        }

    });

    $("#Fly_retdate").datepicker({
        minDate: 0,
        defaultDate: "+1w",
        dateFormat: dateFormat,
        numberOfMonths: numberOfMonths,
        changeMonth: false,

        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        onClose: function (selectedDate) {
            //$("#Fly_depdate").datepicker("option", "maxDate", selectedDate);
        }
        ,
        onSelect: function (selectedDate) {


            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sep";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";

            var weekday = new Array();
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday ";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

            var dayString = new Date(selectedDate);

            var datearray;
            if (selectedDate.indexOf("/") != -1) {
                datearray = selectedDate.split('/');

                if ((dayString.getMonth() + 1).toString().length == "1") {

                    $("#hfToDate").val(datearray[1] + "/" + "0" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());

                }
                else {
                    $("#hfToDate").val(datearray[1] + "/" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }

                $("#Fly_retdate_val").html("<big>" + datearray[1] + "</big>" + " " + month[dayString.getMonth()] + "'" + datearray[2].replace("2022", "22"));
              //  $("#Fly_ret_day").text(weekday[dayString.getDay()]);
            }

            else {
                datearray = selectedDate.split(' ');

                if ((dayString.getMonth() + 1).toString().length == "1") {

                    $("#hfToDate").val(datearray[0] + "/" + "0" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());

                }
                else {
                    $("#hfToDate").val(datearray[0] + "/" + (dayString.getMonth() + 1) + "/" + dayString.getFullYear());
                }


            }


        }

    });
    









});