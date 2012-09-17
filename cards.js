//Cards.js//

cards = [
    ["h", 2], ["h", 3], ["h", 4], ["h", 5], ["h", 6],
    ["c", 2], ["c", 3], ["c", 4], ["c", 5], ["c", 6],
    ["s", 2], ["s", 3], ["s", 4], ["s", 5], ["s", 6],
    ["d", 2], ["d", 3], ["d", 4], ["d", 5], ["d", 6]
]

discardPile = []


$(document).ready(function() {
  for (i = 0; i < 5; i++) {
    var randomnum = Math.floor(Math.random()*cards.length)
    var card = cards.splice(randomnum, 1) [0]
    setCard(card, i)
    $("#discard-pile").hide();
  }

  function setCard(card, i) {
    $("#card"+(i+1)).show();
    $("#card"+(i+1)).removeClass("empty")
    $("#card"+(i+1)).addClass("shadow")
    $("#card"+(i+1)).addClass("rounded")
    $("#card"+(i+1)).addClass(getColor(card))
    $("#card"+(i+1)).find(".number").html(card[1])
    $("#card"+(i+1)).find(".number2").html(card[1])
    $("#card"+(i+1)).find(".suit").html(getSuit(card))
    $("#card"+(i+1)).find(".suit2").html(getSuit(card))

    cardNum = card[1]
    
    if (cardNum == 2) {
      $("#card"+(i+1)).find(".spotB2").html(getSuit(card))
      $("#card"+(i+1)).find(".spotB4").html(getSuit(card))
    }

    if (cardNum == 3) {
      $("#card"+(i+1)).find(".spotB1").html(getSuit(card))
      $("#card"+(i+1)).find(".spotB3").html(getSuit(card))
      $("#card"+(i+1)).find(".spotB5").html(getSuit(card))
    }

    if (cardNum == 4) {
      $("#card"+(i+1)).find(".spotA1").html(getSuit(card))
      $("#card"+(i+1)).find(".spotA5").html(getSuit(card))
      $("#card"+(i+1)).find(".spotC1").html(getSuit(card))
      $("#card"+(i+1)).find(".spotC5").html(getSuit(card))
    }

    if (cardNum == 5) {
      $("#card"+(i+1)).find(".spotA1").html(getSuit(card))
      $("#card"+(i+1)).find(".spotA5").html(getSuit(card))
      $("#card"+(i+1)).find(".spotB3").html(getSuit(card))
      $("#card"+(i+1)).find(".spotC1").html(getSuit(card))
      $("#card"+(i+1)).find(".spotC5").html(getSuit(card))
      
    }

    if (cardNum == 6) {
      $("#card"+(i+1)).find(".spotA1").html(getSuit(card))
      $("#card"+(i+1)).find(".spotA3").html(getSuit(card))
      $("#card"+(i+1)).find(".spotA5").html(getSuit(card))
      $("#card"+(i+1)).find(".spotC1").html(getSuit(card))
      $("#card"+(i+1)).find(".spotC3").html(getSuit(card))
      $("#card"+(i+1)).find(".spotC5").html(getSuit(card))
      
    }
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
    $(this).removeClass("red");
    $(this).removeClass("shadow");
    $(this).removeClass("rounded");
    $(this).addClass("empty");
    $(this).find(".number").empty();
    $(this).find(".number2").empty();
    $(this).find(".suit").empty();
    $(this).find(".suit2").empty();
    $(this).find(".ace").empty();
    $(this).find(".spotA1").empty();
    $(this).find(".spotA2").empty();
    $(this).find(".spotA3").empty();
    $(this).find(".spotA4").empty();
    $(this).find(".spotA5").empty();
    $(this).find(".spotB1").empty();
    $(this).find(".spotB2").empty();
    $(this).find(".spotB3").empty();
    $(this).find(".spotB4").empty();
    $(this).find(".spotB5").empty();
    $(this).find(".spotC1").empty();
    $(this).find(".spotC2").empty();
    $(this).find(".spotC3").empty();
    $(this).find(".spotC4").empty();
    $(this).find(".spotC5").empty();
    $(this).hide();
    $("#discard-pile").show();



  });

  $("#dealing-pile").mouseover(function() {
    // console.log("mouseover")
  });


  $("#dealing-pile").click(function() {
    
    var j = -1;

    if (cards.length > 0) {
      

      for (i = 0; i < 5; i++) {
        if ($("#card"+(i+1)).hasClass("card empty")){
          j = i;
          break;
        }
        
      }

      if (j == -1){

        j = Math.floor(Math.random()*5);
        $("#discard-pile").show();
      }

      $("#card"+(j+1)).removeClass("black");
      $("#card"+(j+1)).removeClass("red");
      $("#card"+(j+1)).addClass("empty")
      $("#card"+(j+1)).removeClass("shadow");
      $("#card"+(j+1)).removeClass("rounded");
      $("#card"+(j+1)).find(".number").empty();
      $("#card"+(j+1)).find(".number2").empty();
      $("#card"+(j+1)).find(".suit").empty();
      $("#card"+(j+1)).find(".suit2").empty();
      $("#card"+(j+1)).find(".ace").empty();
      $("#card"+(j+1)).find(".spotA1").empty();
      $("#card"+(j+1)).find(".spotA2").empty();
      $("#card"+(j+1)).find(".spotA3").empty();
      $("#card"+(j+1)).find(".spotA4").empty();
      $("#card"+(j+1)).find(".spotA5").empty();
      $("#card"+(j+1)).find(".spotB1").empty();
      $("#card"+(j+1)).find(".spotB2").empty();
      $("#card"+(j+1)).find(".spotB3").empty();
      $("#card"+(j+1)).find(".spotB4").empty();
      $("#card"+(j+1)).find(".spotB5").empty();
      $("#card"+(j+1)).find(".spotC1").empty();
      $("#card"+(j+1)).find(".spotC2").empty();
      $("#card"+(j+1)).find(".spotC3").empty();
      $("#card"+(j+1)).find(".spotC4").empty();
      $("#card"+(j+1)).find(".spotC5").empty();

      var randomnum = Math.floor(Math.random()*cards.length);
      var topCard = cards.splice(randomnum, 1) [0];
      setCard(topCard, j);


    }
    else {
      $(this).removeClass("shadow");
      $(this).removeClass("rounded");
      $(this).addClass("empty");
      $(this).hide();

    }
    


  });

  function getSuit(card) {
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