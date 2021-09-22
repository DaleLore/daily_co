callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
  showLeaveButton: true
});

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };

  // Event Listeners for callbacks
  callFrame.on("joined-meeting", joinedCall)
  callFrame.on("participant-joined", addParticipantList)
  callFrame.on("left-meeting", leftCall)
  callFrame.on("participant-left", leftCall)
  callFrame.on('app-message', (event) => sendingUpdates(event) )

  await callFrame.join({ url: room.url });
}

// Global variables so it can reach all functions
let user_data = {
    user_id: "",
    username: "",
    handState: false,
  }

let addParticpipant = document.getElementById("participantsList")

// CallBack Method: sendAppMessage
async function sendingUpdates(e){
  // console.log("In updateHandState", e.action);
  // console.log(e.data.user_id, e.data.handState, e.data.username)
  toggleHand(e.data.user_id, e.data.handState, e.data.username)
}

// JavaScript Event Listener onClick
function toggleHand(id, hstate, name){

  let participant_id;
  let participant_state;
  let participant_username;

  if (id == undefined){
    participant_id = user_data.user_id;
    participant_state = user_data.handState
    participant_username = user_data.username
    callFrame.sendAppMessage(user_data);
    user_data.handState = !user_data.handState;
  } else {
    participant_id = id;
    participant_state = hstate;
    participant_username = name
  }
  let showHand = document.getElementById(id + "-hand")
  showHand.innerHTML = (participant_state == false) ? showHand.style.display = "block" : showHand.style.display = "none"
  toggleYourHand()
}


// Meeting Event: "joined-meeting"
async function joinedCall(e) {
  // console.log("In joinedCall", e.action);

  // Display Raise Hand Option when you arrive
  document.getElementById("raise_hand").style.display = "block";

  // Call createParticipantDiv and carrying over userId and username
  createParticipantDiv(e.participants.local.user_id, e.participants.local.user_name)
  
  // Setting user_data info
  user_data.user_id = e.participants.local.user_id
  user_data.username = e.participants.local.user_name   

}

// Participant Event:
async function addParticipantList(e){
  console.log("In addParticipant", e.action);
  
  // Call createParticipantDiv and carrying over userId and username
  createParticipantDiv(e.participant.user_id, e.participant.user_name)
  
  // Broadcasting user_data info
  callFrame.sendAppMessage(user_data)
}

// JavaScript Methods: createElement 
async function createParticipantDiv(id, name){
  console.log("In addParticipant");
  
  let participant = document.createElement('div')
  participant = `
                  <div id=${id} class="participantBlock">
                   
                    <div class="participantBlock-item"><p>${name}</p></div>
                
                      <img 
                        id="${id}-hand"
                        src="./Assets/icon-raised-hand.png" 
                        class="participantBlock-item"
                        class="hand"
                        alt="Raised hand" 
                        style="display: none"
                        height="20px;"
                      />
           
                  </div>
                `
  addParticpipant.innerHTML += participant
}


// Meeting Event:
async function leftCall(e){
  console.log("In Bye Bye",e.action);
  console.log(e.participant.user_id)
  console.log(ee.participants.local.user_id)


}