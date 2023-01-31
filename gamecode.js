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
//不能动的

//查看任务键
getMission.addEventListener("click", function theMissionButton() {
  alert(
    "Go buy a take away sushi." +
      " " +
      "Maybe you can go store and ask about it."
  );

  //这条在gotCoin执行之后开始管用
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

//商店里的交谈
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

//提醒拿到硬币，地面硬币消失（有用）
if (document.getElementById("pickup")) {
  pickup.addEventListener("click", function gotCoin() {
    alert("you got some coins");
    pickup.style.display = "none";

    //如果地上的消失会到道具栏里,保存金币0
    if ((pickup.style.display = "none")) {
      coin.style.visibility = "visible";
      sessionStorage.setItem("checkCoin", "0");
      console.log(sessionStorage.getItem("checkCoin"));
    }

    //游戏机随机数字
    if (coin.style.visibility === "visible") {
      gameMachine.addEventListener("click", function tryGet() {
        getToy = Math.floor(Math.random() * 10 + 1);
        if (getToy > 5) {
          alert("You got a toy.");
          toy.style.visibility = "visible";
          sessionStorage.setItem("checkToy", "1");
          console.log(sessionStorage.getItem("checkToy"));
          //如果大于4则拿到玩具在道具栏并保存玩具0
        } else if ((getToy = 4)) {
          alert("very close.\nPlease try again.");
        } else {
          alert("you failed to get a toy.\nPlease try again.");
        }
        console.log(getToy);
      });
    }
  });
}

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

//在买寿司存在的情况下，如果有折扣就能拿到寿司，否则显示没有折扣卷
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