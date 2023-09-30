var trip = "OneWay";
var ContactNumber = "tel:+14693824767";
var ContactN = "+14693824767";

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var referrer = document.referrer;
function OneWay() {
    trip = "OneWay";
    $("#dtOneWay").css("display", "block");
    $("#dtTwoWay").css("display", "none");
    $("#lnkoneway").addClass("active");
    $("#lnktwoway").removeClass("active");
}
function TwoWay() {
    trip = "TwoWay";
    $("#dtOneWay").css("display", "none");
    $("#dtTwoWay").css("display", "block");
    $("#lnkoneway").removeClass("active");
    $("#lnktwoway").addClass("active");
}
$(document).ready(function () {
    //$("button:eq(0)").attr("onclick", "CallMe()");
    //$("button:eq(0)").attr("type", "button");
    //setTimeout(function () {
    //    $("button:eq(0)").attr("onclick", "CallMe()");
    //    $("button:eq(0)").attr("type", "button");
    //}, 500);
    //setInterval(function () {
    //    $("button:eq(0)").attr("onclick", "CallMe()");
    //    $("button:eq(0)").attr("type", "button");
    //},1000);
    //window.location.href = "tel:+14693824767";
    $(".atagContact").attr("href", ContactNumber);
    $(".contactText").text(ContactN);
    $(".locationTitle").text(TitleText);
    $("#origin").val(from);
    $("#destination").val(to);
    setTimeout(function () {
        $("body").append('<script src="/content/new/js/jquery-ui.js"></script>');
        $("#pnlSearch").append('<script charset="utf-8" src="//www.travelpayouts.com/widgets/1298a6e6d9b12c2e3d3c4fabbcbae6c2.js?v=2259" async></script>');
        //$("#pnlRoutes").append(' <script src="https://www.travelpayouts.com/ducklett/scripts_en_us.js?currency=usd&v=1&marker=320008&trs=127051&widget_type=brickwork&host=fly.travelglobe.com%2Fflights&locale=en_us&limit=8&powered_by=true" charset="utf-8"></script><hr /><script src="//tp.media/content?promo_id=2811&shmarker=320008&campaign_id=100&trs=127051&color_button=%23FF0000&target_host=fly.travelglobe.com%2Fflights&locale=en&powered_by=true&airline=&non_direct_flights=true&min_lines=5&border_radius=0&color_background=%23FFFFFF&color_text=%23000000&color_border=%23FFFFFF&destination=BKK&origin=LON" charset="utf-8"></script>');


        IPGet();
        $(".date-range").datepicker();
    }, 100);
    setTimeout(function () {
        $(".mnh").css("display", "none");
        $(".mntpnl").remove();
    }, 1000);
    setTimeout(function () {
        jQuery(function ($) {
            var arr = [];
            $.getJSON('/content/airport.json', function (data) {
                $.each(data, function (key, value) {
                    var codes = value.substring(0, 3);
                    if ($.inArray(value, arr) === -1) {
                        arr.push(value);
                    }
                })
            });
            $(".getCityIATA").autocomplete({
                source: function (request, response) {
                    var stringLength = $.ui.autocomplete.escapeRegex(request.term).length;
                    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
                    var matcher2 = new RegExp($.ui.autocomplete.escapeRegex(request.term) + "+", "i");
                    var isData = 1;
                    response($.grep(arr, function (item) {
                        if (stringLength <= 3) {
                            if (matcher.test(item)) {
                                isData = 22;
                            }
                            return matcher.test(item);
                        }
                        else {
                            if (matcher2.test(item)) {
                                isData = 22;
                            }
                            return matcher2.test(item);
                        }
                    }));
                    if (stringLength == 3 && isData == 1) {
                        response($.grep(arr, function (item) {
                            return matcher2.test(item);
                        }));
                    }
                },
                minLength: 1,
            });
        });
    }, 4000);
});
function DiscountCall() {
    TrackIP(window.location.origin, $("#IP").val(), referrer, 'Discount Call');
    window.location.href = ContactNumber;
}
function CallMe() {
    TrackIP(window.location.origin, $("#IP").val(), referrer, 'Search Button');
    window.location.href = ContactNumber;
}
function HeaderClick() {
    TrackIP(window.location.origin, $("#IP").val(), referrer, 'Header Call');
    window.location.href = ContactNumber;
}
function FooterCallClick() {
    TrackIP(window.location.origin, $("#IP").val(), referrer, 'From Footer Call Button');
    window.location.href = ContactNumber;
}
function checkCookie() {
    var cnt = getCookie("cnt");
    if (cnt == "") {
        //$("#pnlContactModal").modal("toggle");
    }
}
function SendMessageModal() {
    //var ValidatorFor = [];
    //ValidatorFor.push(["mName", "Required", "", "Please enter Name"]);
    //ValidatorFor.push(["mEmail", "Required", "", "Please enter Email"]);
    //ValidatorFor.push(["mEmail", "Email", "", "Please enter valid email-id"]);
    //ValidatorFor.push(["mMobile", "Required", "", "Please enter Mobile Number"]);
    //ValidatorFor.push(["mMessage", "Required", "", "Please enter message"]);

    //var status = ValidateMe(ValidatorFor);
    //if (status == false) {
    //    return false;
    //}

    if ($("#mMobile").val().length < 10) {
        //$.notify({
        //    message: "Please Enter 10 Digit Mobile Number"
        //}, {
        //    type: 'danger',
        //});
        $("#mMobile").focus();
        return false;
    }
    //Loader();
    $.ajax({
        type: 'POST',
        url: '/Home/SendContactUsMail',
        dataType: 'json',
        data: {
            //Name: $("#mName").val().trim(),
            //Email: $("#mEmail").val().trim(),
            Mobile: $("#mMobile").val().trim(),
            //Message: $("#mMessage").val().trim(),
        },
        success: function (result) {
            if (result.status == "1") {
                //$("#mName").val('');
                //$("#mEmail").val('');
                $("#mMobile").val('');
                //$("#mMessage").val('');
                $("#pnlContactModal").modal("toggle");
                setCookie("cnt", "filled", 1);
                window.location.href = ContactNumber;
                //swal("We will contact you shortly.");
            }
            else {
                //swal("Please Try Again.");
            }
            //Loader();
        },
        error: function (ex) {
            //Loader();
        }
    });
}
function IPGet() {
    $.get('https://api.ipify.org?format=json')
      .done(function (data) {
          $("#IP").val(data.ip);
          TrackIP(window.location.origin, data.ip, referrer, 'PageLoad');
      });
}
function TrackIP(WebSite, IPAddress : Level 10, 440 Collins Street, Melbourne VIC 3000, UrlReferrer, ButtonClick) {
    $.ajax({
        type: 'POST',
        url: '/api/TrackIP',
        dataType: 'json',
        data: {
            WebSite: WebSite,
            IPAddress : Level 10, 440 Collins Street, Melbourne VIC 3000: IPAddress : Level 10, 440 Collins Street, Melbourne VIC 3000,
            UrlReferrer: UrlReferrer,
            ButtonClick: ButtonClick
        },
        success: function (result) {
        },
        error: function (ex) {
        }
    });
}
function SubmitFormNow() {
    TrackIP(window.location.origin, $("#IP").val(), referrer, 'Search Button');
    var ValidatorFor = [];
    ValidatorFor.push(["origin", "Required", "", "Please enter origin"]);
    ValidatorFor.push(["destination", "Required", "", "Please enter destination"]);
    ValidatorFor.push(["departuredate", "Required", "", "Please enter departure-date"]);
    ValidatorFor.push(["Contact", "Required", "", "Please enter Contact number"]);

    var status = ValidateMe(ValidatorFor);
    if (status == false) {
        return false;
    }
    if ($("#Contact").val().trim().length < 9) {
        swal("Please enter valid contact number");
        $("#Contact").focus();
        return false;
    }
    $.ajax({
        type: 'POST',
        url: '/Home/SendEnquiry',
        dataType: 'json',
        data: {
            origin: $("#origin").val(),
            destination: $("#destination").val(),
            departuredate: $("#departuredate").val(),
            returndate: $("#returndate").val(),
            Contact: $("#Contact").val(),
            PassangersCount: $("#adults").text() + " - " + $("#childs").text(),
        },
        success: function (result) {
            window.location.href = ContactNumber;
        },
        error: function (ex) {
        }
    });
}
