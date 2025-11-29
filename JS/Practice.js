const favMovie = "avatar";
let guess= prompt("Guess my favorite Movie");
while((guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong..Please try again");
}
if(guess == favMovie){
    alert("Congrats!!");
}else{
    console.log("you quit");
}
