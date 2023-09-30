jQuery(document).ready(function( $ ) {
   
    $(".dest-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        nav: true,
        loop: true,
        margin: 8,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsive: {
            0: { items: 1, margin: 0 }, 430: { items: 2 }, 640: { items: 3 }, 840: { items: 4 }, 1200: { items: 3 }
        }
    });
    $(".most-booked-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        nav: true,
        loop: true,
        margin: 10,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsive: {
            0: { items: 1, margin: 0 }, 486: { items: 2, margin: 3 }, 840: { items: 3, margin: 5}, 1030: { items: 3 }, 1100: {items:2}
        }
    });
    $(".pop-al-deal-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        nav: true,
        loop: true,
        margin: 10,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsive: {
            0: { items: 1, margin: 0 }, 430: { items: 2, margin: 5 }, 640: { items: 3, margin: 3 }, 840: { items: 4, margin:8 }, 1200: { items: 3 }
        }
    });
    $(".lowest-flight-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        nav: true,
        loop: true,
        margin: 10,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsive: {
            0: { items: 1, margin: 3 }, 479: { items: 2, margin: 3}, 645: { items: 2, margin: 3 }, 840: { items: 3, margin:3 }, 1200: { items: 3 }
        }
    });
    $(".travel-deal-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        nav: true,
        loop: true,
        margin: 10,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsive: {
            0: { items: 1, margin: 0 }, 430: { items: 2, margin: 5 }, 645: { items: 3, margin: 5 }, 840: { items: 4 }, 1200: { items: 3 }
        }
    });

    $("#mod-ret-bok").click(function () {
        $(".mod-se-form").removeClass("one-way");
        $(".mod-se-form").removeClass("grp-way");
        $(".mod-se-form").addClass("ret-way");
    });
    $("#mod-onew-bok").click(function () {
        $(".mod-se-form").removeClass("ret-way");
        $(".mod-se-form").removeClass("grp-way");
        $(".mod-se-form").addClass("one-way");
    });
    $("#mod-grp-bok").click(function () {
        $(".mod-se-form").removeClass("ret-way");
        $(".mod-se-form").removeClass("one-way");
        $(".mod-se-form").addClass("grp-way");
    });    
    $(".dest-fare-type ul li").click(function () {
        $(".dest-fare-type ul li").removeClass("selected");
        $(this).addClass("selected");
    });
    $(".dest-fare-wr>ul>li .dest-fare-cont").click(function () {
        $(".dest-fare-form").slideDown();
    });
    $(".dest-fare-form-cl").click(function () {        
        $(this).parents(".dest-fare-form").slideUp("slow");
    });
    if ($(window).width() < 1025) {
        $(".mod-se-mob").click(function () {
            $(".res-head").show();
            $(".mod-sea").slideDown(900);
            $("body").css("overflow", "hidden");
        });
    }
    else {
        $(".mod-se-mob").click(function () {
            $(".res-head").hide();
            $(".mod-sea").show();
        });
    }

    $(".se-txt-box-span").click(function () {
        $(this).siblings("input").focus();
    });
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('body').addClass('scr');
        } else {
            $('body').removeClass('scr');
        }
    });
  
    $(".matrix-fare-sli").owlCarousel({
        autoplay: false,
        dots: false,
        loop: true,
        nav: true,
        navText: [" <i class='fa fa-chevron-left'></i>", " <i class='fa fa-chevron-right'></i>"],
        navClass: ['owl-prev', 'owl-next'],
        margin: 0,
        responsive: {
            0: { items: 1 }, 480: { items: 2 }, 568: { items: 3 }, 768: { items: 4 }, 1000: { items: 5 }, 1200: { items: 6 }
        }
    });
    $(".fil-ul .fil-ul-link").click(function () {
        $(this).siblings(".fil-ul-inner").slideToggle();
        $(this).siblings(".fil-fly-time-box-cont").slideToggle();
        $("i", this).toggleClass("fa-angle-down fa-angle-up");
    });
   
    
    $(".sortby-category li").click(function () {
        $(".sortby-category li").removeClass("active");
        $(this).addClass("active");
    });
    $(".fil-mob").click(function () {
        $(".sea-res-filter").show();
        $("body").css("overflow", "hidden");      
        $("#res-fil").animate({ "left": "0" }, 1000);
    });
    $("#fil-res-cl").click(function () {
        $("#res-fil").animate({ "left": "-=350px" }, 800, function () {
            $(".sea-res-filter").hide();
            $("body").css("overflow", "auto");
        });
    });
    $("#mod-res-cl").click(function () {
        $(".mod-sea").slideUp(900);
        $("body").css("overflow", "auto");
    });
    $(function () {        
        $("#Depart-slider-container").slider({
            range: true,
            min: 0,
            max: 1440,
            step: 15,
            values: [000, 1440],
            slide: function (e, ui) {
                var hours1 = Math.floor(ui.values[0] / 60);
                var minutes1 = ui.values[0] - (hours1 * 60);
                if (hours1.length == 1) hours1 = '0' + hours1;
                if (minutes1.length == 1) minutes1 = '0' + minutes1;
                if (minutes1 == 0) minutes1 = '00';
                if (hours1 >= 12) {
                    if (hours1 == 12) {
                        hours1 = hours1;
                        minutes1 = minutes1 + " PM";
                    } else {
                        hours1 = hours1 - 12;
                        minutes1 = minutes1 + " PM";
                    }
                } else {
                    hours1 = hours1;
                    minutes1 = minutes1 + " AM";
                }
                if (hours1 == 0) {
                    hours1 = 12;
                    minutes1 = minutes1;
                }
                $('.slider-time').html(hours1 + ':' + minutes1);
                var hours2 = Math.floor(ui.values[1] / 60);
                var minutes2 = ui.values[1] - (hours2 * 60);

                if (hours2.length == 1) hours2 = '0' + hours2;
                if (minutes2.length == 1) minutes2 = '0' + minutes2;
                if (minutes2 == 0) minutes2 = '00';
                if (hours2 >= 12) {
                    if (hours2 == 12) {
                        hours2 = hours2;
                        minutes2 = minutes2 + " PM";
                    } else if (hours2 == 24) {
                        hours2 = 11;
                        minutes2 = "59 PM";
                    } else {
                        hours2 = hours2 - 12;
                        minutes2 = minutes2 + " PM";
                    }
                } else {
                    hours2 = hours2;
                    minutes2 = minutes2 + " AM";
                }
                $('.slider-time2').html(hours2 + ':' + minutes2);
            }
        });

        $("#Return-slider-container").slider({
            range: true,
            min: 0,
            max: 1440,
            step: 15,
            values: [0, 1440],
            slide: function (e, ui) {
                var hours1 = Math.floor(ui.values[0] / 60);
                var minutes1 = ui.values[0] - (hours1 * 60);

                if (hours1.length == 1) hours1 = '0' + hours1;
                if (minutes1.length == 1) minutes1 = '0' + minutes1;
                if (minutes1 == 0) minutes1 = '00';
                if (hours1 >= 12) {
                    if (hours1 == 12) {
                        hours1 = hours1;
                        minutes1 = minutes1 + " PM";
                    } else {
                        hours1 = hours1 - 12;
                        minutes1 = minutes1 + " PM";
                    }
                } else {
                    hours1 = hours1;
                    minutes1 = minutes1 + " AM";
                }
                if (hours1 == 0) {
                    hours1 = 12;
                    minutes1 = minutes1;
                }
                $('.slider-time3').html(hours1 + ':' + minutes1);

                var hours2 = Math.floor(ui.values[1] / 60);
                var minutes2 = ui.values[1] - (hours2 * 60);

                if (hours2.length == 1) hours2 = '0' + hours2;
                if (minutes2.length == 1) minutes2 = '0' + minutes2;
                if (minutes2 == 0) minutes2 = '00';
                if (hours2 >= 12) {
                    if (hours2 == 12) {
                        hours2 = hours2;
                        minutes2 = minutes2 + " PM";
                    } else if (hours2 == 24) {
                        hours2 = 11;
                        minutes2 = "59 PM";
                    } else {
                        hours2 = hours2 - 12;
                        minutes2 = minutes2 + " PM";
                    }
                } else {
                    hours2 = hours2;
                    minutes2 = minutes2 + " AM";
                }

                $('.slider-time4').html(hours2 + ':' + minutes2);
            }
        });

        $("#DepartDuration-slider-container").slider({
            range: true,
            min: 0,
            max: 1440,
            step: 15,
            values: [0, 1440],
            slide: function (e, ui) {
                var hours1 = Math.floor(ui.values[0] / 60);
                var minutes1 = ui.values[0] - (hours1 * 60);

                if (hours1.length == 1) hours1 = '0' + hours1;
                if (minutes1.length == 1) minutes1 = '0' + minutes1;
                if (minutes1 == 0) minutes1 = '00';
                if (hours1 >= 12) {
                    if (hours1 == 12) {
                        hours1 = hours1;
                        minutes1 = minutes1 + " PM";
                    } else {
                        hours1 = hours1 - 12;
                        minutes1 = minutes1 + " PM";
                    }
                } else {
                    hours1 = hours1;
                    minutes1 = minutes1 + " AM";
                }
                if (hours1 == 0) {
                    hours1 = 12;
                    minutes1 = minutes1;
                }



                $('.slider-time5').html(hours1 + ':' + minutes1);

                var hours2 = Math.floor(ui.values[1] / 60);
                var minutes2 = ui.values[1] - (hours2 * 60);

                if (hours2.length == 1) hours2 = '0' + hours2;
                if (minutes2.length == 1) minutes2 = '0' + minutes2;
                if (minutes2 == 0) minutes2 = '00';
                if (hours2 >= 12) {
                    if (hours2 == 12) {
                        hours2 = hours2;
                        minutes2 = minutes2 + " PM";
                    } else if (hours2 == 24) {
                        hours2 = 11;
                        minutes2 = "59 PM";
                    } else {
                        hours2 = hours2 - 12;
                        minutes2 = minutes2 + " PM";
                    }
                } else {
                    hours2 = hours2;
                    minutes2 = minutes2 + " AM";
                }

                $('.slider-time6').html(hours2 + ':' + minutes2);
            }
        });

        $("#ReturnDuration-slider-container").slider({
            range: true,
            min: 0,
            max: 1440,
            step: 15,
            values: [0, 1440],
            slide: function (e, ui) {
                var hours1 = Math.floor(ui.values[0] / 60);
                var minutes1 = ui.values[0] - (hours1 * 60);

                if (hours1.length == 1) hours1 = '0' + hours1;
                if (minutes1.length == 1) minutes1 = '0' + minutes1;
                if (minutes1 == 0) minutes1 = '00';
                if (hours1 >= 12) {
                    if (hours1 == 12) {
                        hours1 = hours1;
                        minutes1 = minutes1 + " PM";
                    } else {
                        hours1 = hours1 - 12;
                        minutes1 = minutes1 + " PM";
                    }
                } else {
                    hours1 = hours1;
                    minutes1 = minutes1 + " AM";
                }
                if (hours1 == 0) {
                    hours1 = 12;
                    minutes1 = minutes1;
                }



                $('.slider-time7').html(hours1 + ':' + minutes1);

                var hours2 = Math.floor(ui.values[1] / 60);
                var minutes2 = ui.values[1] - (hours2 * 60);

                if (hours2.length == 1) hours2 = '0' + hours2;
                if (minutes2.length == 1) minutes2 = '0' + minutes2;
                if (minutes2 == 0) minutes2 = '00';
                if (hours2 >= 12) {
                    if (hours2 == 12) {
                        hours2 = hours2;
                        minutes2 = minutes2 + " PM";
                    } else if (hours2 == 24) {
                        hours2 = 11;
                        minutes2 = "59 PM";
                    } else {
                        hours2 = hours2 - 12;
                        minutes2 = minutes2 + " PM";
                    }
                } else {
                    hours2 = hours2;
                    minutes2 = minutes2 + " AM";
                }

                $('.slider-time8').html(hours2 + ':' + minutes2);
            }
        });

        /*$("#price-slider-container").slider({
            range: true,
            min: 0,
            max: 24,
            values: [0, 24],
            slide: function (event, ui) {
                $("#priceSelectedStart").html(ui.values[0]);
                $("#priceSelectedEnd").html(ui.values[1]);
            }
        });
        $("#priceSelectedStart").html($("#price-slider-container").slider("values", 0));
        $("#priceSelectedEnd").html($("#price-slider-container").slider("values", 1));*/
    });
    $(".primary-passenger-header h5 span").click(function () {
        $(".flight-wrapper-description").slideToggle(1000);
        /*$(".primary-passenger-header h5 span font").text($(".primary-passenger-header h5 span font").text() == 'Mostrar detalles' ? 'Ocultar detalles' : 'Mostrar detalles');*/
        $(this).find("font").text($(this).find('font').text() == 'Hide Details' ? 'Show Details' : 'Hide Details');
        $(this).find("i").toggle()
    });
    $(".ff-chckbox-wrapper input[type='checkbox']").click(function () {
        if ($(this).prop("checked") == true) {
            $(".request-meal-wrapper").slideDown();
        }
        else if ($(this).prop("checked") == false) {
            $(".request-meal-wrapper").slideUp();
        }
    });
    $(".filter-category-name").click(function () {
        $(this).parents(".request-meal-txt").siblings(".request-meal-wrapper").slideToggle();
        $("i", this).toggleClass("fa-minus fa-plus");
    });
    $(".fil-fly-time-box-ul li label").click(function () {
        $(this).toggleClass("active")
    });
    //$(".ticket-summary-fare-adt font").click(function () {
    //    $(".ticket-summary-fare-det").slideToggle(1000);
    //    /*$(this).find("i").toggleClass("fa-angle-double-down fa-angle-double-up");*/
    //});
    $("#chktnc").click(function () {
        if ($(this).prop("checked") == true) {
            $("#psng-btn").removeClass("disabled");
        }
        else if ($(this).prop("checked") == false) {
            $("#psng-btn").addClass("disabled");
        }
    });   
    $("input[name='bag-rdbtn']").change(function () {
        $("#bag-prot-fee").slideToggle();
    });
    $("input[name='canc-rdbtn']").change(function () {
        $("#can-prot-fee").slideToggle();
    });    
    $(function () {
        $("input[name='seat-rdbtn']").click(function () {
            $('.seat-ass-fee').hide();
            $("#seat-ass-fee-" + $(this).val()).slideToggle();
        });
    });    
    $('.psng-payment-wr select').on('change', function () {        
        $(this).parent().parent(".col-lg-3").siblings('.col-lg-7').find('.psng-pay-cards').removeClass().addClass("psng-pay-cards " + $(this).val());
    });
    
});


