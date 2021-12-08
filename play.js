player1_name=localStorage.getItem("name_1");
player2_name=localStorage.getItem("name_2");

score_1=0;
score_2=0;

document.getElementById("player1_name").innerHTML= player1_name +":";
document.getElementById("player2_name").innerHTML= player2_name +":";

document.getElementById("score1").innerHTML= score_1;
document.getElementById("score2").innerHTML= score_2;

document.getElementById("whos_turn").innerHTML = "Question turn : " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer turn : " + player2_name;


function send() {
    numb1 = document.getElementById("one").value;
    numb2 = document.getElementById("two").value;
real_answer = parseInt(numb1)*parseInt(numb2);

Question = "<h4 id= 'h4_1'> Question: " + numb1 + "*" + numb2 + "</h4>";
Answer= "<br> Answer : <input id= 'input_answer' type='number'>";
button = "<br> <br> <button class='btn btn-danger' onclick='check()'> Check  </button> <br> <br>";
row = Question + Answer + button;
document.getElementById("output").innerHTML= row;
document.getElementById("one").value = "";
document.getElementById("two").value="";
}


question_turn = "player1";
answer_turn = "player2";
function check() {
answer_val = document.getElementById("input_answer").value;
if (answer_val == real_answer) {
   if (answer_turn == "player1") {
       score_1 = score_1 +1;
       document.getElementById("score1").innerHTML = score_1;
   } else {
       score_2= score_2+1;
       document.getElementById("score2").innerHTML = score_2;
   } 
}

if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("whos_turn").innerHTML = "Question turn : " + player2_name;
} else {
    question_turn = "player1";
    document.getElementById("whos_turn").innerHTML = "Question turn : " + player1_name;
}

if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("answer_turn").innerHTML = "Answer turn : " + player2_name;
} else {
    answer_turn = "player1";
    document.getElementById("answer_turn").innerHTML = "Answer turn : " + player1_name;
}
document.getElementById("output").innerHTML="";
}