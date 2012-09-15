$(document).ready(function() {
  $("div").click(function() {
	$(this).hide();
  });
});


$(document).ready(function() {
  	var pars = $("div");
      for( i=0; i<pars.length; i++ ){
         alert("Found paragraph: " + pars[i].innerHTML);
      }
   });




$(document).ready(function() {
  	var stack = $(".stack1");
  	for( i=0; i<stack.length; i++ ){
         alert("Found stack" + stack[i].innerHTML);
      }
     
   });