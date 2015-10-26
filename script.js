// game state variables
var newPics = [
  '1', '1',
  '2', '2',
  '3', '3',
  '4', '4',
  '5', '5',
  '6', '6'
];
var grid = [
  'box1', 'box2', 'box3', 'box4',
  'box5', 'box6', 'box7', 'box8',
  'box9', 'box10', 'box11', 'box12',
]
// functions

// var keepScore =

var shufflePics = function (newPics) {
  var m = newPics.length, t, i;
  while (m) {
    i = Math.floor(Math.random () * m --);
    newPics.push(newPics.splice(i, 1)[0]);
  }
  return newPics;
}

var setNewPics = function (){
  shufflePics(newPics);
  for (var i = 0; i < newPics.length * 2; i++) {
    var picId = newPics[i].val();
  };
  for (var i = 0; i < grid.length; i++) {
    var boxId = '#box' + i;
  };
  $('boxId').append('.picId')
  showImages(boxId, picId)
};

var showImages = function (boxId, picId) {
  if (picId === '1') {
    boxId.css('background', 'red');
  }
  else if (picId === '2') {
    boxId.css('background', 'blue');
  }
  else if (picId === '3') {
    boxId.css('background', 'yellow');
  }
  else if (picId === '4') {
    boxId.css('background', 'green');
  }
  else if (picId === '5') {
    boxId.css('background', 'purple');
  }
  else if (picId === '6') {
    boxId.css('background', 'orange');
  }
}

// var cardMatch = function() {
//   if () {
//
//   }
//   else {
//
//   }
// }

// event handlers
var handleBoxClick = function() {
  setNewPics();
  $(this).toggleClass('picClass');
}

var handleDealButton = function() {
  $('.box').toggleClass('noPic');
  setNewPics();
}
// event listeners
$('.box').on('click', handleBoxClick);
$('#deal').on('click', handleDealButton);
