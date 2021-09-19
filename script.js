callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
  showLeaveButton: true
});

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };


  await callFrame.join({ url: room.url });
  callFrame.on('app-message', (event) => { console.log(`a hand was raised and it says ${JSON.stringify(event)}`)})
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
        };
        let message = callFrame.sendAppMessage(update, "*");
      //   console.log(message)
      // console.log(typeof update); 
      // console.log(typeof message); 

        // callFrame.on('app-message', (event) => { console.log("this hand was raised in toggle")})
      }


      async function updateHandState(message) {
        console.log("triggered")
        console.log(message.data.username)
        console.log(message.data)

        let currentList = document.getElementById("participant_list");
        let participant = message.data.username
        let toggleHand = document.getElementById("toggleHand")

        if (message.data.status == true){
          currentList.innerHTML = message.data.username;
        } else {
          currentList.innerHTML = "";

        }

      }

  

// JS AddEventListeners -> replaced with
// document.addEventListener('DOMContentLoaded', init, false);
// function init(){
//   function message () {
//     alert("Hello!");
//   }
//   var button = document.getElementById('join_call');
//   button.addEventListener("click", myFunction);

//   function myFunction() {
//     console.log("Hello World!");
//     callFrame = window.DailyIframe.createFrame({
//       showLeaveButton: true,
//       iframeStyle: {
//         position: 'relative',
//         top: 50,
//         right: 1500,
//         width: '90%',
//         height: '100%',
//       },
//     });
//     callFrame.join({ url: 'https://dalelore.daily.co/Raise-your-hand' });
//   }
// };