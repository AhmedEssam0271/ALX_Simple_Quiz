


function checkAnswer() {
    // Function body

    let userAnswer;
    const correctAnswer="4";
    if(document.getElementById("choice1").checked){
    userAnswer =document.getElementById("choice1").value;
    }
    else if(document.getElementById("choice2").checked){
    userAnswer =document.getElementById("choice2").value;
    }
    else if(document.getElementById("choice3").checked){
    userAnswer =document.getElementById("choice3").value;
    }

    if (userAnswer==correctAnswer){
        document.getElementById("feedback").innerHTML="Correct! Well done.";
    }
    else{
        document.getElementById("feedback").innerHTML="That's incorrect. Try again!";
    }

}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);