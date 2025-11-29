const favMovie = "avatar";
let guess= prompt("Guess my favorite Movie");
while((guess != favMovie)){
    if((guess != "quit")){
        console.log("You quit");
    }
    guess = prompt("Wrong..Please try again");
}
if(guess == favMovie){
    alert("Congrats!!");
}