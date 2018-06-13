// user gets a random number between 19 and 12

var trgNum;
var wins = 0;
var losses = 0;
var usrScore = 0;
var crysOne;
var crysTwo;
var crysThree;
var crysFour;





// four crystals with each having a random value

$(document).ready(function () {

    function gameStart() {

        // random number for target
        var max = 12;
        var min = 1;
        var maxNum = 120;
        var minNum = 19;

        trgNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        crysOne = Math.floor(Math.random() * (max - min + 1)) + min;
        crysTwo = Math.floor(Math.random() * (max - min + 1)) + min;
        crysThree = Math.floor(Math.random() * (max - min + 1)) + min;
        crysFour = Math.floor(Math.random() * (max - min + 1)) + min;


       

        function reset() {

            trgNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

            $("#trgNum").text(trgNum);

            crysOne = Math.floor(Math.random() * (max - min + 1)) + min;
            crysTwo = Math.floor(Math.random() * (max - min + 1)) + min;
            crysThree = Math.floor(Math.random() * (max - min + 1)) + min;
            crysFour = Math.floor(Math.random() * (max - min + 1)) + min;
            usrScore = 0;
            

        }

        $("#trgNum").text(trgNum);


        function winner() {

            alert("you win");
            wins++;
            $(".wins").text("Wins: " + wins);
            reset();
            cslog();
        }

        function loser() {

            alert("you lose");
            losses++;
            $(".losses").text("Losses: " + losses);
            reset();
           cslog();
        }





        // user gets target number between 19 and 120
        // $("#trgNum").text(trgNum);



        // user presses the crystal and a random number is generated per crystal

        $("#crys-1").on("click", function () {

            usrScore = usrScore + crysOne;

            console.log(usrScore);

            $("#userScore").text(usrScore);

            if (usrScore == trgNum) {

                winner();
            } else if (usrScore > trgNum) {

                loser();


            }






        })
        $("#crys-2").on("click", function () {

            usrScore = usrScore + crysTwo;

            console.log(usrScore);

            $("#userScore").text(usrScore);

            if (usrScore == trgNum) {

                winner();
            } else if (usrScore > trgNum) {

                loser();


            }







        })
        $("#crys-3").on("click", function () {

            usrScore = usrScore + crysThree;

            console.log(usrScore);

            $("#userScore").text(usrScore);


            if (usrScore == trgNum) {

                winner();
            } else if (usrScore > trgNum) {

                loser();


            }




        })
        $("#crys-4").on("click", function () {

            usrScore = usrScore + crysFour;

            console.log(usrScore);

            $("#userScore").text(usrScore);

            if (usrScore == trgNum) {

                winner();
            } else if (usrScore > trgNum) {

                loser();


            }



        })
        // the values are totaled in a user section
        // if user goes over random number: loss goes up
        //if user guesses correct:wins go up


        // if user gets the correct amount game resets


        function cslog() {
           console.warn(trgNum)
            console.log(crysOne);
            console.log(crysTwo);
            console.log(crysThree);
            console.log(crysFour);
        }

        console.warn(trgNum)
        console.log(crysOne);
        console.log(crysTwo);
        console.log(crysThree);
        console.log(crysFour);


    }

    gameStart();

});