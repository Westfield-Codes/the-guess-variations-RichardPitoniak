function guessGame(){
var answer = Math.floor(Math.random()*100 + 1)
alert (answer)
var guess = 0
while (guess != answer){
guess = prompt ("guess a number between 1 and 100")
if (guess == answer ) alert ("nice job")
else if (guess > answer ) alert ("too high")
else if (guess < answer ) alert ("too low")
else alert ("bad input")
  }
}