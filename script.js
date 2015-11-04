$(document).ready(function (){
// game state variables
var tileCount = 12
var wins = 0;
var missed = 0;

//functions
var shufflePics = function () {
  var m = newPics.length, t, i;
  while (m) {
    i = Math.floor(Math.random () * m --);
    newPics.push(newPics.splice(i, 1)[0]);
  };
};

var showImages = function (clickedBox, picId) {
  console.log(clickedBox, picId);
    if ($(clickedBox).hasClass('showPic')) {
      $(clickedBox).addClass("pic" + picId);
    }
}

var cardMatch = function(flipped1, flipped2) {
  var color1 = $(flipped1).css("background");
  var color2 = $(flipped2).css("background");
  if (color1 === color2) {
    wins+=2;
    alert("You made a match!");
    $(flipped1).attr("class", "box matched");
    $(flipped2).attr("class", "box matched");
  }
  else {
    alert("Try again!");
    missed++;
    $(flipped1).addClass('noPic');
    $(flipped1).removeClass('showPic');
    $(flipped2).addClass('noPic');
    $(flipped2).removeClass('showPic');
    // swal("Try again!")
  };
  keepScore();
};

var keepScore = function() {
  $("#wins").text('Matches: ' + wins);
  $("#missed").text('Missed: ' + missed);
  if (wins == 12) {
    swal("Good job!", "You won!", "success");
  }
}

var checkClass = function(box) {
  var showPicBoxes = [];
  var id = $(box).data("id")
  $("[data-id='"+id+"']").each(function(i,e){
    var boxClass = $(e).hasClass('showPic');
    if (boxClass) {
      showPicBoxes.push(e);
    }
  })
//*problem here with .length
if (showPicBoxes.length == 2) {
  return(showPicBoxes);
}
else {
  return false;
}
};

// $(this).off('click');

// event handlers
var handleBoxClick = function(evt) {
  var clickedBox = this;
  if ($(clickedBox).hasClass('matched')) {
    return true;
  }
  else {
    var boxId = $(clickedBox).attr('id');
    var picIndex = $(clickedBox).data("id")
    $(clickedBox).addClass('showPic');
    $(clickedBox).removeClass('noPic')
    showImages(clickedBox, picIndex);
    var flippedCards = checkClass(clickedBox);
    if (flippedCards) {
      cardMatch(flippedCards[0], flippedCards[1]);
    };
  }
};

var handleDealButton = function(evt) {
  shufflePics();
  $('.box').attr('class', 'box noPic');
  wins = 0;
  missed = 0;
  keepScore();
}
// build html
for( var i = 1; i <= tileCount / 2; i++){
  var box = $("<div class='box noPic' data-id='"+i+"'></div>")
  $(".grid").append(box)
  $(".grid").append(box.clone())
}
// event listeners
$('.box').on('click', handleBoxClick);
$('#deal').on('click', handleDealButton);
//shufflePics();

})
