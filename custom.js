// $(document).ready(function() {
// $("div").click(function() {
// $(this).hide();
// });
// });


// $(document).ready(function() {
// var pars = $("div");
// for( i=0; i<pars.length; i++ ){
// alert("Found paragraph: " + pars[i].innerHTML);
// }
// });




// $(document).ready(function() {
// var stack = $(".stack1");
// for( i=0; i<stack.length; i++ ){
// alert("Found stack" + stack[i].innerHTML);
// }
     
// });


cards = [
    ["h", 2], ["h", 3], ["h", 4], ["h", 5], ["h", 6],
    ["c", 2], ["c", 3], ["c", 4], ["c", 5], ["c", 6],
    ["s", 2], ["s", 3], ["s", 4], ["s", 5], ["s", 6],
    ["d", 2], ["d", 3], ["d", 4], ["d", 5], ["d", 6]
]
$(document).ready(function() {
  for (i = 0; i < 5; i++) {
    var randomnum = Math.floor(Math.random()*cards.length)
    var card = cards.splice(randomnum, 1) [0]
    setCard(card, i)
  }
  console.log(cards.length)

  function setCard(card, i) {
    $("#card"+(i+1)).removeClass("empty")
    $("#card"+(i+1)).addClass(getColor(card))
    $("#card"+(i+1)).find(".number").html(card[1])
    $("#card"+(i+1)).find(".number2").html(card[1])
    $("#card"+(i+1)).find(".suite").html(getSuite(card))
    $("#card"+(i+1)).find(".suite2").html(getSuite(card))
    $("#card"+(i+1)).find(".ace").html(getSuite(card))
  }

  function getColor(card) {
    var val = card[0]
    if (val == "h" || val == "d") {
      return "red"
    }
    else
      return "black"
  }

  $(".card").click(function() {
    $(this).removeClass("black");
    $(this).removeClass("red");
    $(this).addClass("empty")
    $(this).find(".number").empty()
    $(this).find(".number2").empty()
    $(this).find(".suite").empty()
    $(this).find(".suite2").empty()
    $(this).find(".ace").empty()
    $(this).fadeOut();
    // alert(newCard.toString());

  });

  function getSuite(card) {
    var val = card[0]
    if (val == "h")
      return "&hearts;"
    else if (val == "s")
      return "&spades;"
    else if (val == "c")
      return "&clubs;"
    else
      return "&diams;"

  }

})