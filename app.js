var myGame = new SimonGame();

SimonGame.prototype.nextRound = function() {
  this.addColor();
  this.showSequence();
  this.userClickCount = 0;
  this.round += 1;
  $("#counter").html(this.round);
};

SimonGame.prototype.gameOver = function () {
  alert("Game over!! Try it again!!");
  this.sequence = [];
  this.userClickCount = 0;
  this.round = 1;
  $("#counter").html("1");

  this.startGame();
};


$(document).ready(function () {
  myGame.startGame();
});

$(document).ready(function () {
  $('button').click(function () {
    var colorInput   = $(this).attr("id");
    var currentColor = myGame.sequence[myGame.userClickCount];

    if (currentColor !== colorInput) {
      // ADD THIS
      myGame.gameOver();
      return;
    }

    myGame.userClickCount += 1;

    if (myGame.userClickCount === myGame.sequence.length) {
      alert('Sequence complete!');

      myGame.nextRound();
    }
  });
});
