$(document).ready(function () {
    $("#btm_clk").click(function () {
        $(".psg_dls").toggle(1000);
    });
    $(".btn_done").click(function () {

        var total = all_pesenger();
        $("#btm_clk").val('Passengers ' + total);
        $(".psg_dls").hide(1000);
    });

    $(".se-psng-cont").click(function () {
        $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
        $(".psg_dls").slideToggle("slow");
    });

    $(".se-trip ul li a").click(function () {
        $(".se-trip ul li a").removeClass("active");
        $(this).addClass("active");
    });
    show_date($("#hfTripType").val());
    $('body').click(function () {

        if ($("#passengerPopup").length != 0) {
            if (!$('#passengerPopup').is(':hover')) {
                $('.psg_dls').hide();
            }
        }
    });

});

function show_date(data) {
    $("#hfTripType").val(data);
    if (data == '1') {
        $("#ret-date").addClass("ret-date-act");
        $(".se-grp-form").hide();
        $("#divReturn").hide();
        $(".se-box").addClass("one-way");
        $(".se-box").removeClass("ret-way");
        $(".se-box").removeClass("grp-way");
    } else if (data == '2') {
        $("#ret-date").removeClass("ret-date-act");
        $(".se-grp-form").hide();
        $("#divReturn").show();
        $(".se-box").addClass("ret-way");
        $(".se-box").removeClass("one-way");
        $(".se-box").removeClass("grp-way");
    } else if (data == '4') {
        $("#ret-date").removeClass("ret-date-act");
        $(".se-grp-form").show();
        $(".se-box").addClass("grp-way");
        $(".se-box").removeClass("ret-way");
        $(".se-box").removeClass("one-way");
    }
}
function show_date_new(data) {
    $("#hfTripType").val(data);
    if (data == '1') {
        $("#divReturn").hide();
        //$("#mod-onew-bok").addClass('active');
        //$("#mod-ret-bok").removeClass('active');
    } else if (data == '2') {
        $("#divReturn").show();
        //$("#mod-ret-bok").addClass('active');
        //$("#mod-onew-bok").removeClass('active');
    } else if (data == '4') {
        $("#ret-date").removeClass("ret-date-act");
        $(".se-grp-form").show();
        $(".se-box").addClass("grp-way");
        $(".se-box").removeClass("ret-way");
        $(".se-box").removeClass("one-way");
    }
}
function ChangeCabin(data) {
    $(".se-cls-wr ul li").removeClass("selected");
    $("#liCabin" + data).addClass("selected");
    $("#Cabin").val(data);
    setPaxDetails();
}

var orgIndex = 0;
var destIndex = 0;
var selectFrom = false;
var selectTo = false;
function monkeyPatchAutocomplete() {
    var oldFn = $.ui.autocomplete.prototype._renderItem;
    $.ui.autocomplete.prototype._renderItem = function (ul, item) {
        var re = new RegExp("^" + this.term, "i");
        var t = item.label.replace(re, "<span>" + this.term + "</span>");
        return $("<li></li>").data("item.autocomplete", item).append("<a>" + t + "</a>").appendTo(ul)
    }
}

$(document).ready(function () {

    monkeyPatchAutocomplete();
    var actionUrl = '/DataServices/GetCity';

    $('#fromCity').autocomplete({
        selectFirst: true,
        highlight: true,
        source: function (request, response) {
            var url = actionUrl + "/" + request.term;
            $.ajax({
                url: url,
                type: 'GET',
                success: function (data) {
                    orgIndex = 0;
                    response($.map(data, function (item) {
                        return {
                            label: ("" + item.airportCode + " - " + item.cityName + " - " + item.airportName + (item.stateName == "" ? "" : (" - " + item.stateName)) + " - " + item.countryName)
                        }
                    }));
                }
            })
        },
        open: function (event, ui) { selectFrom = true; },
        select: function (event, ui) {
            $("#hffromCity").val(ui.item.label);
            var selData = ui.item.label.split('-')
            $(this).val(selData[1].trim());
            //$("#spanDep").html(selData[0].trim());
            orgIndex = 1;
            selectFrom = false;
            return false;
        },
        close: function (event, ui) {
            selectFrom = false;
        },
        minLength: 2,
        autoFocus: true
    }).blur(function () {
        if (selectFrom) {
            $("#fromCity").val($('ul.ui-autocomplete li:first a').text());
            orgIndex = 1;
        }
    });

    $("#toCity").autocomplete({
        selectFirst: true,
        source: function (request, response) {
            var url = actionUrl + "/" + request.term;
            $.ajax({
                url: url,
                type: 'GET',
                success: function (data) {
                    destIndex = 0;
                    response($.map(data, function (item) {
                        return {
                            label: ("" + item.airportCode + " - " + item.cityName + " - " + item.airportName + (item.stateName == "" ? "" : (" - " + item.stateName)) + " - " + item.countryName)
                        }
                    }));
                }
            })
        },
        open: function (event, ui) {
            selectTo = true;
        },
        select: function (event, ui) {
            $("#hftoCity").val(ui.item.label);
            var selData = ui.item.label.split('-')
            $(this).val(selData[1].trim());
            //$("#spanRet").html(selData[0].trim());
            destIndex = 1;
            selectTo = false;
            return false;
        },
        close: function (event, ui) {
            selectTo = false;
        },
        minLength: 2,
        autoFocus: true
    }).blur(function () {
        if (selectTo) {
            $("#toCity").val($('ul.ui-autocomplete li:first a').text());
            destIndex = 1;
        }
    });
});


$(document).ready(function () {

    $("#departure_date").datepicker({
        numberOfMonths: $(window).width() < 765 ? 1 : 2,
        dateFormat: "d M y",
        minDate: minDate,
        maxDate: maxDate,
        //showButtonPanel: true,
        onClose: function () {
            var dateDepMin = $('#departure_date').datepicker("getDate");
            if (dateDepMin == null) {
                dateDepMin = minDate;
            }
            var dateRetMin = $('#return_date').datepicker("getDate");
            var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
            if (dateRetMin != null) {
                $("#return_date").datepicker("change", {
                    minDate: new Date(dateDepMin)
                });
                var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                if (dMin > rMin) {
                    $('#return_date').val($.datepicker.formatDate('d M y', new Date(dMin)));
                    $("#return_date").focus();
                }
            }
            else {
                if ($('#departure_date').val() != "") {
                    $('#return_date').val($.datepicker.formatDate('d M y', new Date(dMin)));
                    $("#return_date").focus();
                }
            }
        }
    });
    $("#return_date").datepicker({
        numberOfMonths: $(window).width() < 765 ? 1 : 2,
        dateFormat: "d M y",
        minDate: minDate,
        maxDate: maxDate,
        //showButtonPanel: true,
        onClose: function () {
            var dateDepMin = $('#departure_date').datepicker("getDate");
            if (dateDepMin == null) {
                dateDepMin = minDate;
            }
            var dateRetMin = $('#return_date').datepicker("getDate");
            var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
            if (dateRetMin != null) {
                var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                if (dMin > rMin) {
                    alert('Returning date always equal or greater than departure date!');
                    $("#return_date").val('');
                }
            }
        }
    });

});

$(document).ready(function () {
    $("#btm_clkH").click(function () {
        $(".psg_dls").toggle(1000);
    });
    $(".btn_doneH").click(function () {

        var total = all_pesenger();
        $("#btm_clkH").val('Adults/child ' + total);
        $(".psg_dls").hide(1000);
    });
});


function setPaxDetails() {
    var adult = parseInt($("#Adult").val());
    var child = parseInt($("#Child").val());
    var infant = parseInt($("#Infant").val());
    var totpax = adult + child + infant;
    var cabin = $("#Cabin").val();
    var cabinText = "";
    if (cabin == "1") {
        cabinText = "Economy";
    }
    if (cabin == "2") {
        cabinText = "Premium Economy";
    }
    if (cabin == "3") {
        cabinText = "Business";
    }
    if (cabin == "4") {
        cabinText = "First";
    }
    //$("#txtPaxDetail2").val(totpax.toString() + " Traveler, " + cabinText);
    //$("#txtPaxDetail1").innerHTML = "Traveler";
    document.getElementById("txtPaxDetails").innerHTML = totpax.toString() + " Traveler, " + cabinText;
}
function add_rt_passenger() {
    var infow = $("#Infant").val();
    var childow = $("#Child").val();
    var adultow = $("#Adult").val();
    var total = +infow + +childow + +adultow;
    return total;
}

function all_pesenger() {

    var infow = $("#Infant").val();
    var childow = $("#Child").val();
    var adultow = $("#Adult").val();
    var total = +infow + +childow + +adultow;
    return total;
}

function increase_adult_rt() {
    var adult_pass = add_rt_passenger();
    var adult_rt = document.getElementById("Adult").value;
    if (adult_pass < 9) {
        var k = parseInt(adult_rt) + 1;
        document.getElementById("Adult").value = k;
    }
    setPaxDetails();

}

function decrease_adult_rt() {
    var adult_rt = document.getElementById("Adult").value;
    var Infant = document.getElementById("Infant").value;
    if (adult_rt != '1') {
        var k = parseInt(adult_rt) - 1;
        document.getElementById("Adult").value = k;

        if (Infant >= adult_rt) {
            var k = parseInt(Infant) - 1;
            document.getElementById("Infant").value = k;
        }

    }
    setPaxDetails();
}

function increase_child_rt() {
    var adult_pass = add_rt_passenger();
    var adult_rt = document.getElementById("Child").value;
    if (adult_pass < 9) {

        var k = parseInt(adult_rt) + 1;
        document.getElementById("Child").value = k;
    }
    setPaxDetails();

}

function decrease_child_rt() {
    var adult_rt = document.getElementById("Child").value;
    if (adult_rt != '0') {
        var k = parseInt(adult_rt) - 1;
        document.getElementById("Child").value = k;
    }
    setPaxDetails();
}

function increase_infant_rt() {

    var total_pass = add_rt_passenger();

    var adult_rt = document.getElementById("Adult").value;
    var Infant = document.getElementById("Infant").value;

    if (total_pass < 9 && Infant < adult_rt) {
        var k = parseInt(Infant) + 1;
        document.getElementById("Infant").value = k;
    }
    setPaxDetails();

}

function decrease_infant_rt() {
    var adult_rt = document.getElementById("Infant").value;
    if (adult_rt != '0') {
        var k = parseInt(adult_rt) - 1;
        document.getElementById("Infant").value = k;
    }
    setPaxDetails();
}

function Resolution() {
    if (window.innerWidth < 780) {
        return 1;
    } else {
        return 2;
    }
}

function setProgressBar() {
    
    var validator = $("#My_FlightSearch").validate({
        showErrors: function () {
            if (this.settings.highlight) {
                for (var i = 0; this.errorList[i]; ++i) {
                    this.settings.highlight.call(this, this.errorList[i].element,
                        this.settings.errorClass, this.settings.validClass);
                }
            }
            if (this.settings.unhighlight) {
                for (var i = 0, elements = this.validElements() ; elements[i]; ++i) {
                    this.settings.unhighlight.call(this, elements[i],
                        this.settings.errorClass, this.settings.validClass);
                }
            }
        },
        rules: {
            fromCity: {
                required: true,
                minlength: 3
            },
            toCity: {
                required: true,
                minlength: 3
            },
            departure_date: {
                required: true,
            },
            return_date: {
                required: {
                    depends: function (element) {
                        if ($('#hfTripType').val() == '2') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            },
            Adult: {
                required: true,
                range: [1, 9]

            },
        },
        errorElement: "span",
        messages: {
            txtFrom: {
                required: "Please Enter Departure Airport or City IATA Code",
                minlength: "Please Enter Departure Airport or City IATA Code"
            },
            txtTo: {
                required: "Please Enter Destination Airport or City IATA Code",
                minlength: "Please Enter Destination Airport or City IATA Code",

            },
            departure_date: {
                required: "Please enter a valid travel date.",

            },
            return_date: {
                required: "Please enter a valid return date.",
            },
        }
    });
    if (validator.form()) {
        
        var validationFlag = true;
        var strError = "";
        try {
            if ($("#fromCity").val().trim().length < 3) {
                strError += " Please Enter Departure Airport or City IATA Code";
                validationFlag = false;
            }
            if ($("#toCity").val().trim().length == 0 || $("#toCity").val().trim().length < 3) {
                strError += " Please Enter Destination Airport or City IATA Code";
                validationFlag = false;
            }
            if ($.trim($("#fromCity").val()) == $.trim($("#toCity").val()) && ($.trim($("#toCity").val()).length > 0 || $.trim($("#fromCity").val()).length > 0)) {
                strError += " Departure and Destination City Code can't be same !";
                validationFlag = false;
            }
            if ($("#departure_date").val() == "") {
                validationFlag = false;
                strError += "<p>&raquo; Departure date can't be blank!</p>";
            }

            if ($("#hfTripType").val() == "2") {
                if ($("#return_date").val() == "") {
                    validationFlag = false;
                    strError += "<p>&raquo; Return date can't be blank!</p>";
                }
                else {
                    //var dd = $("#departure_date").val().split('-');
                    //var dDate = new Date(parseInt(dd[0], 10), parseInt(dd[1], 10) - 1, parseInt(dd[2], 10));

                    //var rd = $("#return_date").val().split('-');
                    //var rDate = new Date(parseInt(rd[0], 10), parseInt(rd[1], 10) - 1, parseInt(rd[2], 10));
                    //if (dDate > rDate) {
                    //    strError += "<p>&raquo; Returning date always equal or greater than departure date!</p>";
                    //    validationFlag = false;
                    //}
                }
            }

            if (!validationFlag) {
                alert(strError);
            }
        }
        catch (err) {
            alert(err.toString());
            validationFlag = false;
        }
        if (validationFlag == true) {
            //setLocalStorage();

            //$("#FromAirport").html($("#fromCity").val().split('-')[0]);
            //$("#FromAirportDetails").html($("#fromCity").val());
            //$("#FromDate").html($("#departure_date").val());
            //$("#ToAirport").html($("#toCity").val().split('-')[0]);
            //$("#ToAirportDetails").html($("#toCity").val());
            //$("#ToDate").html($("#hfTripType").val() == "2"?$("#return_date").val():"One Way");

            //$("#FcMainDiv").hide();
            //$("#FlightsSearchingProgressBar").show();
        }
        return validationFlag;
    }
    else
        return false;
}