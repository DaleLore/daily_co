callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
  showLeaveButton: true
});


// Global variables so it can reach all functions
let user_data = {
    user_id: "",
    username: "",
    handState: {},
  }
let raisingHand

let addParticpipant = document.getElementById("participantsList")

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };

  callFrame.on("joined-meeting", joinedCall)
  callFrame.on("participant-joined", participantJoined)
  callFrame.on("left-meeting", leftCall)
  callFrame.on("participant-left", participantLeft)
  callFrame.on('app-message', (event) => sendingUpdates(event) )

  await callFrame.join({ url: room.url });
  
}



function sendingUpdates(message){
  console.log(message)
  console.log(message.fromId)
  let id = message.fromId
  
  if (!user_data.handState) {
    user_data.handState = true;
    document.getElementById(id + "-hand").style.display = "block";
  } else {
    user_data.handState = false;
  document.getElementById(id + "-hand").style.display = "none";
  }
}

function toggleHand(e){
  console.log("I click")
  let id = user_data.user_id 

  if (!user_data.handState) {
    user_data.handState = true;
    raisingHand = true
    document.getElementById("local-hand").innerHTML = "Your Hand is Raised!";
    document.getElementById("hand-emoji").style.display = "block";
    document.getElementById("local").style.display = "block";

  } else {
    user_data.handState = false;
    raisingHand = false
    document.getElementById("local-hand").innerHTML = "Need to ask a question? Click to raise your hand";
    document.getElementById("hand-emoji").style.display = "none";
    document.getElementById("local").style.display = "none";

  } 

  update = {
    handState = raisingHand
  }
  callFrame.sendAppMessage(update, "*");
}



async function joinedCall(e){
  // Display Raise Hand Button when you arrive
  document.getElementById("raise_hand_container").style.display = "block";
  document.getElementById("join_call_button").style.display = "none";

  // console.log(e)

  // Call createParticipantDiv and carrying over userId and username
  createParticipantDiv(e.participants.local.user_id, e.participants.local.user_name)
  
  // // Setting user_data info as local joins
  // user_data.user_id = e.participants.local.user_id
  // user_data.username = e.participants.local.user_name
}

async function participantJoined(e){
  console.log("someone joined", e)
  createParticipantDiv(e.participant.user_id, e.participant.user_name)

  //  // Setting user_data info as participant joins
  //  user_data.user_id = e.participant.user_id
  //  user_data.username = e.participant.user_name

}

function createParticipantDiv(id, username){
  console.log(id)
  console.log(username)

   // Create div for local user
   let dailyUser = document.createElement('div')
   
   dailyUser = `
                   <div id=${id} class="participantBlock">
                    
                     <div class="participantBlock-item" id="usernameDiv"><h5>${username}</h5></div>
                 
                       <img 
                         id="${id}-hand"
                         src="./Assets/icon-raised-hand.png" 
                         class="participantBlock-item"
                         class="hand"
                         alt="Raised hand" 
                         style="display: none"
                         height="30px;"
                       />
                       <img 
                         id="local"
                         src="./Assets/icon-raised-hand.png" 
                         class="participantBlock-item"
                         class="hand"
                         alt="Raised hand" 
                         style="display: none"
                         height="30px;"
                       />
            
                   </div>
                 `
   addParticpipant.innerHTML += dailyUser

  //  user_data = {
  //     user_id: id,
  //     username: username,
  //     handState: {},
  //   }
  //  callFrame.sendAppMessage(user_data, "*")
}


function leftCall(e){
  console.log("I left")
  console.log(e)
 
  let id = callFrame.participants().local.user_id
  document.getElementById("raise_hand_container").style.display = "none";
  document.getElementById("join_call_button").style.display = "block";
  callFrame.sendAppMessage()
  document.getElementById(id).remove()
  location.reload();
}

function participantLeft(e){
  console.log("Someone left")
  let participantId = e.participant.user_id
  callFrame.sendAppMessage()
  document.getElementById("raise_hand_container").style.display = "none";
  document.getElementById("join_call_button").style.display = "block";
  document.getElementById(participantId).remove()
  location.reload();

}