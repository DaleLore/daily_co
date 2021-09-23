callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
  showLeaveButton: true
});

let raisingHand;
let handState = {};
let addParticpipant = document.getElementById("participantsList")

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };

  callFrame.on("joined-meeting", joinedCall)
  callFrame.on("left-meeting", leftCall)


  await callFrame.join({ url: room.url });
  
}

async function joinedCall(e){
  // Display Raise Hand Button when you arrive
  document.getElementById("raise_hand_container").style.display = "block";
  document.getElementById("join_call").style.display = "none";

  console.log(e)

}

function leftCall(){
  document.getElementById("raise_hand_container").style.display = "none";
  document.getElementById("join_call").style.display = "block";
  

}

function toggleHand(){
  console.log("I click")
}