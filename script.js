callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
  showLeaveButton: true
});

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };

  // Event Listeners for callbacks
  callFrame.on("joined-meeting", joinedCall)
  callFrame.on("participant-joined", addParticipantList)
  callFrame.on("left-meeting", leftCall)
  callFrame.on('app-message', (event) => updateHandState(event) )

  await callFrame.join({ url: room.url });
  

}
// Global variables so it can reach all functions
let local_user = {
  user_id: "",
  username: "",
  handState: false,
}
let addParticpipant = document.getElementById("participantsList")

// CallBack Method: sendAppMessage
async function updateHandState(e){
  console.log("In updateHandState", e.action);
  toggleHand(e)
}

// JavaScript Event Listener onClick
function toggleHand(){
  console.log("Clicked from HTML")
}

// Meeting Event:
async function joinedCall(e) {
  // console.log("In joinedCall", e.action);

  // Display Raise Hand Option when you arrive
  document.getElementById("raise_hand").style.display = "block";

  // Call createParticipantDiv and carrying over userId and username
  createParticipantDiv(e.participants.local.user_id, e.participants.local.user_name)
  
  // Setting local_user info
  local_user.user_id = e.participants.local.user_id
  local_user.username = e.participants.local.user_name
}

// Participant Event:
async function addParticipantList(e){
  console.log("In addParticipant", e.action);
  
  // Call createParticipantDiv and carrying over userId and username
  createParticipantDiv(e.participant.user_id, e.participant.user_name)
  
  // Broadcasting local_user info
  callFrame.sendAppMessage(local_user)
}

// 
async function createParticipantDiv(id, name){
  console.log("In addParticipant");
  
  let participant = document.createElement('div')
  participant = `
                  <div id=${id}>
                    <p>${name}</p>
                    <img 
                      id="${id}-hand"
                      src="./Assets/icon-raised-hand.png" 
                      alt="Raised hand" 
                      style="display: none"
                      height="20px;"
                    />
                  </div>
                `
  addParticpipant.innerHTML += participant
}


// async function updateParticipantList(e){
//   console.log("In updateList", e.action);
// }

// Meeting Event:
async function leftCall(e){
  console.log("In Bye Bye",e.action);

}