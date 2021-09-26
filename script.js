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

// JavaScript Event Listener - onClick evokes instance method, join(): https://docs.daily.co/reference/daily-js/instance-methods/join
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
  let id = message.fromId
  
  if (message.data.status === true) {
    document.getElementById(id + "-hand").style.display = "block";
  } else if (message.data.status === false){
    document.getElementById(id + "-hand").style.display = "none";
  }
}

// JavaScript Event Listener - onClick
function toggleHand(){
  let localID = callFrame.participants().local.user_id
  let localUsername = callFrame.participants().local.user_name

  if (!raisingHand) {
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
    user_id: localID,
    status: raisingHand,
    username: localUsername,
  };
  callFrame.sendAppMessage(update, "*");
}


// Meeting event - joined-meeting: https://docs.daily.co/reference/daily-js/events/meeting-events
async function joinedCall(e){
  // Display Raise Hand Button when you arrive
  document.getElementById("raise_hand_container").style.display = "block";
  document.getElementById("join_call_button").style.display = "none";

  // Call createParticipantDiv and carrying over userId and username from event
  createParticipantDiv(e.participants.local.user_id, e.participants.local.user_name)
}

// Participant-joined Event: https://docs.daily.co/reference/daily-js/events/participant-events
async function participantJoined(e){
  // console.log("someone joined", e)
  createParticipantDiv(e.participant.user_id, e.participant.user_name)
}

function createParticipantDiv(id, username){
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
}

// Meeting Event: "left-meeting" https://docs.daily.co/reference/daily-js/events/meeting-events#left-meeting
function leftCall(e){
  location.reload();
}

// Participant-left event: https://docs.daily.co/reference/daily-js/events/participant-events
function participantLeft(e){
  let participantSessionId = e.participant.session_id
  document.getElementById(participantSessionId).remove()
  callFrame.sendAppMessage()
}