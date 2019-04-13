$(document).ready(function () {


    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    // $('#win').text(wins);

    // $('#loss').text(losses);

    $('#total-score').text(totalScore);

    var gem1 = Math.floor(Math.random() * 11 + 1);
    var gem2 = Math.floor(Math.random() * 11 + 1);
    var gem3 = Math.floor(Math.random() * 11 + 1);
    var gem4 = Math.floor(Math.random() * 11 + 1);

    var randomNum = Math.floor(Math.random() * 101) + 19;

    $("#randomNumber").text(randomNum);


    // click functions for images

    $("#gem1").on('click', function () {
        totalScore = totalScore + gem1;
        console.log(totalScore);
        $("#total-score").text(totalScore);
    });

    $("#gem2").on('click', function () {
        totalScore = totalScore + gem2;
        console.log(totalScore);
        $("#total-score").text(totalScore);
    });

    $("#gem3").on('click', function () {
        totalScore = totalScore + gem3;
        console.log(totalScore);
        $("#total-score").text(totalScore);
    });

    $("#gem4").on('click', function () {
        totalScore = totalScore + gem4;
        console.log(totalScore);
        $("#total-score").text(totalScore);
    });



    if (randomNum > totalScore) {

        losses++;
        $('#loss').text(losses);

        randomNum = Math.floor(Math.random() * 101) + 19;

        totalScore = 0;

    }

    else if (totalScore === randomNum) {
        wins++;
        $('#win').text(wins);

        randomNum = Math.floor(Math.random() * 101) + 19;

        totalScore = 0;
    }




    // function winner() {
    //     wins++;

    //     $('#win').text(wins);


    // }

    // function loser() {
    //     losses++;

    //     $('#loss').text(losses);


    // }


    // function reset() {



    // }
});

