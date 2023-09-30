

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
        // showButtonPanel: true,
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
            setLocalStorage();
        }
        return validationFlag;
    }
    else
        return false;
}



function setLocalStorage() {

    try {
        var seg = [];
        var s = {
            originAirport: getAirportCode($("#fromCity").val().trim()),
            destinationAirport: getAirportCode($("#toCity").val().trim()),
            originAirportFull: $("#fromCity").val().trim(),
            destinationAirportFull: $("#toCity").val().trim(),
            travelDate: $("#departure_date").val().trim()
        }
        seg.push(s);
        if ($("#hfTripType").val() == "2") {
            var s1 = {
                originAirport: getAirportCode($("#toCity").val().trim()),
                destinationAirport: getAirportCode($("#fromCity").val().trim()),
                originAirportFull: $("#toCity").val().trim(),
                destinationAirportFull: $("#fromCity").val().trim(),
                travelDate: $("#return_date").val().trim()
            }
            seg.push(s1);
        }
        var itin = {
            segment: seg,
            searchDirectFlight: $("#isDirectFlight").is(':checked'),
            tripType: $("#hfTripType").val(),
            adults: $("#Adult").val(),
            child: $("#Child").val(),
            infants: $("#Infant").val(),
            cabinType: $("#Cabin").val(),
            airline: ""
        }
        var itinerary = [];
        itinerary.push(itin)
        if (localStorage.getItem("sdfghjklwertyusdfghjkdfg") != null) {
            var ldata = JSON.parse(localStorage.getItem("sdfghjklwertyusdfghjkdfg"));
            var ctr = 0;
            for (var i = 0; i < ldata.length && ctr < 2; i++) {
                if (itin.segment[0].originAirport != ldata[i].segment[0].originAirport || itin.segment[0].destinationAirport != ldata[i].segment[0].destinationAirport || itin.segment[0].travelDate != ldata[i].segment[0].travelDate || itin.tripType != ldata[i].tripType) {
                    itinerary.push(ldata[i]);
                    ctr++;
                }
                else if (itin.tripType == ldata[i].tripType && ldata[i].tripType.tripType == "2") {
                    if (itin.segment[1].travelDate != ldata[i].segment[1].travelDate) {
                        itinerary.push(ldata[i]);
                        ctr++;
                    }
                }
            }
        }
        localStorage.setItem("sdfghjklwertyusdfghjkdfg", JSON.stringify(itinerary));

    } catch (e) {

    }
}
function setSearchEngine() {

    try {
        if ($("#HomePageindex").length != 0) {
            if (localStorage.getItem("sdfghjklwertyusdfghjkdfg") != null) {
                var itinerary = JSON.parse(localStorage.getItem("sdfghjklwertyusdfghjkdfg"));
                $("#fromCity").val(itinerary[0].segment[0].originAirportFull);
                $("#toCity").val(itinerary[0].segment[0].destinationAirportFull);

                var dd = itinerary[0].segment[0].travelDate.split('/');
                if (dd.length == 1)
                    dd = itinerary[0].segment[0].travelDate.split('-');
                var dDate = new Date(parseInt(dd[0], 10), parseInt(dd[1], 10) - 1, parseInt(dd[2], 10));
                if (minDate < dDate) {
                    $("#departure_date").val(itinerary[0].segment[0].travelDate);
                }
                if (itinerary[0].segment.length == 2) {
                    var dd1 = itinerary[0].segment[1].travelDate.split('/');
                    if (dd1.length == 1)
                        dd1 = itinerary[0].segment[1].travelDate.split('-');
                    var rDate = new Date(parseInt(dd1[0], 10), parseInt(dd1[1], 10) - 1, parseInt(dd1[2], 10));
                    if (dDate < rDate) {
                        $("#return_date").val(itinerary[0].segment[1].travelDate);
                    }
                    else {
                        var rd = $("#departure_date").val().split('/');
                        if (rd.length == 1)
                            rd = $("#departure_date").val().split('-');
                        var dDate = new Date(parseInt(rd[0], 10), parseInt(rd[1], 10) - 1, parseInt(rd[2], 10));
                        dDate.setDate(dDate.getDate() + 7);
                        var month = (dDate.getMonth() + 1)
                        var strMonth = month <= 9 ? ("0" + month) : month;
                        $("#return_date").val(dDate.getFullYear() + "-" + strMonth + "-" + dDate.getDate());
                    }
                }
                else {
                    var rd = $("#departure_date").val().split('/');
                    if (rd.length == 1)
                        rd = $("#departure_date").val().split('-');
                    var dDate = new Date(parseInt(rd[0], 10), parseInt(rd[1], 10) - 1, parseInt(rd[2], 10));
                    dDate.setDate(dDate.getDate() + 7);
                    var month = (dDate.getMonth() + 1)
                    var strMonth = month <= 9 ? ("0" + month) : month;
                    $("#return_date").val(dDate.getFullYear() + "-" + strMonth + "-" + dDate.getDate());
                }
                $("#Adult").val((itinerary[0].adults != null && itinerary[0].adults != undefined) ? itinerary[0].adults : "1");
                $("#Child").val((itinerary[0].child != null && itinerary[0].child != undefined) ? itinerary[0].child : "0");
                $("#Infant").val((itinerary[0].infants != null && itinerary[0].infants != undefined) ? itinerary[0].infants : "0");
                $("#Cabin").val((itinerary[0].cabinType != null && itinerary[0].cabinType != undefined) ? itinerary[0].cabinType : "1");
                $("#hfTripType").val(itinerary[0].tripType);

                ChangeTripType(itinerary[0].tripType);

                var str = "";
                for (var i = 0; i < itinerary.length; i++) {
                    str += "<li onclick=\"SearchFlightFromHistory(" + i + ")\" style='margin-left: 10px;'><a href='#' style='padding:5px;border-bottom:dashed 1px #ccc;'>";
                    str += "<span style='color:#1e3266; font-size:14px; font-weight:bold; '><i class='fa fa-plane'></i>" + itinerary[i].segment[0].originAirport + " - " + itinerary[i].segment[0].destinationAirport + "</span><span style='font-size:11px;color:#808080; padding-left:14px;'>(" + (itinerary[i].segment.length == 2 ? "Round Trip" : "One Way") + ")</span><i  style='padding-left:25px;'class='fa fa-angle-right'></i><p style='padding-left:20px;'>" + itinerary[i].segment[0].travelDate + (itinerary[i].segment.length == 2 ? (" - " + itinerary[i].segment[1].travelDate + " ") : "") + "</p></a></li>";

                }
                $("#totRecentSearch").html(itinerary.length);

                if (itinerary.length > 0) {
                    $("#totRecentSearch").addClass('Scratchpad');
                }
                else {
                    $("#totRecentSearch").removeClass('Scratchpad');
                }
                $("#MySearches").html(str);
                $("#SearchPad").show();
            }
            else {
                $("#SearchPad").hide();
            }
        }
        else {
            $("#SearchPad").hide();
        }

    } catch (e) {

    }
}
function SearchFlightFromHistory(itin) {
    try {
        if ($("#HomePageindex").length != 0) {
            if (localStorage.getItem("sdfghjklwertyusdfghjkdfg") != null) {
                var itinerary = JSON.parse(localStorage.getItem("sdfghjklwertyusdfghjkdfg"));
                $("#fromCity").val(itinerary[itin].segment[0].originAirportFull);
                $("#toCity").val(itinerary[itin].segment[0].destinationAirportFull);

                var dd = itinerary[itin].segment[0].travelDate.split('/');
                if (dd.length == 1)
                    dd = itinerary[itin].segment[0].travelDate.split('-');
                var dDate = new Date(parseInt(dd[0], 10), parseInt(dd[1], 10) - 1, parseInt(dd[2], 10));
                if (minDate < dDate) {
                    $("#departure_date").val(itinerary[itin].segment[0].travelDate);
                }
                if (itinerary[itin].segment.length == 2) {
                    var dd1 = itinerary[itin].segment[1].travelDate.split('/');
                    if (dd1.length == 1)
                        dd1 = itinerary[itin].segment[1].travelDate.split('-');
                    var rDate = new Date(parseInt(dd1[0], 10), parseInt(dd1[1], 10) - 1, parseInt(dd1[2], 10));
                    if (dDate < rDate) {
                        $("#return_date").val(itinerary[itin].segment[1].travelDate);
                    }
                    else {
                        var rd = $("#departure_date").val().split('/');
                        if (rd.length == 1)
                            rd = $("#departure_date").val().split('-');
                        var dDate = new Date(parseInt(rd[0], 10), parseInt(rd[1], 10) - 1, parseInt(rd[2], 10));
                        dDate.setDate(dDate.getDate() + 7);
                        var month = (dDate.getMonth() + 1)
                        var strMonth = month <= 9 ? ("0" + month) : month;
                        $("#return_date").val(dDate.getFullYear() + "-" + strMonth + "-" + dDate.getDate());
                    }
                }
                else {
                    var rd = $("#departure_date").val().split('/');
                    if (rd.length == 1)
                        rd = $("#departure_date").val().split('-');
                    var dDate = new Date(parseInt(rd[0], 10), parseInt(rd[1], 10) - 1, parseInt(rd[2], 10));
                    dDate.setDate(dDate.getDate() + 7);
                    var month = (dDate.getMonth() + 1)
                    var strMonth = month <= 9 ? ("0" + month) : month;
                    $("#return_date").val(dDate.getFullYear() + "-" + strMonth + "-" + dDate.getDate());
                }

                $("#Adult").val((itinerary[itin].adults != null && itinerary[itin].adults != undefined) ? itinerary[itin].adults : "1");
                $("#Child").val((itinerary[itin].child != null && itinerary[itin].child != undefined) ? itinerary[itin].child : "0");
                $("#Infant").val((itinerary[itin].infants != null && itinerary[itin].infants != undefined) ? itinerary[itin].infants : "0");
                $("#Cabin").val((itinerary[itin].cabinType != null && itinerary[itin].cabinType != undefined) ? itinerary[itin].cabinType : "1");
                $("#hfTripType").val(itinerary[itin].tripType);

                var arrFromCity = $("#fromCity").val().split(',');
                var restFromCity = "";
                for (var i = 1; i < arrFromCity.length; i++) {
                    restFromCity += ((i == 1 ? "" : ", ") + arrFromCity[i]);
                }
                var arrFCity = arrFromCity[0].split(')')
                var fromCityName = arrFCity.length >= 2 ? arrFCity[1] : $("#fromCity").val();
                var fromArpName = getAirportCode($("#fromCity").val());

                var arrToCity = $("#toCity").val().split(',');
                var restToCity = "";
                for (var i = 1; i < arrToCity.length; i++) {
                    restToCity += ((i == 1 ? "" : ", ") + arrToCity[i]);
                }
                var arrTCity = arrToCity[0].split(')')
                var toCityName = arrTCity.length >= 2 ? arrTCity[1] : $("#toCity").val();
                var toArpName = getAirportCode($("#toCity").val());

                var fromDate = $("#departure_date").val().split('-');
                var fDate = "";
                if (fromDate.length == 3) {
                    fDate = months[parseInt(fromDate[1]) - 1] + " " + fromDate[2] + ", " + fromDate[0];
                }
                else {
                    fDate = $("#departure_date").val();
                }
                var toDate = $("#return_date").val().split('-');;
                var tDate = "";
                if (toDate.length == 3) {
                    tDate = months[parseInt(toDate[1]) - 1] + " " + toDate[2] + ", " + toDate[0];
                }
                else {
                    fDate = $("#departure_date").val();
                }
                $("#porgressBarOrg").html("<h3>" + fromArpName + "</h3><p>" + fromCityName + "</p><span>" + fromArpName + " - " + restFromCity + "</span>");
                $("#porgressBarDest").html("<h3>" + toArpName + "</h3><p>" + toCityName + "</p><span>" + toArpName + " - " + restToCity + "</span>");
                $("#porgressBarDate").html((fDate + " - " + ($('#hfTripType').val() == 1 ? "Oneway" : tDate)));
                $("#oneway_roundTrip_wait1").show();
                $("#oneway_roundTrip_wait2").show();
                $("#Multi_City_wait").hide();
                $("#topDivWebsite").hide();
                $("#SearchingProgressBar").show();
                $("#flightSearch").submit();
            }
        }
    } catch (e) {
        $(".searchpop1").hide();
    }
}


function ChangeTripType(ddlType) {

    if (ddlType == "1") {      
        $('#hfTripType').val(1);
        document.getElementById("return_date").disabled = true;
      
    }
    else if (ddlType == "2") {
     
        $('#hfTripType').val(2);
        document.getElementById("return_date").disabled = false;
    }
    else {
        $('#hfTripType').val(2);
        document.getElementById("return_date").disabled = false;
    }

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
                            label: ("" + item.airportCode + " - " + item.cityName + ", " + item.airportName + (item.stateName == "" ? "" : (", " + item.stateName)) + ", " + item.countryName)
                        }
                    }));
                }
            })
        },
        open: function (event, ui) { selectFrom = true; },
        select: function (event, ui) {
            $(this).val(ui.item.label);
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
                            label: ("" + item.airportCode + " - " + item.cityName + ", " + item.airportName + (item.stateName == "" ? "" : (", " + item.stateName)) + ", " + item.countryName)
                        }
                    }));
                }
            })
        },
        open: function (event, ui) {
            selectTo = true;
        },
        select: function (event, ui) {
            $(this).val(ui.item.label);
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
    setSearchEngine();
    $("#txtPaxDetail").click(function () {
        $(".passnger_detail").slideDown();
    });
    $(".PaxDropArrow").click(function () {
        $(".passnger_detail").slideDown();
    });
    $(".close-txt").click(function () {
        $(".passnger_detail").slideUp();
    });
    $('body').click(function (event) {
        if ($("#travellerDiv").length > 0) {
            if (!$('#travellerDiv').is(':hover')) {
                $('.passnger_detail').hide();
            }
        }       
    });

    $("#fromCity").blur(function () {
        if (orgIndex == 0 && selectFrom)
            $('#fromCity').val("");
    });
    $("#toCity").blur(function () {
        if (destIndex == 0 && selectTo)
            $('#toCity').val("");
    });
    $(".close_btn").click(function () {
        $(".searach_popup").hide();
    });




});

function MinusPax(pax) {
    var adult = parseInt($("#Adult").val());
    var child = parseInt($("#Child").val());
    var infant = parseInt($("#Infant").val());
  
    var totpax = adult + child + infant;

    if (pax == "Adult") {
        if (adult > 1) {
            if ((adult * 2) == child) {
                alert("Please decrease child first!!");
            }
            else if (adult == (infant )) {
                alert("Please decrease infant first!!");
            }
            else {
                $("#" + pax).val(adult - 1);
            }
        }
    }
    else if (pax == "Child") {
        if (child > 0) {
            $("#" + pax).val(child - 1);
        }
    }
    else if (pax == "Infant") {
        if (infant > 0) {
            $("#" + pax).val(infant - 1);
        }
    }
   
    setPaxDropBox();
}
function PlusPax(pax) {
    var adult = parseInt($("#Adult").val());
    var child = parseInt($("#Child").val());
    var infant = parseInt($("#Infant").val());
  
    var totpax = adult + child + infant ;
    if (totpax <= 8) {
        if (pax == "Adult") {
            $("#" + pax).val((adult + 1).toString());
        }
        else if (pax == "Child") {
            if (child < (adult * 2)) {
                $("#" + pax).val((child + 1).toString());
            }
        }
        else if (pax == "Infant") {
            if ((infant ) < (adult)) {
                $("#" + pax).val((infant + 1).toString());
            }
        }
    }
    setPaxDropBox();
}
function setPaxDropBox() {
    var adult = parseInt($("#Adult").val());
    var child = parseInt($("#Child").val());
    var infant = parseInt($("#Infant").val());
  
    var totpax = adult + child + infant ;

    $("#txtPaxDetail").val(totpax.toString() + " Traveler / " + $("#Cabin option:selected").text());
}




function se_MinusPax(pax) {
    var adult = parseInt($("#se_Adult").val());
    var child = parseInt($("#se_Child").val());
    var infant = parseInt($("#se_Infant").val());
    var InfantWs = parseInt($("#se_InfantWs").val());
    var totpax = adult + child + infant + InfantWs;

    if (pax == "se_Adult") {
        if (adult > 1) {
            if ((adult * 2) == child) {
                alert("Please decrease child first!!");
            }
            else if (adult == (infant + InfantWs)) {
                alert("Please decrease infant first!!");
            }
            else {
                $("#" + pax).val(adult - 1);
            }
        }
    }
    else if (pax == "se_Child") {
        if (child > 0) {
            $("#" + pax).val(child - 1);
        }
    }
    else if (pax == "se_Infant") {
        if (infant > 0) {
            $("#" + pax).val(infant - 1);
        }
    }
    else if (pax == "se_InfantWs") {
        if (infant > 0) {
            $("#" + pax).val(infant - 1);
        }
    }
    se_setPaxDropBox();
}
function se_PlusPax(pax) {
    var adult = parseInt($("#se_Adult").val());
    var child = parseInt($("#se_Child").val());
    var infant = parseInt($("#se_Infant").val());
    var InfantWs = parseInt($("#se_InfantWs").val());
    var totpax = adult + child + infant + InfantWs;
    if (totpax <= 8) {
        if (pax == "se_Adult") {
            $("#" + pax).val((adult + 1).toString());
        }
        else if (pax == "se_Child") {
            if (child < (adult * 2)) {
                $("#" + pax).val((child + 1).toString());
            }
        }
        else if (pax == "se_Infant") {
            if ((infant + InfantWs) < (adult)) {
                $("#" + pax).val((infant + 1).toString());
            }
        }
    }
    se_setPaxDropBox();
}
function se_setPaxDropBox() {
    var adult = parseInt($("#se_Adult").val());
    var child = parseInt($("#se_Child").val());
    var infant = parseInt($("#se_Infant").val());
    var InfantWs = parseInt($("#se_InfantWs").val());
    var totpax = adult + child + infant + InfantWs;

    $("#se_txtPaxDetail").val(totpax.toString() + " Traveler / " + $("#se_Cabin option:selected").text());
}


function MinusPax1(pax) {
    var adult = parseInt($("#Adult1").val());
    var child = parseInt($("#Child1").val());
    var infant = parseInt($("#Infant1").val());
    var InfantWs = parseInt($("#InfantWs1").val());
    var totpax = adult + child + infant + InfantWs;

    if (pax == "Adult1") {
        if (adult > 1) {
            if ((adult * 2) == child) {
                alert("Please decrease child first!!");
            }
            else if (adult == (infant + InfantWs)) {
                alert("Please decrease infant first!!");
            }
            else {
                $("#" + pax).val(adult - 1);
            }
        }
    }
    else if (pax == "Child1") {
        if (child > 0) {
            $("#" + pax).val(child - 1);
        }
    }
    else if (pax == "Infant1") {
        if (infant > 0) {
            $("#" + pax).val(infant - 1);
        }
    }
    else if (pax == "InfantWs1") {
        if (infant > 0) {
            $("#" + pax).val(infant - 1);
        }
    }
    setPaxDropBox1();
}
function PlusPax1(pax) {
    var adult = parseInt($("#Adult1").val());
    var child = parseInt($("#Child1").val());
    var infant = parseInt($("#Infant1").val());
    var InfantWs = parseInt($("#InfantWs1").val());
    var totpax = adult + child + infant + InfantWs;
    if (totpax <= 8) {
        if (pax == "Adult1") {
            $("#" + pax).val((adult + 1).toString());
        }
        else if (pax == "Child1") {
            if (child < (adult * 2)) {
                $("#" + pax).val((child + 1).toString());
            }
        }
        else if (pax == "Infant1") {
            if ((infant + InfantWs) < (adult)) {
                $("#" + pax).val((infant + 1).toString());
            }
        }
    }
    setPaxDropBox1();
}
function setPaxDropBox1() {
    var adult = parseInt($("#Adult1").val());
    var child = parseInt($("#Child1").val());
    var infant = parseInt($("#Infant1").val());
    var InfantWs = parseInt($("#InfantWs1").val());
    var totpax = adult + child + infant + InfantWs;

    $("#txtPaxDetail1").val(totpax.toString() + " Traveler / " + $("#Cabin1 option:selected").text());
}





