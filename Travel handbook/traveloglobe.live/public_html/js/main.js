
function closefun() {
    $('#fillters').hide();
   $('.blacloverlay').removeClass('hmbody');

}

function filshow() {
   
    $('#fillters').show();
    $('#mdsearch').hide();
    $('html, body').animate({ scrollTop: 0 }, '300');

   // $('.filter-result').css("display", "block");
    //$('.mdsearch').css("display", "none");
   $('.blacloverlay').addClass('hmbody');
}

function midfcls() {
    $('#mdsearch').show();
    $('#fillters').hide();
    $('html, body').animate({ scrollTop: 0 }, '300');
   $('.blacloverlay').addClass('hmbody');
}
function mdfclose() {
    $('#mdsearch').hide();
    $('.blacloverlay').removeClass('hmbody');
}







function tabcontent(value, city) {
    $("#hdnCheckActiveDomesicdest").val(value);
    $("#flyform_offer").val(city);

    $(".select-city-detail").show();
    $(".main_ofer").hide();
    $(".select-city-detail").removeClass("bestoffer_sel");
    $(".tabcity" + value).addClass("bestoffer_sel");
    //$(".tabcity" + value).hide();
    $("#allcity-" + value).show();
}
function tabcontenti(value, city) {
    $("#hdnCheckActiveIntdest").val(value);
    $("#flyform_offeri").val(city);

    $(".select-city-detaili").show();
    $(".main_oferi").hide();
    $(".select-city-detaili").removeClass("bestoffer_seli");
    $(".tabcityi" + value).addClass("bestoffer_seli");
    //$(".tabcity" + value).hide();
    $("#allcityi-" + value).show();

}

function setsearhengine(City_Name, Airport_Code, Airport_Name, Country_Name, Country_Code) {

    $("#hdn_flying_from").val(City_Name + ", " + Country_Name + ", " + Country_Code + " (" + Airport_Code + " - " + Airport_Name + ")");
    $("#from_wait").val(City_Name);

    //if ($("#mob").val() == "Y") {
    //    $("#Fly_Depart_airport").html(Airport_Code);
    //    $("#flying_from_N").val(Airport_Name);
    //}
    //else {
    //    $("#Fly_Depart_airport").html(Airport_Name);
    //    $("#flying_from_N").val(Airport_Code);
    //}

    $(".fromtopopup").hide();

}

function setsearhengine_Return(City_Name, Airport_Code, Airport_Name, Country_Name, Country_Code) {

    
    $("#hdn_flying_to").val(City_Name + ", " + Country_Name + ", " + Country_Code + " (" + Airport_Code + " - " + Airport_Name + ")");
    $("#to_wait").val(City_Name);

    //if ($("#mob").val() == "Y")
    //{
    //    $("#Fly_Dest_airport").html(Airport_Code);
    //    $("#flying_to_N").val(Airport_Name);
    //}

    //else
    //{
    //    $("#Fly_Dest_airport").html(Airport_Name);
    //    $("#flying_to_N").val(Airport_Code);
    //}
    $(".fromtopopup").hide();

}
function showlogin_new() {
    if ($('#login_top1').hasClass('login_top_active')) {
        $('#login_top1').addClass('login_top_dactive').removeClass('login_top_active');
    }
    else {
        $('#login_top1').addClass('login_top_active').removeClass('login_top_dactive');
    }

    $('.login_top_open').show();
}

function ShowLogin() {


    //if ($("#mob_hdn").val() == "M") {
    //   // closefun()
    //    showlogin_new();
    //}
    $('.login_top_open').show();
    var str = arr5.value;
    if (str == "1") {
        //login_top login_top_dactive

        //$('.login_top').removeClass('login_top_dactive');
        //$('.login_top').addClass('login_top_active');
        //document.getElementById('login_top_open1').style.display = "block";
        //$('html, body').animate({
        //    scrollTop: 20
        //}, 100);
        $("#arr5").val(2);

    }
    if (str == "2") {
        //$('.login_top').removeClass('login_top_active');
        //$('.login_top').addClass('login_top_dactive');
        //document.getElementById('login_top_open1').style.display = "none";

        //$('html, body').animate({
        //    scrollTop: 0
        //}, 600)
        $("#arr5").val(1);
    }




}
function getval_Cabin() {

    $("#cabin_id").html($("#ddlCabinClass option:selected").text());
    $('#travel_Economy').val(document.getElementById('adult').value + " Traveller(s)," + $("#ddlCabinClass option:selected").text());

}




function SelectTripType(type) {

    if (type == "O") {


        $('#Fly_ret_datepickerid').removeAttr("style", 'background:#edf8fe');
        $('#Fly_ret_datepickerid').attr("disabled", "disabled");
        $('#Fly_ret_datepickerid').attr("style", 'cursor:no-drop;background:#edf8fe');
        $(".roundway").removeClass("waycolor");
        $(".oneway").addClass("waycolor");
        $("#hfTripType").val("false");
        $("#Fly_retdate").val("");
        $("#Fly_retdate_val").html("Return Date");
        $("#Fly_ret_day").html("");


    }


    if (type == "R") {


        //$("#Oneway").removeClass("waycolor");
        //$("#RoundTrip").addClass("waycolor");

        $(".roundway").addClass("waycolor");
        $(".oneway").removeClass("waycolor");
        $("#hfTripType").val("true");
        $('#Fly_ret_datepickerid').removeAttr("disabled");
        $('#Fly_ret_datepickerid').removeAttr("style", 'cursor:none');
        $('#Fly_ret_datepickerid').attr("style", 'background:#edf8fe');
        $('#Fly_ret_datepickerid').attr("style", 'background:#edf8fe');





    }




    return false;
}








function SelectTripType_mob(type) {

    if (type == "O")
    {
        $("#check2").prop("checked", false);
        $("#check1").prop("checked", true);
        $(".round-trip").removeClass("active");
        $(".one-way").addClass("active");
       
        //$(".return").hide();
        //$(".depart").addClass("full-block");
        //$("#Fly_retdate").val("");
        //$("#Fly_retdate_Text").val("");
        $("#hfTripType").val("false");
        $('#Fly_ret_datepickerid_mob').hide();
        $(".depart").addClass("full-block");
        //$('#Fly_ret_datepickerid_mob').removeAttr("style", 'background:#fff');

        //$('#Fly_ret_datepickerid_mob').attr("disabled", "disabled");
        //$('#Fly_ret_datepickerid_mob').attr("style", 'cursor:no-drop;background:#f5f2f2');


    }


    if (type == "R")
    {
        $("#check1").prop("checked", false);
        $("#check2").prop("checked", true);
        $(".one-way").removeClass("active");
        $(".round-trip").addClass("active");
       
        // $(".return").show();
        // $(".depart").removeClass("full-block");
        $("#hfTripType").val("true");
        
        $('#Fly_ret_datepickerid_mob').show();
        $(".depart").removeClass("full-block");
        //$('#Fly_ret_datepickerid_mob').removeAttr("style", 'cursor:none');
        //$('#Fly_ret_datepickerid_mob').attr("style", 'background:#fff');
        //$('#Fly_ret_datepickerid_mob').attr("style", 'background:#fff');


    }




    return false;
}
function submitsearchOffline(deprturedate, departure, Return) {

    $("#Fly_depdate").val(deprturedate)
    $("#hfFromDate").val(deprturedate)
    $("#hdn_flying_from").val(departure);
    $("#hdn_flying_to").val(Return);
    $("#from_wait").val(departure.split(',')[0]);
    $("#to_wait").val(Return.split(',')[0]);
    document.getElementById("searchengine_btn").click();
}
function ReverseFromDelhiDomestic() {
    var DelhiFromOne = $("#DelhiFromOne").text();
    var DelhiToOne = $("#DelhiToOne").text();
    var DelhiFromTwo = $("#DelhiFromTwo").text();
    var DelhiToTwo = $("#DelhiToTwo").text();
    var DelhiFromThree = $("#DelhiFromThree").text();
    var DelhiToThree = $("#DelhiToThree").text();
    var DelhiFromFour = $("#DelhiFromFour").text();
    var DelhiToFour = $("#DelhiToFour").text();
    $("#DelhiFromOne").text(DelhiToOne);
    $("#DelhiToOne").text(DelhiFromOne);
    $("#DelhiFromTwo").text(DelhiToTwo);
    $("#DelhiToTwo").text(DelhiFromTwo);
    $("#DelhiFromThree").text(DelhiToThree);
    $("#DelhiToThree").text(DelhiFromThree);
    $("#DelhiFromFour").text(DelhiToFour);
    $("#DelhiToFour").text(DelhiFromFour);
    if ($("#hdnFromDelhiDest").val() == 0) {
        $("#hdnFromDelhiDest").val(1);
        $("#DelToPatPrice").text("5200");
        $("#DelToPunePrice").text("4519");
        $("#DelToGoaPrice").text("7471");
        $("#DelToAmritSirPrice").text("7471");
    }
    else {
        $("#hdnFromDelhiDest").val(0);
        $("#DelToPatPrice").text("5112");
        $("#DelToPunePrice").text("3181");
        $("#DelToGoaPrice").text("7055");
        $("#DelToAmritSirPrice").text("4079");
    }
    
}
function ReverseFromMumbaiDomestic() {
    var MumbaiFromOne = $("#MumbaiFromOne").text();
    var MumbaiToOne = $("#MumbaiToOne").text();
    var MumbaiFromTwo = $("#MumbaiFromTwo").text();
    var MumbaiToTwo = $("#MumbaiToTwo").text();
    var MumbaiFromThree = $("#MumbaiFromThree").text();
    var MumbaiToThree = $("#MumbaiToThree").text();
    var MumbaiFromFour = $("#MumbaiFromFour").text();
    var MumbaiToFour = $("#MumbaiToFour").text();
    $("#MumbaiFromOne").text(MumbaiToOne);
    $("#MumbaiToOne").text(MumbaiFromOne);
    $("#MumbaiFromTwo").text(MumbaiToTwo);
    $("#MumbaiToTwo").text(MumbaiFromTwo);
    $("#MumbaiFromThree").text(MumbaiToThree);
    $("#MumbaiToThree").text(MumbaiFromThree);
    $("#MumbaiFromFour").text(MumbaiToFour);
    $("#MumbaiToFour").text(MumbaiFromFour);
    if ($("#hdnFromMumbaiDest").val() == 0) {
        $("#hdnFromMumbaiDest").val(1);
        $("#MumToPatPrice").text("5200");
        $("#MumToPunePrice").text("5509");
        $("#MumToGoaPrice").text("2323");
        $("#MumToAmritSirPrice").text("6723");
    }
    else {
        $("#hdnFromMumbaiDest").val(0);
        $("#MumToPatPrice").text("5351");
        $("#MumToPunePrice").text("5347");
        $("#MumToGoaPrice").text("2418");
        $("#MumToAmritSirPrice").text("6868");
    }
}
function ReverseFromBangaloreDomestic() {
    var BangaloreFromOne = $("#BangaloreFromOne").text();
    var BangaloreToOne = $("#BangaloreToOne").text();
    var BangaloreFromTwo = $("#BangaloreFromTwo").text();
    var BangaloreToTwo = $("#BangaloreToTwo").text();
    var BangaloreFromThree = $("#BangaloreFromThree").text();
    var BangaloreToThree = $("#BangaloreToThree").text();
    var BangaloreFromFour = $("#BangaloreFromFour").text();
    var BangaloreToFour = $("#BangaloreToFour").text();
    $("#BangaloreFromOne").text(BangaloreToOne);
    $("#BangaloreToOne").text(BangaloreFromOne);
    $("#BangaloreFromTwo").text(BangaloreToTwo);
    $("#BangaloreToTwo").text(BangaloreFromTwo);
    $("#BangaloreFromThree").text(BangaloreToThree);
    $("#BangaloreToThree").text(BangaloreFromThree);
    $("#BangaloreFromFour").text(BangaloreToFour);
    $("#BangaloreToFour").text(BangaloreFromFour);
    if ($("#hdnFromBangaloreDest").val() == 0) {
        $("#hdnFromBangaloreDest").val(1);
        $("#BangToPatPrice").text("7143");
        $("#BangToPunePrice").text("7143");
        $("#BangToGoaPrice").text("3056");
        $("#BangToAmritSirPrice").text("6949");
    }
    else {
        $("#hdnFromBangaloreDest").val(0);
        $("#BangToPatPrice").text("7262");
        $("#BangToPunePrice").text("2593");
        $("#BangToGoaPrice").text("3686");
        $("#BangToAmritSirPrice").text("7318");
    }
}
function ReverseFromKolkataDomestic() {
    var KolkataFromOne = $("#KolkataFromOne").text();
    var KolkataToOne = $("#KolkataToOne").text();
    var KolkataFromTwo = $("#KolkataFromTwo").text();
    var KolkataToTwo = $("#KolkataToTwo").text();
    var KolkataFromThree = $("#KolkataFromThree").text();
    var KolkataToThree = $("#KolkataToThree").text();
    var KolkataFromFour = $("#KolkataFromFour").text();
    var KolkataToFour = $("#KolkataToFour").text();
    $("#KolkataFromOne").text(KolkataToOne);
    $("#KolkataToOne").text(KolkataFromOne);
    $("#KolkataFromTwo").text(KolkataToTwo);
    $("#KolkataToTwo").text(KolkataFromTwo);
    $("#KolkataFromThree").text(KolkataToThree);
    $("#KolkataToThree").text(KolkataFromThree);
    $("#KolkataFromFour").text(KolkataToFour);
    $("#KolkataToFour").text(KolkataFromFour);
    if ($("#hdnFromKolkataDest").val() == 0) {
        $("#hdnFromKolkataDest").val(1);
        $("#KolToPatPrice").text("4518");
        $("#KolToPunePrice").text("6833");
        $("#KolToGoaPrice").text("7498");
        $("#KolToAmritSirPrice").text("7567");
    }
    else {
        $("#hdnFromKolkataDest").val(0);
        $("#KolToPatPrice").text("4618");
        $("#KolToPunePrice").text("5470");
        $("#KolToGoaPrice").text("7497");
        $("#KolToAmritSirPrice").text("8398");
    }
}
function ReverseFromChennaiDomestic() {
    var ChennaiFromOne = $("#ChennaiFromOne").text();
    var ChennaiToOne = $("#ChennaiToOne").text();
    var ChennaiFromTwo = $("#ChennaiFromTwo").text();
    var ChennaiToTwo = $("#ChennaiToTwo").text();
    var ChennaiFromThree = $("#ChennaiFromThree").text();
    var ChennaiToThree = $("#ChennaiToThree").text();
    var ChennaiFromFour = $("#ChennaiFromFour").text();
    var ChennaiToFour = $("#ChennaiToFour").text();
    $("#ChennaiFromOne").text(ChennaiToOne);
    $("#ChennaiToOne").text(ChennaiFromOne);
    $("#ChennaiFromTwo").text(ChennaiToTwo);
    $("#ChennaiToTwo").text(ChennaiFromTwo);
    $("#ChennaiFromThree").text(ChennaiToThree);
    $("#ChennaiToThree").text(ChennaiFromThree);
    $("#ChennaiFromFour").text(ChennaiToFour);
    $("#ChennaiToFour").text(ChennaiFromFour);
    if ($("#hdnFromChennaiDest").val() == 0) {
        $("#hdnFromChennaiDest").val(1);
        $("#ChennaiToPatPrice").text("6152");
        $("#ChennaiToPunePrice").text("4482");
        $("#ChennaiToGoaPrice").text("4247");
        $("#ChennaiToAmritSirPrice").text("7253");
    }
    else {
        $("#hdnFromChennaiDest").val(0);
        $("#ChennaiToPatPrice").text("5829");
        $("#ChennaiToPunePrice").text("4311");
        $("#ChennaiToGoaPrice").text("4414");
        $("#ChennaiToAmritSirPrice").text("10038");
    }
}
function ReverseFromDelhiInt() {
    var DelhiFromOneInt = $("#DelhiFromOneInt").text();
    var DelhiToOneInt = $("#DelhiToOneInt").text();
    var DelhiFromTwoInt = $("#DelhiFromTwoInt").text();
    var DelhiToTwoInt = $("#DelhiToTwoInt").text();
    var DelhiFromThreeInt = $("#DelhiFromThreeInt").text();
    var DelhiToThreeInt = $("#DelhiToThreeInt").text();
    var DelhiFromFourInt = $("#DelhiFromFourInt").text();
    var DelhiToFourInt = $("#DelhiToFourInt").text();
    $("#DelhiFromOneInt").text(DelhiToOneInt);
    $("#DelhiToOneInt").text(DelhiFromOneInt);
    $("#DelhiFromTwoInt").text(DelhiToTwoInt);
    $("#DelhiToTwoInt").text(DelhiFromTwoInt);
    $("#DelhiFromThreeInt").text(DelhiToThreeInt);
    $("#DelhiToThreeInt").text(DelhiFromThreeInt);
    $("#DelhiFromFourInt").text(DelhiToFourInt);
    $("#DelhiToFourInt").text(DelhiFromFourInt);
    if ($("#hdnFromDelhiDestInt").val() == 0) {
        $("#hdnFromDelhiDestInt").val(1);
        $("#DelToDubaiPrice").text("12583");
        $("#DelToSingaporePrice").text("13189");
        $("#DelToThailandPrice").text("12783");
        $("#DelToBaliPrice").text("47592");
    }
    else {
        $("#hdnFromDelhiDestInt").val(0);
        $("#DelToDubaiPrice").text("16584");
        $("#DelToSingaporePrice").text("14193");
        $("#DelToThailandPrice").text("12210");
        $("#DelToBaliPrice").text("35124");
    }
}
function ReverseFromMumbaiInt() {
    var MumbaiFromOneInt = $("#MumbaiFromOneInt").text();
    var MumbaiToOneInt = $("#MumbaiToOneInt").text();
    var MumbaiFromTwoInt = $("#MumbaiFromTwoInt").text();
    var MumbaiToTwoInt = $("#MumbaiToTwoInt").text();
    var MumbaiFromThreeInt = $("#MumbaiFromThreeInt").text();
    var MumbaiToThreeInt = $("#MumbaiToThreeInt").text();
    var MumbaiFromFourInt = $("#MumbaiFromFourInt").text();
    var MumbaiToFourInt = $("#MumbaiToFourInt").text();
    $("#MumbaiFromOneInt").text(MumbaiToOneInt);
    $("#MumbaiToOneInt").text(MumbaiFromOneInt);
    $("#MumbaiFromTwoInt").text(MumbaiToTwoInt);
    $("#MumbaiToTwoInt").text(MumbaiFromTwoInt);
    $("#MumbaiFromThreeInt").text(MumbaiToThreeInt);
    $("#MumbaiToThreeInt").text(MumbaiFromThreeInt);
    $("#MumbaiFromFourInt").text(MumbaiToFourInt);
    $("#MumbaiToFourInt").text(MumbaiFromFourInt);
    if ($("#hdnFromMumbaiDestInt").val() == 0) {
        $("#hdnFromMumbaiDestInt").val(1);
        $("#MumbaiToDubaiPrice").text("10634");
        $("#MumbaiToSingaporePrice").text("18317");
        $("#MumbaiToThailandPrice").text("14825");
        $("#MumbaiToBaliPrice").text("49119");
    }
    else {
        $("#hdnFromMumbaiDestInt").val(0);
        $("#MumbaiToDubaiPrice").text("14884");
        $("#MumbaiToSingaporePrice").text("14246");
        $("#MumbaiToThailandPrice").text("12572");
        $("#MumbaiToBaliPrice").text("32378");
    }
}
function ReverseFromBangaloreInt() {
    var BangaloreFromOneInt = $("#BangaloreFromOneInt").text();
    var BangaloreToOneInt = $("#BangaloreToOneInt").text();
    var BangaloreFromTwoInt = $("#BangaloreFromTwoInt").text();
    var BangaloreToTwoInt = $("#BangaloreToTwoInt").text();
    var BangaloreFromThreeInt = $("#BangaloreFromThreeInt").text();
    var BangaloreToThreeInt = $("#BangaloreToThreeInt").text();
    var BangaloreFromFourInt = $("#BangaloreFromFourInt").text();
    var BangaloreToFourInt = $("#BangaloreToFourInt").text();
    $("#BangaloreFromOneInt").text(BangaloreToOneInt);
    $("#BangaloreToOneInt").text(BangaloreFromOneInt);
    $("#BangaloreFromTwoInt").text(BangaloreToTwoInt);
    $("#BangaloreToTwoInt").text(BangaloreFromTwoInt);
    $("#BangaloreFromThreeInt").text(BangaloreToThreeInt);
    $("#BangaloreToThreeInt").text(BangaloreFromThreeInt);
    $("#BangaloreFromFourInt").text(BangaloreToFourInt);
    $("#BangaloreToFourInt").text(BangaloreFromFourInt);
    if ($("#hdnFromBangaloreDestInt").val() == 0) {
        $("#hdnFromBangaloreDestInt").val(1);
        $("#BangaloreToDubaiPrice").text("12810");
        $("#BangaloreToSingaporePrice").text("16536");
        $("#BangaloreToThailandPrice").text("11763");
        $("#BangaloreToBaliPrice").text("28602");
    }
    else {
        $("#hdnFromBangaloreDestInt").val(0);
        $("#BangaloreToDubaiPrice").text("18702");
        $("#BangaloreToSingaporePrice").text("15042");
        $("#BangaloreToThailandPrice").text("11142");
        $("#BangaloreToBaliPrice").text("38076");
    }
}
function ReverseFromKolkataInt() {
    var KolkataFromOneInt = $("#KolkataFromOneInt").text();
    var KolkataToOneInt = $("#KolkataToOneInt").text();
    var KolkataFromTwoInt = $("#KolkataFromTwoInt").text();
    var KolkataToTwoInt = $("#KolkataToTwoInt").text();
    var KolkataFromThreeInt = $("#KolkataFromThreeInt").text();
    var KolkataToThreeInt = $("#KolkataToThreeInt").text();
    var KolkataFromFourInt = $("#KolkataFromFourInt").text();
    var KolkataToFourInt = $("#KolkataToFourInt").text();
    $("#KolkataFromOneInt").text(KolkataToOneInt);
    $("#KolkataToOneInt").text(KolkataFromOneInt);
    $("#KolkataFromTwoInt").text(KolkataToTwoInt);
    $("#KolkataToTwoInt").text(KolkataFromTwoInt);
    $("#KolkataFromThreeInt").text(KolkataToThreeInt);
    $("#KolkataToThreeInt").text(KolkataFromThreeInt);
    $("#KolkataFromFourInt").text(KolkataToFourInt);
    $("#KolkataToFourInt").text(KolkataFromFourInt);
    if ($("#hdnFromKolkataDestInt").val() == 0) {
        $("#hdnFromKolkataDestInt").val(1);
        $("#KolkataToDubaiPrice").text("12876");
        $("#KolkataToSingaporePrice").text("16593");
        $("#KolkataToThailandPrice").text("10459");
        $("#KolkataToBaliPrice").text("26256");
    }
    else {
        $("#hdnFromKolkataDestInt").val(0);
        $("#KolkataToDubaiPrice").text("19723");
        $("#KolkataToSingaporePrice").text("10934");
        $("#KolkataToThailandPrice").text("9139");
        $("#KolkataToBaliPrice").text("27069");
    }
}
function ReverseFromChennaiInt() {
    var ChennaiFromOneInt = $("#ChennaiFromOneInt").text();
    var ChennaiToOneInt = $("#ChennaiToOneInt").text();
    var ChennaiFromTwoInt = $("#ChennaiFromTwoInt").text();
    var ChennaiToTwoInt = $("#ChennaiToTwoInt").text();
    var ChennaiFromThreeInt = $("#ChennaiFromThreeInt").text();
    var ChennaiToThreeInt = $("#ChennaiToThreeInt").text();
    var ChennaiFromFourInt = $("#ChennaiFromFourInt").text();
    var ChennaiToFourInt = $("#ChennaiToFourInt").text();
    $("#ChennaiFromOneInt").text(ChennaiToOneInt);
    $("#ChennaiToOneInt").text(ChennaiFromOneInt);
    $("#ChennaiFromTwoInt").text(ChennaiToTwoInt);
    $("#ChennaiToTwoInt").text(ChennaiFromTwoInt);
    $("#ChennaiFromThreeInt").text(ChennaiToThreeInt);
    $("#ChennaiToThreeInt").text(ChennaiFromThreeInt);
    $("#ChennaiFromFourInt").text(ChennaiToFourInt);
    $("#ChennaiToFourInt").text(ChennaiFromFourInt);
    if ($("#hdnFromChennaiDestInt").val() == 0) {
        $("#hdnFromChennaiDestInt").val(1);
        $("#ChennaiToDubaiPrice").text("12422");
        $("#ChennaiToSingaporePrice").text("17344");
        $("#ChennaiToThailandPrice").text("12538");
        $("#ChennaiToBaliPrice").text("47685");
    }
    else {
        $("#hdnFromChennaiDestInt").val(0);
        $("#ChennaiToDubaiPrice").text("16641");
        $("#ChennaiToSingaporePrice").text("15985");
        $("#ChennaiToThailandPrice").text("13230");
        $("#ChennaiToBaliPrice").text("45804");
    }
}
function submitsearch(departure, Return) {
    var activeDomesticDest = $("#hdnCheckActiveDomesicdest").val();
    var checkReverse1 = $("#hdnFromDelhiDest").val();
    var checkReverse2 = $("#hdnFromMumbaiDest").val();
    var checkReverse3 = $("#hdnFromBangaloreDest").val();
    var checkReverse4 = $("#hdnFromKolkataDest").val();
    var checkReverse5 = $("#hdnFromChennaiDest").val();
   
    if (activeDomesticDest == 1) {
        if (checkReverse1 == 1) {
            $("#hdn_flying_from").val(Return);
            $("#hdn_flying_to").val(departure);
            $("#from_wait").val(Return.split(',')[0]);
            $("#to_wait").val(departure.split(',')[0]);
        }
        else if (checkReverse1 == 0) {
            $("#hdn_flying_from").val(departure);
            $("#hdn_flying_to").val(Return);
            $("#from_wait").val(departure.split(',')[0]);
            $("#to_wait").val(Return.split(',')[0]);
        }
    }
    else if (activeDomesticDest == 2) {
        if (checkReverse2 == 1) {
            $("#hdn_flying_from").val(Return);
            $("#hdn_flying_to").val(departure);
            $("#from_wait").val(Return.split(',')[0]);
            $("#to_wait").val(departure.split(',')[0]);
        }
        else if (checkReverse2 == 0){
            $("#hdn_flying_from").val(departure);
            $("#hdn_flying_to").val(Return);
            $("#from_wait").val(departure.split(',')[0]);
            $("#to_wait").val(Return.split(',')[0]);
        }
    }
    else if (activeDomesticDest == 3) {
        if (checkReverse3 == 1) {
            $("#hdn_flying_from").val(Return);
            $("#hdn_flying_to").val(departure);
            $("#from_wait").val(Return.split(',')[0]);
            $("#to_wait").val(departure.split(',')[0]);
        }
        else if (checkReverse3 == 0){
            $("#hdn_flying_from").val(departure);
            $("#hdn_flying_to").val(Return);
            $("#from_wait").val(departure.split(',')[0]);
            $("#to_wait").val(Return.split(',')[0]);
        }
    }
    else if (activeDomesticDest == 4) {
        if (checkReverse4 == 1) {
            $("#hdn_flying_from").val(Return);
            $("#hdn_flying_to").val(departure);
            $("#from_wait").val(Return.split(',')[0]);
            $("#to_wait").val(departure.split(',')[0]);
        }
        else if (checkReverse4 == 0) {
            $("#hdn_flying_from").val(departure);
            $("#hdn_flying_to").val(Return);
            $("#from_wait").val(departure.split(',')[0]);
            $("#to_wait").val(Return.split(',')[0]);
        }
    }
    else if (activeDomesticDest == 5) {
        if (checkReverse5 == 1) {
            $("#hdn_flying_from").val(Return);
            $("#hdn_flying_to").val(departure);
            $("#from_wait").val(Return.split(',')[0]);
            $("#to_wait").val(departure.split(',')[0]);
        }
        else if (checkReverse5 == 0){
            $("#hdn_flying_from").val(departure);
            $("#hdn_flying_to").val(Return);
            $("#from_wait").val(departure.split(',')[0]);
            $("#to_wait").val(Return.split(',')[0]);
        }
    }
   
  
   

    var today = new Date();
    var newdate = new Date();
    newdate.setDate(today.getDate() + 30);
    var monthstr = (newdate.getMonth() + 1);
    var FromDate_str = ((newdate.getDate().toString().length == 1) ? "0" + newdate.getDate() : newdate.getDate()) + "/" + ((monthstr.toString().length == 1) ? "0" + monthstr : monthstr) + "/" + newdate.getFullYear();

    $("#Fly_depdate").val(FromDate_str)
    $("#hfFromDate").val(FromDate_str)
    //newdate = new Date();
    //newdate.setDate(today.getDate() + 36);
    //var monthstr = (newdate.getMonth() + 1);
    //var Todate_str = ((newdate.getDate().toString().length == 1) ? "0" + newdate.getDate() : newdate.getDate()) + "/" + ((monthstr.toString() == 1) ? "0" + monthstr : monthstr) + "/" + newdate.getFullYear();

    //$("#Fly_retdate").val(Todate_str)
    //$("#hfToDate").val(Todate_str)
    $("#hfTripType").val("false");
    document.getElementById("searchengine_btn").click();

}

function submitsearchi(departure, Return) {
    
    var ActiveIntdest = $("#hdnCheckActiveIntdest").val();
    var checkReverse1 = $("#hdnFromDelhiDestInt").val();
    var checkReverse2 = $("#hdnFromMumbaiDestInt").val();
    var checkReverse3 = $("#hdnFromBangaloreDestInt").val();
    var checkReverse4 = $("#hdnFromKolkataDestInt").val();
    var checkReverse5 = $("#hdnFromChennaiDestInt").val();
    
    if (ActiveIntdest == 1) {
        if (checkReverse1 == 1) {
            $("#hdn_flying_from").val(Return);
            $("#hdn_flying_to").val(departure);
            $("#from_wait").val(Return.split(',')[0]);
            $("#to_wait").val(departure.split(',')[0]);
        }
        else if (checkReverse1 == 0) {
            $("#hdn_flying_from").val(departure);
            $("#hdn_flying_to").val(Return);
            $("#from_wait").val(departure.split(',')[0]);
            $("#to_wait").val(Return.split(',')[0]);
        }
    }
    else if (ActiveIntdest == 2) {
        if (checkReverse2 == 1) {
            $("#hdn_flying_from").val(Return);
            $("#hdn_flying_to").val(departure);
            $("#from_wait").val(Return.split(',')[0]);
            $("#to_wait").val(departure.split(',')[0]);
        }
        else if (checkReverse2 == 0) {
            $("#hdn_flying_from").val(departure);
            $("#hdn_flying_to").val(Return);
            $("#from_wait").val(departure.split(',')[0]);
            $("#to_wait").val(Return.split(',')[0]);
        }
    }
    else if (ActiveIntdest == 3) {
        if (checkReverse3 == 1) {
            $("#hdn_flying_from").val(Return);
            $("#hdn_flying_to").val(departure);
            $("#from_wait").val(Return.split(',')[0]);
            $("#to_wait").val(departure.split(',')[0]);
        }
        else if (checkReverse3 == 0) {
            $("#hdn_flying_from").val(departure);
            $("#hdn_flying_to").val(Return);
            $("#from_wait").val(departure.split(',')[0]);
            $("#to_wait").val(Return.split(',')[0]);
        }
    }
    else if (ActiveIntdest == 4) {
        if (checkReverse4 == 1) {
            $("#hdn_flying_from").val(Return);
            $("#hdn_flying_to").val(departure);
            $("#from_wait").val(Return.split(',')[0]);
            $("#to_wait").val(departure.split(',')[0]);
        }
        else if (checkReverse4 == 0) {
            $("#hdn_flying_from").val(departure);
            $("#hdn_flying_to").val(Return);
            $("#from_wait").val(departure.split(',')[0]);
            $("#to_wait").val(Return.split(',')[0]);
        }
    }
    else if (ActiveIntdest == 5) {
        if (checkReverse5 == 1) {
            $("#hdn_flying_from").val(Return);
            $("#hdn_flying_to").val(departure);
            $("#from_wait").val(Return.split(',')[0]);
            $("#to_wait").val(departure.split(',')[0]);
        }
        else if (checkReverse5 == 0) {
            $("#hdn_flying_from").val(departure);
            $("#hdn_flying_to").val(Return);
            $("#from_wait").val(departure.split(',')[0]);
            $("#to_wait").val(Return.split(',')[0]);
        }
    }
   



    var today = new Date();
    var newdate = new Date();
    newdate.setDate(today.getDate() + 30);
    var monthstr = (newdate.getMonth() + 1);
    var FromDate_str = ((newdate.getDate().toString().length == 1) ? "0" + newdate.getDate() : newdate.getDate()) + "/" + ((monthstr.toString().length == 1) ? "0" + monthstr : monthstr) + "/" + newdate.getFullYear();

    $("#Fly_depdate").val(FromDate_str)
    $("#hfFromDate").val(FromDate_str)
    //newdate = new Date();
    //newdate.setDate(today.getDate() + 36);
    //var monthstr = (newdate.getMonth() + 1);
    //var Todate_str = ((newdate.getDate().toString().length == 1) ? "0" + newdate.getDate() : newdate.getDate()) + "/" + ((monthstr.toString() == 1) ? "0" + monthstr : monthstr) + "/" + newdate.getFullYear();

    //$("#Fly_retdate").val(Todate_str)
    //$("#hfToDate").val(Todate_str)
    $("#hfTripType").val("false");
    document.getElementById("searchengine_btn").click();

}
function SetSearchfield(val) {

    var res = val.split("|");
    $("#hdn_flying_from").val(res[0]);
    $("#hdn_flying_to").val(res[1]);
    $("#hfFromDate").val(res[2]);
    var today = new Date();
    var fromDat = $("#hfFromDate").val();
    if (fromDat.indexOf("/") != -1) { x = fromDat.split("/"); } else { x = fromDat.split("-"); }

    var Dptdate = new Date(x[2], (x[1] - 1), x[0]);

    if (Dptdate >= today) {

    }
    else {
        var today = new Date();
        var newdate = new Date();
        newdate.setDate(today.getDate() + 2);
        var monthstr = (newdate.getMonth() + 1);
        var FromDate_str = ((newdate.getDate().toString().length == 1) ? "0" + newdate.getDate() : newdate.getDate()) + "/" + ((monthstr.toString().length == 1) ? "0" + monthstr : monthstr) + "/" + newdate.getFullYear();

        $("#hfFromDate").val(FromDate_str);
    }
    $("#hfToDate").val(res[3]);
    $("#hfTripType").val(res[4]);
    //if (res[4] == "true") {
    //    $("#Fly_return_ms").val("Return");
    //}
    //else {
    //    $("#Fly_return_ms").val("");
    //}
    $("#ddlCabinClass").val(res[5]);
    $("#sub1").val(res[6]);
    $("#sub2").val(res[7]);
    $("#sub3").val(res[8]);
    $("#from_wait").val(res[11]);
    $("#to_wait").val(res[12]);

    document.getElementById("searchengine_btn").click();


}


function CheckValidation() {


    var Adult = 0, Child = 0, Infant = 0, total = 0;
    Adult = new Number($("#sub1").val());

    Child = new Number($("#sub2").val());
    Infant = new Number($("#sub3").val());
    total = (Adult + Child + Infant);
    if ($("#hdn_flying_from").val() == "" || $("#hdn_flying_from").val().length < 3) {
        alert("Please enter departure airport!!");

        return false;
    }




    if ($("#hdn_flying_to").val() == "" || $("#hdn_flying_to").val().length < 3) {
        alert("Please enter destination airport!!");

        return false;
    }


    if ($("#hdn_flying_from").val() == $("#hdn_flying_to").val()) {
        alert("Departure Airport and Destination Airport can't be same!!");

        return false;
    }





    if ($("#hfFromDate").val() == "") {
        alert("Please enter departure date!!");
        if ($("#mob").val() != "Y")
        {
            $("#Fly_dep_datepickerid").focus(200);
        }

       
        return false;
    }
    if ($("#hfTripType").val() == "true") {

        if ($("#hfToDate").val() == "") {
            alert(" Please enter return date!!");
            if ($("#mob").val() != "Y")
            {
                $("#Fly_ret_datepickerid").focus(200);
            }
            
            return false;
        }
    }

    else {
        $("#wait_box_ottIn").hide();


    }

    if (Infant > Adult) {
        alert("Number of infants should be equal to or less then number of adults!!");
        return false;
    }
    if (Child > (Adult * 2)) {
        alert("Maximum number of child should be double number of adults!!");
        return false;
    }
    if (total > 9) {
        alert("Total no of person should not be more than 9!!");
        return false;
    }
    if (total == 0) {
        alert("Please Choose passenger!!");
        return false;
    }
    var validformat = /^\d{2}\/\d{2}\/\d{4}$/
    var date2 = new Date();
    date2.setDate(date2.getDate());
    var d2 = date2.getDate();
    var day2 = (d2 < 10) ? '0' + d2 : d2;
    var m2 = date2.getMonth() + 1;
    var month2 = (m2 < 10) ? '0' + m2 : m2;
    var yy2 = date2.getYear();
    var year2 = (yy2 < 1000) ? yy2 + 1900 : yy2;

    var CurrDate = new Date(year2, (month2 - 1), day2);
    var one_day = 1000 * 60 * 60 * 24;
    var x;
    var fromDat = $("#hfFromDate").val();
    if (fromDat.indexOf("/") != -1) { x = fromDat.split("/"); } else { x = fromDat.split("-"); }

    var Dptdate = new Date(x[2], (x[1] - 1), x[0]);

    if ($("#hfTripType").val() == "true") {
        var Todate = $("#hfToDate").val();
        if (Todate.indexOf("/") != -1) { x = Todate.split("/"); } else { x = Todate.split("-"); }
        var RetDate = new Date(x[2], (x[1] - 1), x[0]);

        if (RetDate < Dptdate) {
            alert("Return Date Must be greater or equal to Depart date");

            return false;
        }

    }
    else {
        $("#hfToDate").val("")

    }
    $("#hfAdult").val(Adult);
    $("#hfChild").val(Child);
    $("#hfInfant").val(Infant);
    var direct = $("#chkIsDirect").is(":checked");
    $("#hfdirect").val(direct);
    //   var fromid = $("#flying_from").val()
    //$("#spandatedeparture").html($("#depdate").val());
    //$("#spandeparture").html($("#retdate").val());
    //var fromdest = $("#flying_from").val().split('(')[1]
    //var todest = $("#flying_to").val().split('(')[1]


    var _Text = 0;
    //if ($("#modify").val() == "2")
    //{
    //    $("#change_search").hide();
    //    if ($("#flying_from").val()  != $("#flying_from_old").val()) {
    //        _Text++;
    //    }

    //    if ($("#flying_to").val() != $("#flying_to_old").val()) {
    //        _Text++;
    //    }
    //    if ($("#hfFromDate_old").val() != $("#hfFromDate").val()) {
    //        _Text++;

    //    }

    //    if ($("#hfToDate").val() != $("#hfToDate_old").val()) {
    //        _Text++;

    //    }

    //    if ($("#hfAdult_old").val() != Adult) {
    //        _Text++;

    //    }
    //    if ($("#hfChild_old").val() != Child) {
    //        _Text++;

    //    }
    //    if ($("#hfInfant_old").val() != Infant) {
    //        _Text++;

    //    }

    //    if ($("#ddlAirline").val() != $("#ddlAirline_old").val()) {
    //        _Text++;

    //    }

    //    if ($("#ddlCabinClass").val() !=$("#ddlCabinClass_old").val()) {
    //        _Text++;

    //    }

    //    if ($("#hfdirect").val() != $("#hfdirect_old").val()) {
    //        _Text++;

    //    }

    //    if ($("#hfTripType").val()  != $("#hfTripType_old").val()) {
    //        _Text++;

    //    }
    //    if (_Text == 0) {
    //        $("#change_search").show();

    //        return false;
    //    }
    //}


    //var from_CityName;
    //if ($("#flying_from").val().indexOf(",") != -1) {
    //    from_CityName = $("#flying_from").val().split(",");
    //    from_CityName = from_CityName[0];
    //}
    //else {
    //    from_CityName = $("#flying_from").val().split("-");
    //    from_CityName = from_CityName[1];
    //}


    //var To_CityName;
    //if ($("#flying_to").val().indexOf(",") != -1) {
    //    To_CityName = $("#flying_to").val().split(",");
    //    To_CityName = To_CityName[0];
    //}
    //else {
    //    To_CityName = $("#flying_to").val().split("-");
    //    To_CityName = To_CityName[1];
    //}




    //$("#fromid").html("" + from_CityName + " (" + fromdest);
    //$("#toid").html("" + To_CityName + " (" + todest)
    //$("#adults").html(Adult)
    //$("#childers").html(Child)
    //$("#infants").html(Infant)





    if ($("#device_app").val() == "1") {

        $('#dvProgress_M').show();

        $("#from_to_wait").html($("#from_wait").val() + " <i class='fa fa-long-arrow-right'></i> " + $("#to_wait").val() + "");
        if ($("#modify").val() == "1")
        {

            if ($("#mob").val() == "Y")
            {
                if ($("#hfTripType").val() == "true") {
                    $("#date_wait").html($("#Fly_depdate_Text").val() + " - " + $("#Fly_retdate_Text").val() + "" + " - " + document.getElementById('adult').value + " Traveller(s)," + $("#ddlCabinClass option:selected").text());
                }

                else {
                    $("#date_wait").html($("#Fly_depdate_Text").val() + " - " + document.getElementById('adult').value + " Traveller(s)," + $("#ddlCabinClass option:selected").text());
                }
            }
            else
            {
                if ($("#hfTripType").val() == "true") {
                    $("#date_wait").html($("#Fly_depdate_val").html() + " - " + $("#Fly_retdate_val").html() + "" + " - " + document.getElementById('adult').value + " Traveller(s)," + $("#ddlCabinClass option:selected").text());
                }

                else {
                    $("#date_wait").html($("#Fly_depdate_val").html() + " - " + document.getElementById('adult').value + " Traveller(s)," + $("#ddlCabinClass option:selected").text());
                }
            }

           

        }

        else {
            $("#date_wait").html($("#Fly_depdate").val() + " - " + $("#Fly_retdate").val() + "" + " - " + document.getElementById('adult').value + " Traveller(s)," + $("#ddlCabinClass option:selected").text());
        }


    }
    else {

        $('#divprogress_D').show();

        $("#flying_from_N_Wait").val($("#from_wait").val());
        $("#flying_to_N_Wait").val($("#to_wait").val());
        if ($("#modify").val() == "1") {
            $("#Fly_depdate_Wait").val($("#hfFromDate").val());
            $("#Fly_retdate_Wait").val($("#hfToDate").val());

            var fd = $("#hfFromDate").val();
            var f_date;
            if (fd == "") {

            }
            else {

                var arr = fd.split('/');
                var d = arr[0];
                var m = arr[1];
                var y = arr[2];
                var fm = getfulfdate(m);
                f_date = d + " " + fm + " " + y;
                $("#Fly_depdate_Wait").val(f_date);
            }


            var fr = $("#hfToDate").val();
            var f_rdate;
            if (fr == "") {

            }
            else {

                var arr = fr.split('/');
                var d = arr[0];
                var m = arr[1];
                var y = arr[2];
                var fm = getfulfdate(m);
                f_rdate = d + " " + fm + " " + y;

                $("#Fly_retdate_Wait").val(f_rdate);
            }


        }

        else {
            $("#Fly_depdate_Wait").val($("#Fly_depdate").val());
            $("#Fly_retdate_Wait").val($("#Fly_retdate").val());


        }
        if ($("#hfTripType").val() == "true") {
            $("#roundway_r_Wait").prop("checked", true);
        }

        else {
            $("#oneway_r_Wait").prop("checked", true);
        }
        $('#travel_Economy_Wait').val(document.getElementById('adult').value + " Traveller(s)," + $("#ddlCabinClass option:selected").text());

    }


    //travel_Economy_Wait
    //Fly_retdate_Wait
    //Fly_depdate_Wait



    //



    // $("#oneway_r").prop("checked", false);



    //  move();



    return true;

}
function checkdata() {


    var downKeyEvent = $.Event("keydown");
    downKeyEvent.keyCode = $.ui.keyCode.DOWN;  // event for pressing "down" key

    var enterKeyEvent = $.Event("keydown");
    enterKeyEvent.keyCode = $.ui.keyCode.ENTER;  // event for pressing "enter" key




    $("#flying_from").trigger(enterKeyEvent); // Enter key selects highlighted item
    $("#flying_to").focus();


}
function showfilter() {

    $(".filtbx").show();
}
function closefilter() {

    $(".filtbx").hide();
}
function showmodify() {

    $(".modifybx").show();
}
function closemodify() {

    $(".modifybx").hide();
}
function checkdata1() {


    var downKeyEvent1 = $.Event("keydown");
    downKeyEvent1.keyCode = $.ui.keyCode.DOWN;  // event for pressing "down" key

    var enterKeyEvent1 = $.Event("keydown");
    enterKeyEvent1.keyCode = $.ui.keyCode.ENTER;  // event for pressing "enter" key



    $("#flying_to").trigger(enterKeyEvent1); // Enter key selects highlighted item
    $("#depdate").focus();
}
$(document).mouseup(function (e) {
    var a = $(".popup");
    0 === a.has(e.target).length && a.hide();

    var a = $(".fromtopopup");
    0 === a.has(e.target).length && a.hide();
    a = $(".login_top_open");
    0 === a.has(e.target).length && a.hide();


});


$(document).ready(function ()
{
    $(".link1").click(function () {
        $(".top_route").toggle();

    });
    $(".link2").click(function () {
        $(".dom_dest").toggle();

    });
    $(".link3").click(function () {
        $(".quik_lnk").toggle();
    });

    $(".economy").change(function ()
    {
        $("#classtype_txt").val("Economy");
        $("#ddlCabinClass").val("2");
        $(this).addClass("active");
        $(".business").removeClass("active");
        $(".premium").removeClass("active");
        $(".first").removeClass("active");
        

    });
    $(".premium").change(function ()
    {
        $(this).addClass("active");
        $("#classtype_txt").val("Premium Economy");
        $("#ddlCabinClass").val("3");
        $(".business").removeClass("active");
        $(".economy").removeClass("active");
        $(".first").removeClass("active");
       
    });
    $(".business").change(function ()
    { 
        $("#classtype_txt").val("Business");
        $("#ddlCabinClass").val("4");
        $(this).addClass("active");
        $(".premium").removeClass("active");
        $(".economy").removeClass("active");
        $(".first").removeClass("active");

    });

    $(".first").change(function ()
    {
        $("#classtype_txt").val("First");
        $("#ddlCabinClass").val("6");
        $(this).addClass("active");
        $(".premium").removeClass("active");
        $(".economy").removeClass("active");
        $(".business").removeClass("active");
        
    });
    $(".closelogin").click(function () {
        $(".login_top_open").hide();

    });

   


    $(".more-details").click(function () {
        $(".more-option").slideToggle('slow');
    });

    $('#inlineRadio1').click(function () {
        if ($('#inlineRadio1').is(':checked')) { $("#Returningdiv").show(500); }
    });
    $('#inlineRadio2').click(function () {

        if ($('#inlineRadio2').is(':checked')) { $("#Returningdiv").hide(500); }
    });

    $('.class-type').click(function () {
        $('.seat-type').show();

    });
    $('.adult_div_mob').click(function () {
        $('.pax_mob').show();

    });
    /*adult*/
    $('#adult_div').click(function () {
        $('.adultdrop').show();


    });
    $('.done').click(function () {
        $('.adultdrop').hide();
        $('#select_class').focus();
    });
    $('.paxclose').click(function () {
        $('.pax_mob').hide();
        //$('#select_class').focus();
    });

    $('.classclose').click(function () {
        $('.seat-type').hide();
        //$('#select_class').focus();
    });

    /* line1*/
    $("#sub1plus").click(function () {



        var ss = parseFloat($("#sub1").val());
        var ss1 = parseFloat($("#sub2").val());
        var ss2 = parseFloat($("#sub3").val());
        if ((ss + ss1 + ss2) >= 9) {

            var ss = "Total no of person should not be more than 9!!";
            ss += "Call us  for bulk bookings.";
            alert(ss);
            document.getElementById('sub1plus').disabled = true;
            document.getElementById('sub2plus').disabled = true;
            document.getElementById('sub3plus').disabled = true;
        }
        else {
            var e = $("#sub1").val();
            $("#sub1").val(parseInt(e) + 1)
        }

    });
    $("#sub1minus").click(function () {
        document.getElementById('sub1plus').disabled = false;
        document.getElementById('sub2plus').disabled = false;
        document.getElementById('sub3plus').disabled = false;
        var e = $("#sub1").val();
        1 != parseInt(e) && $("#sub1").val(parseInt(e) - 1)
    });
    $("#sub2plus").click(function () {




        var ss = parseFloat($("#sub1").val());
        var ss1 = parseFloat($("#sub2").val());
        var ss2 = parseFloat($("#sub3").val());
        if ((ss + ss1 + ss2) >= 9) {

            var ss = "Total no of person should not be more than 9!!";
            ss += "\nCall us  for bulk bookings.";
            alert(ss);
            document.getElementById('sub1plus').disabled = true;
            document.getElementById('sub2plus').disabled = true;
            document.getElementById('sub3plus').disabled = true;



        }
        else {
            var e = $("#sub2").val();
            $("#sub2").val(parseInt(e) + 1)
        }

    });
    $("#sub2minus").click(function () {
        document.getElementById('sub1plus').disabled = false;
        document.getElementById('sub2plus').disabled = false;
        document.getElementById('sub3plus').disabled = false;
        var e = $("#sub2").val();
        0 != parseInt(e) && $("#sub2").val(parseInt(e) - 1)
    });
    $("#sub3plus").click(function () {



        var ss = parseFloat($("#sub1").val());
        var ss1 = parseFloat($("#sub2").val());
        var ss2 = parseFloat($("#sub3").val());
        if ((ss + ss1 + ss2) >= 9) {

            var ss = "Total no of person should not be more than 9!!";
            ss += "\nCall us  for bulk bookings.";
            alert(ss);
            document.getElementById('sub1plus').disabled = true;
            document.getElementById('sub2plus').disabled = true;
            document.getElementById('sub3plus').disabled = true;



        }
        else {
            var e = $("#sub3").val();
            $("#sub3").val(parseInt(e) + 1)
        }



    });
    $("#sub3minus").click(function () {
        document.getElementById('sub1plus').disabled = false;
        document.getElementById('sub2plus').disabled = false;
        document.getElementById('sub3plus').disabled = false;
        var e = $("#sub3").val();
        0 != parseInt(e) && $("#sub3").val(parseInt(e) - 1)
    });
    $(".maincalulation").click(function () {
        var e = $("#sub1").val(),
            a = $("#sub2").val(),
            o = $("#sub3").val();
        document.getElementById('adult').value = parseInt(e) + parseInt(a) + parseInt(o)


        if ($("#mob").val() == "Y")
        {
            $('#travel_id').val(document.getElementById('adult').value);
           

        }
        else
        {
            $('#travel_id').html(document.getElementById('adult').value);
            $('#travel_Economy').val(document.getElementById('adult').value + " Traveller(s)," + $("#ddlCabinClass option:selected").text());


        }
    });




    /*select class*/
    $('#select_class').click(function () {
        $('.selectclass').show();

    });

    $('.class1').click(function () {
        var sv = $(this).html();
        $('#select_class').val(sv);
        $('.selectclass').hide();
        $('#Select_Airline').focus();

    });



    /*select airline*/

    $('#Select_Airline').click(function () {
        $('.airlinedrop').show();

    });

    $('.s_airline').click(function () {
        var sv = $(this).html();
        $('#Select_Airline').val(sv);
        $('.airlinedrop').hide();

    });

    /*short by*/

    $('#shortby').click(function () {
        $('.airlinedrop').show();

    });

    $('.s_airline').click(function () {
        var sv = $(this).html();
        $('#shortby').val(sv);
        $('.airlinedrop').hide();

    });

    /*form end*/

    /*tab1*/



});


//function closefun() {
//    $('.filter-result').hide(500);
//    $('body').removeClass('hmbody');

//}

//function filshow() {
//    $('.filter-result').show(500);
//    $('.mdsearch').css("display", "none");
//    $('body').addClass('hmbody');
//}

//function midfcls() {
//    $('.mdsearch').show(500);
//    $('.filter-result').css("display", "none");
//    $('body').addClass('hmbody');
//}
//function mdfclose() {
//    $('.mdsearch').hide(500);
//    $('body').removeClass('hmbody');
//}

function swapfun() {

    var flying_from = $("#flying_from").val();
    var flying_to = $("#flying_to").val();
    $("#flying_from").val(flying_to);
    $("#flying_to").val(flying_from);
    //flying_from = $("#Fly_Depart_airport").html();
    //flying_to = $("#Fly_Dest_airport").html();
    //$("#Fly_Depart_airport").html(flying_to);
    //$("#Fly_Dest_airport").html(flying_from);
    flying_from = $("#hdn_flying_from").val();
    flying_to = $("#hdn_flying_to").val();
    $("#hdn_flying_from").val(flying_to);
    $("#hdn_flying_to").val(flying_from);
    flying_from = $("#from_wait").val();
    flying_to = $("#to_wait").val();
    $("#from_wait").val(flying_to);
    $("#to_wait").val(flying_from);
}





function reset_stop() {
    //$(".resltlayer").show();
    $(".outbound_result").show();
    $(".checkbox_stop").prop("checked", false);
}

function reset_airline() {
    /*$(".resltlayer").show();*/
    $(".outbound_result").show();
    $(".checkbox_air").prop("checked", false);

}

function reset_departure() {
    $(".outbound_result").show();
    $(".checkbox_dep").prop("checked", false);

}

function reset_return() {
    $(".inbound_result").show();
    $(".checkbox_ret").prop("checked", false);
}



function reset_departure_Combind() {
    $(".outbound_result").show();
    $(".checkbox_dep").prop("checked", false);
}

function reset_return_Combind() {

    $(".outbound_result").show();
    $(".checkbox_ret").prop("checked", false);

}


function hidepopup() {
    $(".fromtopopup").hide();
}

function autodiv_from() {
    $('#flying_from').val("");
    $(".frompopup").show()
    $('#flying_from').focus()

    $('#flying_from').trigger('click')
    //  $('#flying_from').trigger("focus");



}

function autodiv_to() {
    $('#flying_to').val("");
    $(".topopup").show()
    $('#flying_to').focus()

    $('#flying_to').trigger('click')
    //  $('#flying_from').trigger("focus");



}

function getfulfdate(m) {

    var day = "";
    switch (m) {
        case "01":
            day = "Jan";
            break;
        case "02":
            day = "Feb";
            break;
        case "03":
            day = "Mar";
            break;
        case "04":
            day = "Apr";
            break;
        case "05":
            day = "May";
            break;
        case "06":
            day = "Jun";
            break;
        case "07":
            day = "Jul";
            break;
        case "08":
            day = "Aug";
            break;
        case "09":
            day = "Sep";
            break;
        case "10":
            day = "Oct";
            break;
        case "11":
            day = "Nov";
            break;
        case "12":
            day = "Dec";
            break;


    }
    return day;
}