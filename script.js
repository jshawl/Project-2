$(document).ready(function (){
// game state variables
var newPics = [
  '1', '1',
  '2', '2',
  '3', '3',
  '4', '4',
  '5', '5',
  '6', '6'
]; // maybe a loop could be used to generate this array
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

var showImages = function (boxId, picId) {
  console.log(boxId, picId);
  var boxId = "#" + boxId;
  for(var i = 1; i <= newPics.length; i++){
    if(picId == i && $(boxId).hasClass("showPic")){
      $(boxId).addClass("pic" + i);
    }
  }
}

var cardMatch = function(flipped1, flipped2) {
  var color1 = $(flipped1).css("background");
  var color2 = $(flipped2).css("background"); // nice!
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
    swal("Good job!", "You won!", "success"); // really like this look!
  }
}

var checkClass = function () {
  var showPicBoxes = [];
  for (var i = 0; i < $('.box').length; i++) {
    var targetID = '#box' + i; // I think your length issue is related to box numbers starting at 1 and not 0
    var boxClass = $(targetID).hasClass('showPic');
    if (boxClass) {
      showPicBoxes.push(targetID);
    }
  };
//*problem here with .length
if (showPicBoxes.length == 2) {
  return(showPicBoxes);
}
else {
  return false;
} // please indent code correctly.
};

// $(this).off('click'); // remove unused code

// event handlers
var handleBoxClick = function(evt) {
  var clickedBox = this;
  if ($(clickedBox).hasClass('matched')) {
    return true;
  }
  else {
    var boxId = $(clickedBox).attr('id');
    var picIndex = boxId.split("box")[1];
    var picId = newPics[picIndex];
    $(clickedBox).addClass('showPic');
    $(clickedBox).removeClass('noPic')
    showImages(boxId, picId);
    var flippedCards = checkClass();
    if (flippedCards) {
      cardMatch(flippedCards[0], flippedCards[1]); // excellent!
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
// event listeners
$('.box').on('click', handleBoxClick);
$('#deal').on('click', handleDealButton);
shufflePics();

})
