// game state variables
$(document).ready(function (){
var newPics = [
  '1', '1',
  '2', '2',
  '3', '3',
  '4', '4',
  '5', '5',
  '6', '6'
];
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
  boxId = "#" + boxId;
    if (picId === '1' && $(boxId).hasClass('showPic')) {
      $(boxId).addClass("pic1");
    }
    else if (picId === '2' && $(boxId).hasClass('showPic')) {
      $(boxId).addClass("pic2");
    }
    else if (picId === '3' && $(boxId).hasClass('showPic')) {
      $(boxId).addClass("pic3");
    }
    else if (picId === '4' && $(boxId).hasClass('showPic')) {
      $(boxId).addClass("pic4");
    }
    else if (picId === '5' && $(boxId).hasClass('showPic')) {
      $(boxId).addClass("pic5");
    }
    else if (picId === '6' && $(boxId).hasClass('showPic')) {
      $(boxId).addClass("pic6");
    };
}

var cardMatch = function(flipped1, flipped2) {
  var color1 = $(flipped1).css("background");
  var color2 = $(flipped2).css("background");
  if (color1 === color2) {
    wins++;
    alert("You made a match!")
    $(flipped1).attr("class", "box matched");
    $(flipped2).attr("class", "box matched");
  }
  else {
    alert("Try again!")
    missed++;
    $(flipped1).addClass('noPic');
    $(flipped1).removeClass('showPic');
    $(flipped2).addClass('noPic');
    $(flipped2).removeClass('showPic');
  };
  keepScore();
};

var keepScore = function() {
  $("#wins").text('Matches: ' + wins);
  $("#missed").text('Missed: ' + missed);
}

var checkClass = function () {
  var showPicBoxes = [];
  for (var i = 0; i < $('.box').length; i++) {
    var targetID = '#box' + i;
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
    var picIndex = boxId.split("box")[1];
    var picId = newPics[picIndex];
    $(clickedBox).addClass('showPic');
    $(clickedBox).removeClass('noPic')
    showImages(boxId, picId);
    var flippedCards = checkClass();
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
// event listeners
$('.box').on('click', handleBoxClick);
$('#deal').on('click', handleDealButton);
shufflePics();

})
