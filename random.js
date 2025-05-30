
let random; 

let jokes = [
     `"President Lincoln was approached by a woman after a political speech..."<br> 
       "If you were my husband I would poison your tea. Lincoln replied..."<br>
       "if you are my wife I’ll gladly drink it."<br>`
     ,

     `"What do you call a nose with no body?" 
      "No body nose"<br>`
    ,
     `"A roman walks into a cafe holds up 2 fingers"<br>
     "and gets 5 coffees."`

     ,

     `"Q: What time is it when the clock strikes 13?"<br> 
       "A: Time to get a new clock."`

     ,

     `"3 unwritten rules of Life-"<br> 
       "1) 2) 3)"`

     ,

     `"Why are frogs always so happy?"<br> 
      "They eat whatever bugs them"`
     ,

     `"Me: Would you like to be the sun in my life?"<br>
      "Her: Awww... Yes!!!"<br>
      "Me: Good then stay 92.96 million miles away from me"<br>`

     ,

     `"Some guy called me a tool"<br>
      "So I got hammered and nailed his girlfriend"<br> 
      "Guess he was right"`

     ,

     `"I couldn't figure out why the baseball kept getting larger"<br> 
      "Then it hit me"`

     ,

     `"Boy: The principal is so dumb!"<br> 
      "Girl: Do you know who I am?"<br>
      "Boy: No..."<br> 
      "Girl: I am the principal's daughter!"<br> 
      "Boy: Do you know who I am?"<br>
      "Girl: No..."<br>
      "Boy: Good! *Walks away*"<br>`
];

random = Math.floor(Math.random()*((jokes.length-1)+1))
let joke_box= document.getElementById("joke_box");

joke_box.innerHTML=jokes[random];
