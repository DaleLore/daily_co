callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
  showLeaveButton: true
});


// Global variables so it can reach all functions
let user_data = {
    user_id: "",
    username: "",
    handState: {},
  }


let addParticpipant = document.getElementById("participantsList")

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };

  callFrame.on("joined-meeting", joinedCall)
  callFrame.on("left-meeting", leftCall)
  callFrame.on('app-message', (event) => sendingUpdates(event) )

  await callFrame.join({ url: room.url });
  
}

function sendingUpdates(message){
  console.log(message)
  console.log("An event happened!")



}

function toggleHand(e){
  console.log("I click")
  let id = user_data.user_id 

  if (!user_data.handState) {
    user_data.handState = true;
    document.getElementById("local-hand").innerHTML = "Your Hand is Raised!";
    document.getElementById("hand-emoji").style.display = "block";
    document.getElementById(id + "-hand").style.display = "block";
  } else {
    user_data.handState = false;
    document.getElementById("local-hand").innerHTML = "Need to ask a question?";
    document.getElementById("hand-emoji").style.display = "none";
    document.getElementById(id + "-hand").style.display = "none";
  } 

  let message = user_data
  callFrame.sendAppMessage(message, "*");
}



async function joinedCall(e){
  // Display Raise Hand Button when you arrive
  document.getElementById("raise_hand_container").style.display = "block";
  document.getElementById("join_call_button").style.display = "none";

  // console.log(e)

  // Call createParticipantDiv and carrying over userId and username
  createParticipantDiv(e.participants.local.user_id, e.participants.local.user_name)
  
  // Setting user_data info as local joins
  user_data.user_id = e.participants.local.user_id
  user_data.username = e.participants.local.user_name
}

function createParticipantDiv(id, username){
  console.log(id)
  console.log(username)

   // Create div for local user
   let dailyUser = document.createElement('div')
   
   dailyUser = `
                   <div id=${id} class="participantBlock">
                    
                     <div class="participantBlock-item"><p>${username}</p></div>
                 
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
   addParticpipant.innerHTML += dailyUser

   user_data = {
      user_id: "",
      username: "",
      handState: false,
    }
   callFrame.sendAppMessage(user_data, "*")
}







function leftCall(e){
  document.getElementById("raise_hand_container").style.display = "none";
  document.getElementById("join_call_button").style.display = "block";
  
  location.reload();
}
