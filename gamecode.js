let coin = document.getElementById("coin");
let toy = document.getElementById("toy");
let sushi = document.getElementById("sushi");
let discount = document.getElementById("discount");
let pickup = document.getElementById("pickup");
let buySushi = document.getElementById("sushistore");
let getMission = document.getElementById("misson");
let inStore = document.getElementById("talkwith");
let getToy;

const gameMachine = document.getElementById("inroom");
//No need to change

//Check mission button
getMission.addEventListener("click", function theMissionButton() {
  alert(
    "Go buy a take away sushi." +
      " " +
      "Maybe you can go store and ask about it."
  );

  //Start to working after gotCoin execute
  if (coin.style.visibility === "visible") {
    alert("Use coin to get a toy.");
  }

  if (toy.style.visibility === "visible") {
    alert("Go back to store and talk to the person again.");
  }

  if (discount.style.visibility === "visible") {
    alert("Now you can go to buy a sushi set.");
  }

  console.log("its working.");
});

//Conversation in the store
if (document.getElementById("talkwith")) {
  inStore.addEventListener("click", function talkTo() {
    console.log("it's working");
    alert(
      "I have a discount ticket of that sushistore,\nbut I want to exchange it with a toy."
    );
    if (toy.style.visibility === "visible") {
      alert("Thank you!\nHere's your discount ticket!");
      discount.style.visibility = "visible";
      sessionStorage.setItem("checkTicket", "2");
      console.log(sessionStorage.getItem("checkTicket"));
    }
  });
}

//Reminder to get coins, ground coins disappear (It's working)
if (document.getElementById("pickup")) {
  pickup.addEventListener("click", function gotCoin() {
    alert("you got some coins");
    pickup.style.display = "none";

    //If the coin on the ground disapear then top one will apear,save coin0
    if (pickup.style.display === "none") {
      coin.style.visibility = "visible";
      sessionStorage.setItem("checkCoin", "0");
      console.log(sessionStorage.getItem("checkCoin"));
    }

    //Gamemachine math random
    if (coin.style.visibility === "visible") {
      gameMachine.addEventListener("click", function tryGet() {
        getToy = Math.floor(Math.random() * 10 + 1);
        if (getToy > 5) {
          alert("You got a toy.");
          toy.style.visibility === "visible";
          sessionStorage.setItem("checkToy", "1");
          console.log(sessionStorage.getItem("checkToy"));
          //If greater than 4 then get the toy in the prop bar and save the toy0
        } else if (getToy === 4) {
          alert("very close.\nPlease try again.");
        } else {
          alert("you failed to get a toy.\nPlease try again.");
        }
        console.log(getToy);
      });
    }
  });
}

//Let item visible in other page
let aboutCoin = sessionStorage.getItem("checkCoin");
let aboutToy = sessionStorage.getItem("checkToy");
let aboutTicket = sessionStorage.getItem("checkTicket");

console.log(aboutCoin);
console.log(aboutToy);
console.log(aboutTicket);

if (aboutCoin === "0" && aboutToy === "1") {
  coin.style.visibility = "visible";
  toy.style.visibility = "visible";
}

if (aboutTicket === "2") {
  discount.style.visibility = "visible";
}

//In the case of buying sushi present,
//if there is a discount you can get the sushi, otherwise it shows no discount roll
if (document.getElementById("sushistore")) {
  buySushi.addEventListener("click", function takeSushi() {
    if (discount.style.visibility === "visible") {
      alert("you got the sushi set.");
      alert("Congratulations for completing the game!");
      sushi.style.visibility = "visible";
    } else {
      alert("You dont have discount ticket.");
    }
  });
}
