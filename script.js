callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
  showLeaveButton: true
});

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };


  await callFrame.join({ url: room.url });
  callFrame.on('joined-meeting', welcomeToDaily)
  callFrame.on('participant-joined', BeOurGuest)
  callFrame.on("participant-left", ThankYouComeAgain)
  callFrame.on('app-message', (event) => updateHandState(event) )

}

let raisingHand;

/**
       *  Toggles the participant's hand status, and sends a message alerting other participants to the change
       *
       */
      async function toggleHand(e) {
        if (!raisingHand) {
          raisingHand = true;
          // Change the user's display
          document.getElementById("toggleHand").innerHTML = "Your Hand is Raised!";

        } else {
          raisingHand = false;
          document.getElementById("toggleHand").innerHTML = "Need to ask a question?";

        }
        // Send a message to update all users on the change
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

      function BeOurGuest(e){
        console.log("im here")

        
      }

      function ThankYouComeAgain(e){
        console.log("bye")
        
      }