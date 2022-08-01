$(function(){

    $("form[name = 'reg']").validate({
        rules: {
            name : "required",
        
            email:{
                required : true,
                email : true
            },
            password : {
                required : true,
                minlength : 5
            },
            cpassword : {
                required : true,
                minlength : 5,
                equalTo : "#password"

            }

        },

        messages : {

            fname : "please enter your first name",

            email: {
                required : "please enter your email",
                email : "please enter a valid email"

            },
            password :{
                required : "please provide a password",
                minlength : "your password must be consist of at least 5 characters"
                
            },

            cpassword :{
                required : "please re-enter a password",
                minlength : "your password must be consist of at least 5 characters",
                equalTo : "please enter the same pawweord as above"
                
            }
            
        }

    });
});
    
   