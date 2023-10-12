function CheckForInputText(n) {
  const t = $(n).siblings(".fa-times-circle"),
    i = $(n).siblings(".error-message");
  $(n).val().length > 0 ? (t.show(), i.hide()) : t.hide();
}
function subscribeEmail() {
  var n, t, i;
  if (
    ($("#spnAlreadyExist").html(""),
    (n = !0),
    (t = $("#txtNewsletterMail").val()),
    ValidateEmail(t) == !1)
  )
    return (
      $("#spnAlreadyExist").html("Please enter a valid email!"),
      $(this).focus(),
      (n = !1),
      !1
    );
  n &&
    ((i = $("#frmNewsletter").serialize()),
    $("#txtNewsletterMail").attr("disabled", "disabled"),
    $("#btnNewsletterSubmit").attr("disabled", "disabled"),
    $.post("/FooterLinks/ContactUs", i, function (n) {
      n == "1"
        ? ($("#spanNewsletterThanks").show(),
          setTimeout(function () {
            $("#spanNewsletterThanks").hide();
          }, 5e3))
        : n == "2"
        ? $("#spnAlreadyExist").html("You are already subscribed")
        : ($("#spanNewsletterThanks").show(),
          setTimeout(function () {
            $("#spanNewsletterThanks").hide();
          }, 5e3));
    }).done(function () {
      $("#txtNewsletterMail").val("");
      $("#txtNewsletterMail").removeAttr("disabled");
      $("#btnNewsletterSubmit").removeAttr("disabled");
    }));
}
function SignUpEmail() {
  var n, t, i;
  if (
    ($("#spnSignUpAlreadyExist").html(""),
    (n = !0),
    (t = $("#txtSignUpMail").val()),
    ValidateEmail(t) == !1)
  )
    return (
      $("#spnSignUpAlreadyExist").html("Please enter a valid email!"),
      $(this).focus(),
      (n = !1),
      !1
    );
  n &&
    ((i = $("#frmSignUp").serialize()),
    $("#txtSignUpMail").attr("disabled", "disabled"),
    $("#btnSignUpSubmit").attr("disabled", "disabled"),
    $.post("/FooterLinks/ContactUs", i, function (n) {
      n == "1"
        ? ($("#spanSignUpThanks").show(),
          setTimeout(function () {
            $("#spanSignUpThanks").hide();
          }, 5e3))
        : n == "2"
        ? $("#spnSignUpAlreadyExist").html("You are already signed up")
        : ($("#spanSignUpThanks").show(),
          setTimeout(function () {
            $("#spanSignUpThanks").hide();
          }, 5e3));
    }).done(function () {
      $("#txtSignUpMail").val("");
      $("#txtSignUpMail").removeAttr("disabled");
      $("#btnSignUpSubmit").removeAttr("disabled");
    }));
}
function CheckBookingStatus() {
  var t;
  $("#spnBookingStatusError").html("");
  var n = !0,
    i = $("#txtLastName").val().trim(),
    r = $("#txtPNRNumber").val().trim();
  if (i == "")
    return (
      $("#spnBookingStatusError").html("Please enter Last Name"),
      $("#txtLastName").focus(),
      (n = !1),
      !1
    );
  if (r == "")
    return (
      $("#spnBookingStatusError").html("Please enter PNR Number"),
      $("#txtPNRNumber").focus(),
      (n = !1),
      !1
    );
  n &&
    ((t = $("#frmCheckBookingStatus").serialize()),
    $("#btnCheckBookingStatus").attr("disabled", "disabled"),
    $.post("/FooterLinks/CheckBookingStatus", t, function (n) {
      n == "1"
        ? window.parent
          ? (window.parent.location = "/FooterLinks/BookingStatus")
          : (window.location = "/FooterLinks/BookingStatus")
        : n == "2";
    }).done(function () {
      $("#txtLastName").val("");
      $("#txtPNRNumber").val("");
      $("#btnCheckBookingStatus").removeAttr("disabled");
    }));
}
function ShowDealSearchPopup(n, t, i, r, u, f, e, o, s) {
  var c;
  $("#ddlAdultCount1").val(1);
  $("#ddlChildCount1").val(0);
  $("#ddlInfantOnLap1").val(0);
  $("#ddlInfantsSeat1").val(0);
  $("#ddlAdultCount1").removeClass("error");
  $("#ddlChildCount1").removeClass("error");
  $("#ddlInfantOnLap1").removeClass("error");
  $("#ddlInfantsSeat1").removeClass("error");
  $(".pax-ratio1").hide();
  $(".adult-infant1").hide();
  $(".searchHolder").fadeIn();
  var h = $(n).offset().top,
    l = $(n).offset().left,
    a = $(n).offset().left;
  $(".searchHolder").css("top", h + 32);
  $(".searchHolder").css("left", l - 215);
  $("body,html").animate({ scrollTop: h - 80 }, 500);
  $(".searchHolder.business").css("top", h - 40);
  $(".searchHolder.business").css("left", a - 200);
  $("#hvFrom1").val(t);
  $("#hvTo1").val(i);
  $("#tbDepart1").val(r);
  $("#tbReturn1").datepicker("option", "minDate", new Date(r));
  $("#tbReturn1").val(u);
  $("#hvFromCityName").val("");
  $("#hvToCityName").val("");
  $("#hvFromCountry").val("");
  $("#hvToCountry").val("");
  $("#hvIsDeal").val("Yes");
  s != null &&
    s == !0 &&
    ($("#divShortWidgetTitle").html("Book " + f + " Class Flights"),
    $("#hvIsBusinessClassDealShort").val("true"));
  (f != null || f != undefined) &&
    ((c = GetCabinClass(f)), $("select[name*='ddlCabinClass']").val(c));
  $("#ddlAirline1").val(e);
  $("#ddlAirlineName1").val(o);
}
function SkipPound(n) {
  n.key === "#" &&
    ((n.returnValue = !1), n.preventDefault && n.preventDefault());
}
function OnlyCharacterKey(n) {
  var i = new RegExp("[a-zA-Z]"),
    t = n.keyCode || n.which;
  t = String.fromCharCode(t);
  !i.test(t) &&
    t.charCodeAt(0) > 32 &&
    ((n.returnValue = !1), n.preventDefault && n.preventDefault());
}
function CheckValidPhoneNumber(n) {
  var t = !0;
  return startsWith(n, "00") && (t = !1), t;
}
function startsWith(n, t) {
  return n.lastIndexOf(t, 0) === 0;
}
function OnlyCharNumberKey(n) {
  var i = new RegExp("[a-zA-Z0-9]"),
    t = n.keyCode || n.which;
  t = String.fromCharCode(t);
  !i.test(t) &&
    t.charCodeAt(0) > 32 &&
    ((n.returnValue = !1), n.preventDefault && n.preventDefault());
}
function isCharKey() {
  return event.keyCode == 33 ||
    event.keyCode == 34 ||
    event.keyCode == 35 ||
    event.keyCode == 36 ||
    event.keyCode == 37 ||
    event.keyCode == 38 ||
    event.keyCode == 42 ||
    event.keyCode == 47 ||
    event.keyCode == 48 ||
    event.keyCode == 49 ||
    event.keyCode == 50 ||
    event.keyCode == 50 ||
    event.keyCode == 51 ||
    event.keyCode == 52 ||
    event.keyCode == 53 ||
    event.keyCode == 54 ||
    event.keyCode == 55 ||
    event.keyCode == 56 ||
    event.keyCode == 57 ||
    event.keyCode == 60 ||
    event.keyCode == 62 ||
    event.keyCode == 63 ||
    event.keyCode == 64 ||
    event.keyCode == 92 ||
    event.keyCode == 94 ||
    event.keyCode == 96 ||
    event.keyCode == 124 ||
    event.keyCode == 126 ||
    event.keyCode > 128
    ? !1
    : !0;
}
function validatePhone(n) {
  return n.length >= 10 && n.length <= 15
    ? startsWith(n, "00") ||
      startsWith(n, "1122222222") ||
      startsWith(n, "1111111111") ||
      startsWith(n, "2222222222") ||
      startsWith(n, "3333333333") ||
      startsWith(n, "4444444444") ||
      startsWith(n, "5555555555") ||
      startsWith(n, "6666666666") ||
      startsWith(n, "7777777777") ||
      startsWith(n, "8888888888") ||
      startsWith(n, "9999999999") ||
      startsWith(n, "1212") ||
      startsWith(n, "1222") ||
      startsWith(n, "1333") ||
      startsWith(n, "1444") ||
      startsWith(n, "1555") ||
      startsWith(n, "1666")
      ? !1
      : !0
    : !1;
}
function CheckMobile() {
  var n = document.getElementById("Mobile").value;
  return n != ""
    ? n.length >= 10 && ipphone.length <= 15
      ? ((document.getElementById("dvMobileErr").style.display = "none"), !0)
      : ((document.getElementById("dvMobileErr").style.display = "block"), !1)
    : ((document.getElementById("dvMobileErr").style.display = "block"), !1);
}
function hideMobileErr() {
  document.getElementById("dvMobileErr").style.display = "none";
}
function isNumberKey(n) {
  var t = n.which ? n.which : n.keyCode;
  return t > 31 && (t < 48 || t > 57) ? !1 : !0;
}
function isNumKey(n) {
  var t = n.which ? n.which : n.keyCode;
  return t > 31 && (t < 48 || t > 57) ? !1 : !0;
}
function isCharWithSpaceHyphen(n) {
  var t = new RegExp("^([-A-Za-z. ]){1,20}$"),
    i = String.fromCharCode(n.charCode ? n.charCode : n.which);
  if (!t.test(i)) return event.preventDefault(), !1;
}
function ValidateEmail(n) {
  return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
    n
  );
}
function GetChatOption() {
  return (
    ($("#chatContainer") == null ||
      $("#chatContainer") == undefined ||
      $("#chatContainer").length == 0) &&
      $.ajax({
        url: "/Flight/GetChatOption",
        type: "GET",
        cache: !1,
        dataType: "json",
        async: !1,
        contentType: "application/json; charset=utf-8",
        success: function (n) {
          $("#chatwrapper").html(n.chatContent);
        },
        error: function () {
          $("#chatwrapper").html("");
        },
      }),
    !0
  );
}
function PromoNewsletterEmail() {
  var n, t, i;
  if (
    ($("#spnPromoNewsletterError").html(""),
    (n = !0),
    (t = $("#txtPromoNewsletterMail").val()),
    t.trim() == "")
  )
    return (
      $("#spnPromoNewsletterError").html("Please enter email address!"),
      $(this).focus(),
      (n = !1),
      !1
    );
  if (ValidateEmail(t) == !1)
    return (
      $("#spnPromoNewsletterError").html("Please enter a valid email address!"),
      $(this).focus(),
      (n = !1),
      !1
    );
  n &&
    ((i = $("#frmPromoNewsletter").serialize()),
    $("#txtPromoNewsletterMail").attr("disabled", "disabled"),
    $("#btnPromoNewsletterSubmit").attr("disabled", "disabled"),
    $.post("/FooterLinks/ContactUs", i, function (n) {
      n == "1"
        ? ($("#spanPromoNewsletterThanks").show(),
          setTimeout(function () {
            $("#spanPromoNewsletterThanks").hide();
          }, 5e3))
        : ($("#spanPromoNewsletterThanks").show(),
          setTimeout(function () {
            $("#spanPromoNewsletterThanks").hide();
          }, 5e3));
    }).done(function () {
      $("#txtPromoNewsletterMail").val("");
      $("#txtPromoNewsletterMail").removeAttr("disabled");
      $("#btnPromoNewsletterSubmit").removeAttr("disabled");
    }));
}
function UpdateClientIPAddress(n, t) {
  if (n != "103.225.40.10") {
    var i = { ipAddress: n, pageName: t };
    $.ajax({
      url: "/Custom/UpdateClientIPAddress/",
      data: i,
      type: "POST",
      async: !0,
      success: function () {},
      error: function (n) {
        console.log(n);
      },
    });
  }
  return !0;
}
$(function () {
  screen.width < 1024 &&
    setInterval(function () {
      $(".lightpick__month-title select")
        .change(function () {
          var t = $(this).find("option:selected").text(),
            n = $("<select/>").append($("<option/>").text(t));
          $(this).after(n);
          $(this).width(n.width());
          n.remove();
        })
        .change();
    }, 100);
});
$(".m-loca input").each(function () {
  CheckForInputText(this);
});
$(".m-loca input").on("change keyup", function () {
  CheckForInputText(this);
});
$("#frmNewsletter").submit(function (n) {
  var t, i, r;
  if (
    (n.preventDefault(),
    $("#spnAlreadyExist").html(""),
    (t = !0),
    (i = $("#txtNewsletterMail").val()),
    ValidateEmail(i) == !1)
  )
    return (
      $("#spnAlreadyExist").html("Please enter a valid email!"),
      $(this).focus(),
      (t = !1),
      !1
    );
  t &&
    ((r = $(this).serialize()),
    $("#txtNewsletterMail").attr("disabled", "disabled"),
    $("#btnNewsletterSubmit").attr("disabled", "disabled"),
    $.post("/FooterLinks/ContactUs", r, function (n) {
      n == "1"
        ? ($("#spanNewsletterThanks").show(),
          setTimeout(function () {
            $("#spanNewsletterThanks").hide();
          }, 5e3))
        : n == "2"
        ? $("#spnAlreadyExist").html("You are already subscribed")
        : ($("#spanNewsletterThanks").show(),
          setTimeout(function () {
            $("#spanNewsletterThanks").hide();
          }, 5e3));
    }).done(function () {
      $("#txtNewsletterMail").val("");
      $("#txtNewsletterMail").removeAttr("disabled");
      $("#btnNewsletterSubmit").removeAttr("disabled");
    }));
});
$(function () {
  $("#txtNewsletterMail").on("keypress keyup", function () {
    $("#spnAlreadyExist").html("");
  });
  $("#txtNewsletterMail").on("blur", function () {
    $("#spnAlreadyExist").html("");
    var n = $("#txtNewsletterMail").val();
    n.length > 0 &&
      ValidateEmail(n) == !1 &&
      $("#spnAlreadyExist").html("Please enter a valid email!");
  });
});
$(function () {
  $("#txtSignUpMail").on("keypress keyup", function () {
    $("#spnSignUpAlreadyExist").html("");
  });
  $("#txtSignUpMail").on("blur", function () {
    $("#spnSignUpAlreadyExist").html("");
    var n = $("#txtSignUpMail").val();
    n.length > 0 &&
      ValidateEmail(n) == !1 &&
      $("#spnSignUpAlreadyExist").html("Please enter a valid email!");
  });
  $("#txtLastName,#txtPNRNumber").on("keypress keyup", function () {
    $("#spnBookingStatusError").html("");
  });
  $("#txtLastName,#txtPNRNumber").on("blur", function () {
    $("#spnBookingStatusError").html("");
  });
});
$(document).ready(function () {
  $("#divDepartSecton .icon-class").click(function () {
    $("#txtDepartDate").click();
  });
  $("#divReturnSection .icon-class").click(function () {
    $("#txtReturnDate").click();
  });
  $(window).on("orientationchange", function () {
    $(".lightpick.lightpick--2-columns").addClass("is-hidden");
    $(
      ".searchweight span.error-message#spnDepDateErrMsg, .searchweight span.error-message#spnRetDateErrMsg, .searchweight span.error-message#spnCheckInDateErrMsg, .searchweight span.error-message#spnCheckOutDateErrMsg"
    ).css("display", "none");
  });
});
$(function () {
  $("#txtPromoNewsletterMail").on("keypress keyup", function () {
    $("#spnPromoNewsletterError").html("");
  });
  $("#txtPromoNewsletterMail").on("blur", function () {
    $("#spnPromoNewsletterError").html("");
    var n = $("#txtPromoNewsletterMail").val();
    n.length > 0 &&
      ValidateEmail(n) == !1 &&
      $("#spnPromoNewsletterError").html("Please enter a valid email address!");
  });
});
