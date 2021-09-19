callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
  showLeaveButton: true
});

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };


  await callFrame.join({ url: room.url });
  
  callFrame.on('app-message', (event) => updateHandState(event) )

}

let raisingHand;
let currentList = [];

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
        console.log("triggered")
        console.log(message.data.username)
        console.log(message.data)

        let currentListHTML = document.getElementById("participant_list");
        let currentList = callFrame.participants();

        let participant = `<li id="${message.data.user_id}">
                            <h5>${message.data.username}</h5>
                          </li>`;

        if (message.data.status == true){
          console.log("hand is raised")
        } else if (message.data.status === false){
          console.log("hand is lowered")
        }

      }
