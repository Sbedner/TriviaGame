// make a TIMER that COUNTS down by 1000ms
// show said TIMER on screen in questions id
// make CHECK function that checks answers to CORRECT
// (BE ABLE TO RECORD AND COMPARE ANSWERS)
// a 'results' 'questions' 'start button' display all hidden or shown by js
// make TIMER start depend on 'start button press'
// 
// assign ids to correct answers radio buttons
// assign classes to each radio button by question
// put correct answers id's in an array
// put classes into array
// for cylce through id's
//  if id 1 = true 'meaning radio button selected then correct++
// else if meaning it was empty else if classes[i]=true then incorrect++
// else if meaning classes[i]=false then unanswered ++
// 
// 
// 
// 
// 
// 
// 
// 

// 
// 
// 
// 
// 



var correctAnswers = ["q1a1","q2a2","q3a4","q4a3","q5a3"];
var classes =["class0","class1","class2","class3","class4"];
var correct=0;
var incorrect=0;
var unanswered=0;
var number = 20;
var intervalId;

$("#questions").hide();
$("#donePage").hide();

$("#startButton").click(function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
   $("#startButton").hide();
   $("#questions").show(); 
    
})
  

function decrement() {
    number--;

    //  Show the number in the #show-number tag.
    $("#counter").html("<a>" + number + "</a>");

    if (number === 0) {
        stop();
    }}

    function stop() {
        clearInterval(intervalId);
        checker();
        $("#questions").hide();

   
    }

    function checker() {
        $("#donePage").show();
        for(i=0;i<correctAnswers.length;i++)
        if(document.getElementById(correctAnswers[i]).checked===true){
            console.log("its correct");
            correct++;

        }
        else if(document.getElementById(correctAnswers[i].checked===false)){
            console.log("its incorrect");
            incorrect++;


        }
        else if(document.getElementsByClassName(classes[i].checked===false)){
            console.log("its unanswered");
            unanswered++;
        }
    document.getElementById("correctAnswers").innerHTML= (correct);
    document.getElementById("incorrectAnswers").innerHTML= (incorrect);
    document.getElementById("unansweredAnswers").innerHTML= (unanswered);
    
    }



    