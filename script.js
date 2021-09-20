callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
  showLeaveButton: true
});

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };


  await callFrame.join({ url: room.url });
 
  callFrame.on('app-message', (event) => updateHandState(event) )

}

let raisingHand = {};

/**
       *  Toggles the participant's hand status, and sends a message alerting other participants to the change
       *
       */
      async function toggleHand(e) {
          let participantWithHands = document.getElementById("participant_list")
          let newParticipant = document.createElement('div')
          newParticipant.id = callFrame.participants().local.user_id
          user_id = newParticipant.id
          username = callFrame.participants().local.user_name

        if (!raisingHand) {
          raisingHand = true;
          document.getElementById("toggleHand").innerHTML = "Your Hand is Raised!";
          
          newParticipant.innerHTML = username;
          participantWithHands.appendChild(newParticipant);

        } else {
          raisingHand = false;
          document.getElementById("toggleHand").innerHTML = "Need to ask a question?";
        
          removeParticipant(user_id)
          // document.getElementById("toggleHand").
        }

        update = {
          status: raisingHand,
          username: callFrame.participants().local.user_name,
          user_id: callFrame.participants().local.user_id
        };
        callFrame.sendAppMessage(update, "*");
        // console.log(message)
        // console.log(typeof update); 
        // console.log(typeof message); 
        // callFrame.on('app-message', (event) => { console.log("this hand was raised in toggle")})
      }

      function removeParticipant(user_id){
        console.log("removing")
        if (user_id === callFrame.participants().local.user_id)
          var removeParticipantDiv = document.getElementById(user_id)
          removeParticipantDiv.remove()
      }

      async function updateHandState(message) {
        console.log("In updateHandState function")
        console.log(message.data.username)
        console.log(message.data.user_id)
        console.log(message.data.status)

        let username = message.data.username

        if (message.data.status == true){
          console.log("hand is raised")
          let y = document.getElementById("participant_list")
          y.innerHTML = username
        } else if (message.data.status === false){
          console.log("hand is lowered")
          let y = document.getElementById("participant_list")          
          y.innerHTML = " ";
        }

      }
