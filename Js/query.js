
   // what we do section
    $("#desn1").click( () => {
        $("#design").toggle();
    })
    $("#dev").click( () => {
        $("#development").toggle();
    })
    $("#prod").click( () => {
        $("#product").toggle();
    });

    $("#dev").click(function(){
        $("#development-image").slideDown('1500').hide('1000');
        $("#development").show('1500');
      });
    $("#development").click(function(){
        $("#development").slideUp('1500');
        $("#development-image").slideDown('1500');
      });

      $("#desn1").click(function(){
        $("#desn1").slideDown('1500').hide('1000');
        $("#desn1").show('1500');
      });
    $("#design").click(function(){
        $("#design").slideUp('1500');
        $("#design-image").slideDown('1500');
      });
  
    $("#BlvckEXp").mouseover(function(){
        $("#overlay").show();
      }).mouseout(function(){
        $("#overlay").hide();
      });
   
    $("#Ontario").mouseover(function(){
        $("#overlay2").show();
      }).mouseout(function(){
        $("#overlay2").hide();
      });

      $("#triangles").mouseover(function(){
        $("#overlay3").show();
      }).mouseout(function(){
        $("#overlay3").hide();
      });

    $("#jimCarrey").mouseover(function(){
        $("#overlay4").show();
      }).mouseout(function(){
        $("#overlay4").hide();
      });

      $("#good").mouseover(function(){
        $("#overlay5").show();
      }).mouseout(function(){
        $("#overlay5").hide();
      });

      $("#cal").mouseover(function(){
        $("#overlay6").show();
      }).mouseout(function(){
        $("#overlay6").hide();
      });

      $("#Burned-C").mouseover(function(){
        $("#overlay7").show();
      }).mouseout(function(){
        $("#overlay7").hide();
      });

      $("#silver").mouseover(function(){
        $("#overlay8").show();
      }).mouseout(function(){
        $("#overlay8").hide();
      });

      $(document).ready(function(){
        $("#form").submit(function(){
          var name = $("input#name").val();
          var email = $("input#email").val();
          var message = $("textarea#delani").val();
          if ($("input#name").val() && $("input#email").val()){
            // alert (name + ",  your message received. Thank you for reaching out to us.");
          }
          else {
            alert("Please enter your name and email!");
          }
          
        });
      
      });