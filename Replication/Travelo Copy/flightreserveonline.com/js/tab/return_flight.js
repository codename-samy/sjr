var return_flt_zero=0;
var return_flt_one=0;
var return_flt_two=0;


var return_flt_moring=0;
var return_flt_after=0;
var return_flt_even=0;
var return_flt_night=0;   
function return_flight_stops(stops)
{ 
	if(stops==0)
	{
		if(return_flt_zero==0)
		{	
			 
			$("#return_flt_zero").addClass("filterSectRed");
			return_flt_zero=1; 
			remove_val=1;
		}else
		{
			$("#return_flt_zero").removeClass("filterSectRed");
			return_flt_zero=0; 
			remove_val=0;
		}
	}   
	 
	
	if(stops==1)
	{
		if(return_flt_one==0)
		{	
			 
			$("#return_flt_one").addClass("filterSectRed");
			return_flt_one=1; 
			remove_val=1;
		}else
		{
			$("#return_flt_one").removeClass("filterSectRed");
			return_flt_one=0; 
			remove_val=0;
		}
	} 
	
	
	
	if(stops==2)
	{
		if(return_flt_two==0)
		{	
			 
			$("#return_flt_two").addClass("filterSectRed");
			return_flt_two=1; 
			remove_val=1;
		}else
		{
			$("#return_flt_two").removeClass("filterSectRed");
			return_flt_two=0; 
			remove_val=0;
		}
	} 
	     
	
	
	$("#flight_waiting_popup").modal({
    show: 'true',
    backdrop: 'static',
    keyboard:true
    }); 
    
    
	$.ajax({
		type: "POST",
		url: '../ajax/default.php', 
		data: {flight_search_ajax_return:1,id:'stops',val:stops,remove:remove_val,rand_no:$("#flight_rand_no").val()},	  
		beforeSend: function(){
			//$("#search-box").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
		},
		success: function(data){  
		
            $("#flight_waiting_popup").modal('hide'); 
            
            url = 	"basic-search-return.php?ajax_call=1&rand_no="+rand_no; 
            $("#MyIframeDivs").load(url);  
		}
	});   
	
	
}




function return_flight_timing(timing)
{
    //alert(121212);
	if(timing==0)
	{
		if(return_flt_moring==0)
		{	 
			$("#return_flt_timing0").addClass("filterSectRed");
			return_flt_moring=1; 
			remove_val=1;
		}else
		{
			$("#return_flt_timing0").removeClass("filterSectRed");
			return_flt_moring=0; 
			remove_val=0;
		}
	} 

	if(timing==1)
	{
		if(return_flt_after==0)
		{	 
			$("#return_flt_timing1").addClass("filterSectRed");
			return_flt_after=1; 
			remove_val=1;
		}else
		{
			$("#return_flt_timing1").removeClass("filterSectRed");
			return_flt_after=0; 
			remove_val=0;
		}
	} 

	if(timing==2)
	{
		if(return_flt_even==0)
		{	 
			$("#return_flt_timing2").addClass("filterSectRed");
			return_flt_even=1; 
			remove_val=1;
		}else
		{
			$("#return_flt_timing2").removeClass("filterSectRed");
			return_flt_even=0; 
			remove_val=0;
		}
	} 

	if(timing==3)
	{
		if(return_flt_night==0)
		{	 
			$("#return_flt_timing3").addClass("filterSectRed");
			return_flt_night=1; 
			remove_val=1;
		}else
		{
			$("#return_flt_timing3").removeClass("filterSectRed");
			return_flt_night=0; 
			remove_val=0;
		}
	} 	
	
	
	
	$("#flight_waiting_popup").modal({
    show: 'true',
    backdrop: 'static',
    keyboard:true
    }); 
    
    
    
	$.ajax({
		type: "POST",
		url: '../ajax/default.php', 
		data: {flight_search_ajax_return:1,id:'timings',val:timing,remove:remove_val,rand_no:$("#flight_rand_no").val()},	  
		beforeSend: function(){
			//$("#search-box").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
		},
		success: function(data){  
		
            $("#flight_waiting_popup").modal('hide'); 
            url = 	"basic-search-return.php?ajax_call=1&rand_no="+rand_no; 
            $("#MyIframeDivs").load(url);
		}
	});   	
}   


function return_arrive_flight_timing(timing)
{
    //alert(121212);
	if(timing==0)
	{
		if(return_flt_moring==0)
		{	 
			$("#return_arrive_flt_timing0").addClass("filterSectRed");
			return_flt_moring=1; 
			remove_val=1;
		}else
		{
			$("#return_arrive_flt_timing0").removeClass("filterSectRed");
			return_flt_moring=0; 
			remove_val=0;
		}
	} 

	if(timing==1)
	{
		if(return_flt_after==0)
		{	 
			$("#return_arrive_flt_timing1").addClass("filterSectRed");
			return_flt_after=1; 
			remove_val=1;
		}else
		{
			$("#return_arrive_flt_timing1").removeClass("filterSectRed");
			return_flt_after=0; 
			remove_val=0;
		}
	} 

	if(timing==2)
	{
		if(return_flt_even==0)
		{	 
			$("#return_arrive_flt_timing2").addClass("filterSectRed");
			return_flt_even=1; 
			remove_val=1;
		}else
		{
			$("#return_arrive_flt_timing2").removeClass("filterSectRed");
			return_flt_even=0; 
			remove_val=0;
		}
	} 

	if(timing==3)
	{
		if(return_flt_night==0)
		{	 
			$("#return_arrive_flt_timing3").addClass("filterSectRed");
			return_flt_night=1; 
			remove_val=1;
		}else
		{
			$("#return_arrive_flt_timing3").removeClass("filterSectRed");
			return_flt_night=0; 
			remove_val=0;
		}
	} 	
	
	 $("#flight_waiting_popup").modal({
    show: 'true',
    backdrop: 'static',
    keyboard:true
    }); 
        
	$.ajax({
		type: "POST",
		url: '../ajax/default.php', 
		data: {arrive_flight_search_ajax_return:1,id:'timings',val:timing,remove:remove_val,rand_no:$("#flight_rand_no").val()},	  
		beforeSend: function(){
			//$("#search-box").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
		},
		success: function(data){  
		
			$("#flight_waiting_popup").modal('hide'); 
			url = 	"basic-search-return.php?ajax_call=1&rand_no="+rand_no; 
		    $("#MyIframeDivs").load(url);
		}
	});   	
} 
