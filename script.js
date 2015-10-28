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

//functions
var shufflePics = function () {
  var m = newPics.length, t, i;
  while (m) {
    i = Math.floor(Math.random () * m --);
    newPics.push(newPics.splice(i, 1)[0]);
  };
};

// var setNewPics = function (){
//   for (var i = 0; i < newPics.length; i++) {
//     var picId = newPics[i];
//     var boxId = "#box" + i;
//     // added line below when considering switching to css classes to display pics:
//     // $(boxId).attr("id", picId);
//     showImages(boxId, picId);
//   };
// };

// var setNoPicClass = function (boxId, picId) {
//   $(boxId).toggleClass('noPic');
//   $(picId).toggleClass('noPic');
// };

var showImages = function (boxId, picId) {
  console.log(boxId, picId);
  boxId = "#" + boxId;
    if (picId === '1' && $(boxId).hasClass('showPic')) {
      $(boxId).toggleClass("pic1");
    }
    else if (picId === '2' && $(boxId).hasClass('showPic')) {
      $(boxId).toggleClass("pic2");
    }
    else if (picId === '3' && $(boxId).hasClass('showPic')) {
      $(boxId).toggleClass("pic3");
    }
    else if (picId === '4' && $(boxId).hasClass('showPic')) {
      $(boxId).toggleClass("pic4");
    }
    else if (picId === '5' && $(boxId).hasClass('showPic')) {
      $(boxId).toggleClass("pic5");
    }
    else if (picId === '6' && $(boxId).hasClass('showPic')) {
      $(boxId).toggleClass("pic6");
    };
  // });
}
//
var cardMatch = function(flipped1, flipped2) {
  var wins;
  var missed;
  var color1 = $(flipped1).css("background");
  var color2 = $(flipped2).css("background");
  if (color1 === color2) {
    // return true;
    // wins +=1
    alert("You made a match!")
    $(flipped1).attr("class","matched");
    $(flipped2).attr("class","matched");
  }
  else {
    alert("Try again!")
    // return false;
    // missed +=1;
    $(flipped1).toggleClass('noPic');
    $(flipped1).removeClass('showPic');
    $(flipped2).toggleClass('noPic');
    $(flipped2).removeClass('showPic');
  };
  // keepScore(wins, missed);
};

// var keepScore = function(wins, missed) {
//   $("#wins").text('Matches' + wins);
//   $("#missed").text('Missed' + missed);
//   return wins;
//   return missed;
// }

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
  var boxId = $(clickedBox).attr('id');
  var picIndex = boxId.split("box")[1];
  var picId = newPics[picIndex];
  $(clickedBox).toggleClass('showPic');
  $(clickedBox).removeClass('noPic')
  showImages(boxId, picId);
  var flippedCards = checkClass();
  if (flippedCards) {
    cardMatch(flippedCards[0], flippedCards[1]);
  };
};

var handleDealButton = function(evt) {
  shufflePics();
  // setNewPics();
  $('.box').toggleClass('noPic');
  $('.box').removeClass('showPic');
  // for (var i = 0; i < $('.box').length; i++) {
  //   var targetID = '#box' + i;
  //   $(targetID).css('background', '');
  // }
}
// event listeners
$('.box').on('click', handleBoxClick);
$('#deal').on('click', handleDealButton);
//
shufflePics();
// setNewPics();
})
