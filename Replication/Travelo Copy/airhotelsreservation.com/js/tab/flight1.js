var sorce_set =0;
var dest_set =0;
var source_first_name = '';
var source_first_val = '';

var dest_first_name = '';
var dest_first_val = '';
var id_match =  '';
 

var source_id;

function clear_msg()
{
    $("#flight_frm").validate().resetForm();
}

$(document).ready(function(){
    
      
   
    $("#search-box-flight").focus(function(){   
        $(this).val(''); //hide text
    });   
   
   
    $("#search-box1-flight").focus(function(){   
        $(this).val(''); //hide text
    });   
   
          
    /*$("#flight_submit").click(function() 
	{
	    
	});*/
	
	
	
/*
    // Set default datepicker options    
        $.datepicker.setDefaults({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd-mm-yy',
//        defaultDate: +2,
       
        minDate: 0,
        maxDate: '+2y',
        numberOfMonths: 2,
        showAnim: 'fadeIn',
        showButtonPanel: false,
        autoOpen: false
        });     
       
*/       
    
    $("#flight_main_to").css("background-color", "#d6d7d8");  
    $("#flight_main_to").click(function()
    {
        $("#flight_main_to").css("background-color", "#fff");
        $("#multicity").removeClass('oneWayAct'); 
        $("#oneWayAct").removeClass('oneWayAct'); 
        $("#oneWayAct").addClass('tripbtn'); 
        $("#roundTrip").removeClass('tripbtn'); 
        $("#roundTrip").addClass('oneWayAct');
        $("#FlightJourneyType").val(2); 
        $("#flight_main_to").prop('required',true); 
    });
   
   
    $("#multicity").click(function(){
        $("#flight_main_to").css("background-color", "#fff");
         
        $("#multicity").addClass('oneWayAct'); 
        $("#oneWayAct").removeClass('oneWayAct'); 
        $("#roundTrip").removeClass('oneWayAct');  
    });   
   
    $("#oneWayAct").click(function()
    {
        $("#flight_main_to").attr("placeholder", 'Date of Return'); 
        $("#flight_main_to").css("background-color", "#d6d7d8");
        //$("#multicity").removeClass('oneWayAct'); 
        $("#oneWayAct").removeClass('tripbtn');
        $("#oneWayAct").addClass('oneWayAct'); 
        $("#roundTrip").removeClass('oneWayAct');
        $("#roundTrip").addClass('tripbtn');   
        $("#FlightJourneyType").val(1);
        $("#flight_main_to").prop('required',false); 
        clear_msg();
    });

       
    $("#roundTrip").click(function(){
       
        $("#flight_main_to").css("background-color", "#fff");
        $("#multicity").removeClass('oneWayAct'); 
        $("#oneWayAct").removeClass('oneWayAct'); 
        $("#oneWayAct").addClass('tripbtn'); 
        $("#roundTrip").removeClass('tripbtn'); 
        $("#roundTrip").addClass('oneWayAct'); 
        $("#FlightJourneyType").val(2); 
        $("#flight_main_to").prop('required',true); 
        clear_msg();
    });

    $("#traveler_details").click(function(){   
        $("#flightSearch").show();
    });   
       
     
   
    $(".flight_bookings_js").click(function(){  
        $.ajax({   
            type: "POST",
            url: URL+"/flight_ajax/ticket_check.php",
            data: {ticket_check:1},   
            beforeSend: function(){
                //$("#search-box-flight").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
            },
            success: function(val){
           
                if(val==0)
                {
                    /*$("#flight-ticket-popup").modal({
                    show: 'true',
                    backdrop: 'static',
                    keyboard:true
                    });*/
                    alert("Login To View & Manage Air Tickets");   
                   
                }
                else if(val==1)
                {
                    location.href=URL+"/flight/failure-tickets.php";
                }
                else if(val==2)
                {
                    location.href=URL+"/flight/manage-tickets.php";
                }
                /*else
                {
                    location.href=URL+"/flight/manage-tickets.php";
                }   */
            }
        });     
    });  
   
   
    $("#flight_frm").validate({
       
        errorElement:'div',
        rules:{
            flight_from:{
                required:true                 
            },
            flight_to:{
                required:true                 
            },
            flight_main:{
                required:true                 
            }   
        },
        messages:{   

            flight_from:{
                required:"Enter source"                 
            },
            flight_to:{
                required:"Enter destination"             
            },
            flight_main:{
                required:"Enter date of journey"                 
            }    
             
        }
    });
   
    $( "#flight_frm" ).submit(function( event )
    {
        if ($('#flight_frm').valid())
        {
            msg = "Searching flights..";
            flight_waiting_popup(msg);
            form.submit();
        } 
        
        if($("#flight_main_to")!='')
        {
            $("#oneWayAct").removeClass('oneWayAct'); 
            $("#oneWayAct").addClass('tripbtn'); 
            $("#roundTrip").removeClass('tripbtn'); 
            $("#roundTrip").addClass('oneWayAct');
        }
        else
        {
            $("#oneWayAct").removeClass('tripbtn'); 
            $("#oneWayAct").addClass('oneWayAct'); 
            $("#roundTrip").removeClass('oneWayAct'); 
            $("#roundTrip").addClass('tripbtn');
        }
    });     
   
   
    $("#flight-seats-cancel-form").validate({
       
        errorElement:'div',
        rules:{
       
            flightPNR:{
                required:true                 
            }  
        },
        messages:{   
           
            flightPNR:{
                required:"Enter PNR"                 
            }    
             
        }
    });  
   
   
   
    $("#search-box-flight").keydown(function (e)
    {
         
        if (e.which == 9)
        {
            if(sorce_set==0)
            {
                $("#search-box-flight").val(source_first_name);
                $("#flight_source_id").val(source_first_val);           
                source_id = source_first_val;  
            }    
            $("#suggesstion-box-flight").hide();
        }   
       
    });
   
   
    $("#search-box1-flight").keydown(function (e)
    {
        if (e.which == 9)
        {
            if(dest_set==0)
            { 
                $("#search-box1-flight").val(dest_first_name);
                $("#flight_dest_id").val(dest_first_val);  
            }
            $("#suggesstion-box1-flight").hide();
        }     
    });


   
    $("body").click(function(e)
    { 
        //$("#oneWayAct").addClass('oneWayAct'); 
        clear_msg();
        
        if ( e.target.id == "traveler_details" || $(e.target).parents("#flightSearch").size())
        {
        }
        else
        {
            $("#flightSearch").hide();
        }
       
        if ( e.target.id == "search-box-flight" || $(e.target).parents("#suggesstion-box-flight").size() )
        {
             //alert("Inside div");
             
           
        } else
        { 
         
          /*
            $("#search-box-flight").val(new_name);
            $("#suggesstion-box-flight").hide(); 
            $("#flight_source_id").val(val);   
            $("#flight_source_airport").val(icon);         
            source_id = val;
            sorce_set=1; 
          */
          
          if((sorce_set==0) && (source_first_name==''))
            {       
                /*
                $("#search-box-flight").val("Delhi (DEL)");
                $("#flight_source_id").val("DEL");           
                source_id = 'DEL';    
                */
            }    
            $("#suggesstion-box-flight").hide();
        }
       
        if ( e.target.id == "search-box1-flight" || $(e.target).parents("#suggesstion-box1-flight").size() )
        {
            //alert("Inside div");
        } else
        {
           if( (dest_set==0) &&(dest_first_name=='') )
            {   
               /* if(id_match=='')
                {
                    $("#search-box1-flight").val(dest_first_name);
                    $("#flight_dest_id").val(dest_first_val);   
                   
                    $("#search-box1-flight").val("Mumbai (BOM)");
                    $("#flight_dest_id").val("BOM");  
                    dest_id="BOM";   
                }
               */    
            }
            $("#suggesstion-box1-flight").hide();
        }
       
    }); 
     
   
    $("#search-box-flight").click(function(){  
        $("#suggesstion-box1-flight").hide();
        $("#search-box1-flight").val('');
    }); 
   
 
    /*
    $("#search-box-flight").keyup(function(){ 
   
         
        sorce_set=0;
        $.ajax({   
        type: "POST",
        url: URL+"/flight_ajax/source.php",
        data:'keyword='+$(this).val(),
        beforeSend: function(){
            //$("#search-box-flight").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
        },
        success: function(data){
           
            var obj = jQuery.parseJSON(data);             
           
            source_first_name = obj[0].source_name;
            source_first_val = obj[0].source_id;
            source_first_name +=' ('+source_first_val+'), '+obj[0].country_code;
            source_list = '<ul class="busList" id="country-list">';
           
            for(i=0;i<obj.length;i++)           
                source_list +='<li onClick=selectFlightSource("'+encodeURIComponent(obj[i].source_name)+'","'+obj[i].source_id+'")>'+obj[i].source_name+' ('+obj[i].source_id+')['+obj[i].airport_code+'], '+obj[i].country_code+'<div class=mapIcon><i class="fa fa-plane searchIcon" aria-hidden="true"></i></div></li>';
           
            source_list +='</ul>';  
            $("#suggesstion-box-flight").show();
            $("#suggesstion-box-flight").html(source_list);
            $("#search-box-flight").css("background","#FFF");
        }
        });
    });
   
   
    $("#search-box1-flight").keyup(function(){ 
        dest_set=0;
        $.ajax({
        type: "POST",
        url: URL+"/flight_ajax/destination.php",
        data: {keyword:$(this).val()},     
        beforeSend: function(){
            $("#search-box-flight").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
        },
        success: function(data){
            var obj = jQuery.parseJSON(data);             
            if(obj!=null)
            {  
                dest_first_name = obj[0].source_name;
                dest_first_val = obj[0].source_id;
                dest_first_name +=' ('+dest_first_val+'), '+obj[0].country_code;
                dest_list = '<ul class="busList" id="country-list">';   
           
                for(i=0;i<obj.length;i++)           
                dest_list +='<li onClick=selectFlightDest("'+encodeURIComponent(obj[i].source_name)+'","'+obj[i].source_id+'")>'+obj[i].source_name+' ('+obj[i].source_id+')['+obj[i].airport_code+'], '+obj[i].country_code+'<div class=mapIcon><i class="fa fa-plane searchIcon" aria-hidden="true"></i></div></li>';

                dest_list +='</ul>';   

                $("#suggesstion-box1-flight").show();
                $("#suggesstion-box1-flight").html(dest_list);
                $("#search-box-flight").css("background","#FFF");
            }else
            {
                $("#suggesstion-box1-flight").hide();
            }               
        }
        });
    });  */
   
});



function selectFlightSource(name,val,icon)
{   
    new_name =   name.replace(new RegExp("%20", "g"), ' ');   
    new_name =new_name+' ('+val+')';
    $("#search-box-flight").val(new_name);
    $("#suggesstion-box-flight").hide(); 
    $("#flight_source_id").val(val);   
    $("#flight_source_airport").val(icon);  
    
    source_id = val;
    sorce_set=1; 
}

function selectFlightDest(name,id,icon)
{ 
    if(source_id==id)
    {
        alert("Source and Destination could not be same!");
        $("#search-box1-flight").val(""); 
        id_match = 1;
    } else{   
     
    new_name =  name.replace(new RegExp("%20", "g"), ' ');  
    new_name =new_name+' ('+id+')';
    $("#search-box1-flight").val(new_name);
    $("#suggesstion-box1-flight").hide();    
    $("#flight_dest_id").val(id); 
    $("#flight_dest_airport").val(icon);         
    dest_set=1;
    }
      
} 
         

            $(function() {
                var nowTemp = new Date();
                var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
               
                var checkin = $('#flight_main').fdatepicker({
                onRender: function (date) {
                return date.valueOf() < now.valueOf() ? 'disabled' : '';
                }
                }).on('changeDate', function (ev)
                {
                if (ev.date.valueOf() > checkout.date.valueOf())
                {
                var newDate = new Date(ev.date)
                newDate.setDate(newDate.getDate() + 1);
                //checkout.update(newDate);
                }
                checkin.hide(); 
                $( "#flight_main" ).focus();
                }).data('datepicker');
               
                var checkout = $('#flight_main_to').fdatepicker({
                onRender: function (date) {
                return date.valueOf() < checkin.date.valueOf() ? 'disabled' : '';
                }
                }).on('changeDate', function (ev) {
                    clear_msg();
                checkout.hide();
                }).data('datepicker');

            });
           
           
           

var adl_flight;  
var child_flight;  
var infant_flight;

adl_flight = 1;
child_flight = 0;
infant_flight = 0;


function hide_passenger_window()
{
    $("#flightSearch").hide();
}

 

function final_passenger()
{
    if( (adl_flight+child_flight+infant_flight) > 8)
    {
        alert("Total number of passengers should not exceed 8");
        return false;
    }else
    {
         
        if($('input[name=flight_business_class]:checked').val()==1)
                str = "All";
        else if($('input[name=flight_business_class]:checked').val()==2)
                str = "Economy";
        else if($('input[name=flight_business_class]:checked').val()==4)
                str = "Bunisess";
        else
                str = "First";   
           
        $("#traveler_details").val( (adl_flight+child_flight+infant_flight) + ' Traveller(s) '+str);
        //$("#flightSearch").hide();
        return true;
    }
}  

function inc_members(val)
{
    
   
    if(val==1)
    {     
        CtCheck = paCheck(1); 
        if( adl_flight < CtCheck)
        { 
            if( adl_flight < 8)
            {
                adl_flight +=1;     
                if(final_passenger()==true)
                {
                    $("#flight_adl").html(adl_flight); 
                    $("#flight_adl_val").val(adl_flight);  
                }
            }
        }/*else
        {
            alert("Sorry max "+CtCheck+" adults allow");
        }*/
    }
   
    if(val==2)
    {
        CtCheck = paCheck(2); 
        if( child_flight < CtCheck)
        {
            if( child_flight < 8)
            {
                child_flight +=1;     
                if(final_passenger()==true)
                {
                    $("#flight_chld").html(child_flight); 
                    $("#flight_chld_val").val(child_flight);             
                }
            }
        }/*else
        {
            alert("Sorry max "+CtCheck+" child allow");
        }*/
    }
   
    if(val==3)
    {
        CtCheck = paCheck(3); 
        if( infant_flight < CtCheck)
        {
            if( infant_flight < 8)
            {
                infant_flight +=1;   
                if(final_passenger()==true)
                {
                    $("#flight_infant").html(infant_flight);  
                    $("#flight_infant_val").val(infant_flight); 
                }
            }
        }/*else
        {
            alert("Sorry max "+CtCheck+" infant allow");
        }*/
    } 
}


function dec_members(val)
{
    if(val==1)
    {
        if(adl_flight > 1)
        {
            adl_flight -=1;   
            if(final_passenger()==true)
            {
                $("#flight_adl").html(adl_flight);  
                $("#flight_adl_val").val(adl_flight);
            }
        }
    }
   
    if(val==2)
    {
        if(child_flight > 0)
        {    
            child_flight -=1;     
            if(final_passenger()==true)
            {
                $("#flight_chld").html(child_flight);  
                $("#flight_chld_val").val(child_flight);
            }
        }   
    }
   
    if(val==3)
    {
        if(infant_flight > 0)
        {
            infant_flight -=1;   
            if(final_passenger()==true)
            {
                $("#flight_infant").html(infant_flight);  
                $("#flight_infant_val").val(infant_flight); 
            }
        }   
    }   
   
}    


