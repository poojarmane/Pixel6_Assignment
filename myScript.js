function validation()
{
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value; 
    var phone = document.getElementById("phone").value;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name=='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
        }
        else if(email=='')
		{
			alert('Please enter your user email id');
        }
        else if (!filter.test(email))
		{
			alert('Invalid email');
        }
        else if(address.length<10)
        {
                alert('Address length should me less than 10');

        }
        else if(phone.length == 10)
            {
                alert('phone number is invalid');
            }
            else if(letters.test(phone))
            {
                alert('phone is invalid');
            }
        else{
            alert('Thank You for Submitting information');
        
        }

}

        
        
function Delete(rm){
    var Tab = document.getElementById('delete');
        Tab.deleteRow(rm.parentNode.parentNode.rowIndex);     
}  
function display()
{
document.getElementById("uname").innerHTML = document.getElementById("name").value; 
document.getElementById("name").value = "";

}
    

$(document).ready(function() {  
    $("#Add").on("click", function() {  
        $("#textboxDiv").append("<div><br><input type='text'/><br></div>");  
    });  
    $("#delete").on("click", function() {  
        $("#textboxDiv").children().last().remove();  
    });  
});  