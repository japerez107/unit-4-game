$(document).ready(function () {

    // variables for win, lose and total

    var wins = 0;
    var loss = 0;
    var totalScore = 0;
    $('#total-score').text(totalScore);

    // randomize gem values 
    var gem1 = Math.floor(Math.random() * 11 + 1);
    var gem2 = Math.floor(Math.random() * 11 + 1);
    var gem3 = Math.floor(Math.random() * 11 + 1);
    var gem4 = Math.floor(Math.random() * 11 + 1);

    // randomize random number value
    var randomNum = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").text(randomNum);

    // click functions for images

    $("#gem1").on('click', function () {
        totalScore = totalScore + gem1;
        console.log(totalScore);
        $("#total-score").text(totalScore);
        winLose();

    });

    $("#gem2").on('click', function () {
        totalScore = totalScore + gem2;
        console.log(totalScore);
        $("#total-score").text(totalScore);
        winLose();

    });

    $("#gem3").on('click', function () {
        totalScore = totalScore + gem3;
        console.log(totalScore);
        $("#total-score").text(totalScore);
        winLose();

    });

    $("#gem4").on('click', function () {
        totalScore = totalScore + gem4;
        console.log(totalScore);
        $("#total-score").text(totalScore);
        winLose();
    });

    // function to decipher if the score wins or loses
    var winLose = function () {
        if (totalScore === randomNum) {

            winner();

            resetGem();
        }
        else if (randomNum < totalScore) {

            loser();

            resetGem();
        }
    };


    // function to add a win point and reset random number and score
    function winner() {
        wins++;
        $('#win').text(wins);

        randomNum = Math.floor(Math.random() * 101) + 19;
        $("#randomNumber").text(randomNum);

        totalScore = 0;

    };

    // function to add a lose point and reset random number and score

    function loser() {

        loss++;
        $('#loses').text(loss);

        randomNum = Math.floor(Math.random() * 101) + 19;
        $("#randomNumber").text(randomNum);


        totalScore = 0;

    };


    // function to reset gem values 
    function resetGem() {
        gem1 = Math.floor(Math.random() * 11 + 1);
        gem2 = Math.floor(Math.random() * 11 + 1);
        gem3 = Math.floor(Math.random() * 11 + 1);
        gem4 = Math.floor(Math.random() * 11 + 1);

    };

});

