
function feedback()
{   
	
	$("#rightButt").hide();
	
	$("#FeedbackForm").modal({
	show: 'true',
	backdrop: 'static',
	keyboard:true
	});  
}

function feedback_show()
{   
	
	$("#rightButt").show();  
}


$(document).ready(function(){
	  
	
 
	
	
	
	$.validator.addMethod("nm_1", function(value, element, regexpr) {          
		return regexpr.test(value);
	}, "Please enter alphanumaric only.");
	
		$("#feedback_form").validate({
		
		errorElement:'div',
		rules:{ 
			fullname:{
				required:true
				//nm_1: /^[0-9 ]*$/		
			},
			email:{
				required:true, 
				email:true
			},
			message:{
				required:true 
				 
			} 			
		},
		messages:{				
		
			fullname:{
				required:"Enter Full Name" 
				//nm_1: /^[0-9 ]*$/		
			},
			email:{
				required:"Email Required",  
				email:"Enter Valid Email"
			},
			message:{
				required:"Message Required"
				//nm_1: /^[0-9 ]*$/		
			}  
		}
	});  
	
	
});
