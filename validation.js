
$(document).ready(function(){

     
       /* start customer register form  validation events */
       // full name event in register form...
       $("#register-fullname").focus(function(){
        $("#registerfullnameerror").hide();
       });

       $("#register-fullname").blur(function(){
          let fullname_regex1=/^([\w]{1,})+\s+([\w\s]{1,})+$/i;
          let fullname_regex2=/^[a-zA-Z ]{3}/;
          if(fullname_regex1.test($("#register-fullname").val()) || fullname_regex2.test($("#register-fullname").val()))
          {
            $("#registerfullnameerror").hide();
            register_fullname_error=false;
          }
          else{
            $("#registerfullnameerror").show();
            register_fullname_error=true;
          }
       });

       //email event in register form...

      $("#register-email").focus(function()
      {
        $("#registeremailerror").hide();
      })
       $("#register-email").blur(function() { 
        let regex =  
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
        let dotcom=/.com$/; 
        if (regex.test($("#register-email").val()) && dotcom.test($("#register-email").val())) { 
            $("#registeremailerror").hide();
            register_email_error=false;
            
        } else { 
            $("#registeremailerror").show();
            register_email_error=true;
           
        }
      }); 

      //password event in register form...
      $("#register-password").focus(function(){
        $("#registerpassworderror").hide();
       });
       $("#register-password").blur(function(){
        let pass_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(pass_regex.test($("#register-password").val()))
        {
         $("#registerpassworderror").hide();
         register_password_error=false;
         
        }
        else{
         $("#registerpassworderror").show();
         register_password_error=true;
        }
      });
      
      //confirmpassword event  in register form...

      $("#register-confirmpassword").focus(function(){
        $("#registerconfirmpassworderror").hide();
       });
      $("#register-confirmpassword").blur(function(){
        let pass_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(pass_regex.test($("#register-confirmpassword").val()) && $("#register-confirmpassword").val()==$("#register-password").val())
        {
         $("#registerconfirmpassworderror").hide();
         register_confirmpassword_error=false;
         
        }
        else{
         $("#registerconfirmpassworderror").show();
         register_confirmpassword_error=ture;
        }
      });
      
        /* end customer register form  validation events */
        
       
        $(".eye-icon-password").click(function() {

          $(this).toggleClass("fa-eye fa-eye-slash");
          var passwordInput = $("#register-password");
          if (passwordInput.attr("type") == "password") {
            passwordInput.attr("type", "text");
          } else {
            passwordInput.attr("type", "password");
          }
        });
        $(".eye-icon-confirmpassword").click(function() {

          $(this).toggleClass("fa-eye fa-eye-slash");
          var passwordInput = $("#register-confirmpassword");
          if (passwordInput.attr("type") == "password") {
            passwordInput.attr("type", "text");
          } else {
            passwordInput.attr("type", "password");
          }
        });
        
       
      });
       
    
 