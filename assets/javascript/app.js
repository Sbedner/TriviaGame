 
// 
// 


// Our variables for Trivia game
var correctAnswers = ["q1a1","q2a2","q3a4","q4a3","q5a3"];
var classes =["class0","class1","class2","class3","class4"];
var correct=0;
var incorrect=0;
var unanswered=0;
var number = 60;
var intervalId;

// hides questions and done page
$("#questions").hide();
$("#donePage").hide();

// onclick starts button here begins game and starts timer function
$("#startButton").click(function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
   $("#startButton").hide();
   $("#questions").show(); 
    
})
  

function decrement() {
    //  Show the number in the #show-number tag HTML.
    $("#counter").html("<a>" + number + "</a>");
    number--;
    if (number === 0) {
        stop();
    }}
    // function to stop timer. also hides questions after time is up!
    function stop() {
        clearInterval(intervalId);
        checker();
        $("#questions").hide();

   
    }

    // Function to check answers by correct, incorrect, and unanswered.also shows done page where stop() just hid questions. 
    function checker() {
        $("#donePage").show();
        for(i=0;i<correctAnswers.length;i++){
        if(document.getElementById(correctAnswers[i]).checked===true){
            console.log("its correct");
            correct++;

        }
        else if(document.getElementsByClassName(classes[i].checked===true)){
            console.log(classes[i]);
            console.log("its incorrect");
            incorrect++;


        }
        else if(document.getElementsByClassName(classes[i].checked===false)){
            console.log("its unanswered");
            unanswered++;
         }
        //  updates HTML 
    document.getElementById("correctAnswers").innerHTML= (correct);
    document.getElementById("incorrectAnswers").innerHTML= (incorrect);
    document.getElementById("unansweredAnswers").innerHTML= (unanswered);

    
    }}



    