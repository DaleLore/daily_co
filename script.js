let localParticipant = {
  handState: {},
  session_id: "",
  username: ""
}

callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
  showLeaveButton: true
});

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };

  await callFrame.join({ url: room.url });
  callFrame
  .on("participant-joined", updateParticipantList)
  .on("left", leftCall)
  .on("app-message", updateHandState);
}

async function updateParticipantList(e){
  console.log("updated list here")
  participants = callFrame.participants();
  console.log(participants)
  let wrapper = document.getElementById("participant_list");
  wrapper.innerHTML = "";
  console.log(e)
}

function leftCall(){
  console.log("bye felicia")
}

function updateHandState(){
  console.log("raised hands")
}


function raiseYourHand(){
  console.log("hand raised")
  
  let updateLocalParticipant = {
    session_id: callFrame.participants().local.session_id,
    username: callFrame.participants().local.user_name
  }
  console.log(updateLocalParticipant)
  
  var x = document.getElementById("toggleHand");
    if (x.innerHTML === "Need to ask a question?") {
    console.log('Hello');
      x.innerHTML = "Your Hand is Raised!";
      raisedHand = true
      console.log(raisedHand)
    } else {
      x.innerHTML = "Need to ask a question?";
      raisedHand = false
      console.log(raisedHand)
    }

    var y = document.getElementById("raisedHands_list");
    let username = callFrame.participants().local.user_name
    
    if (x.innerHTML === "Your Hand is Raised!") {
        y.innerHTML = username;
        callFrame.sendAppMessage(username + "raised their hand");
      } else {
        y.innerHTML = " ";
      }
}



// function raiseYourHand() {
//   let username = callFrame.participants().local.user_name

//     var x = document.getElementById("toggleHand");
//     if (x.innerHTML === "Need to ask a question?") {
//     console.log('Hello');
//       x.innerHTML = "Your Hand is Raised!";
//       raisedHand = true
//       console.log(raisedHand)
//       console.log(username)

//       update = {
//         status: raisedHand,
//         participant: username
//       }
//       message = callFrame.sendAppMessage(update, "*");      
//     } else {
//       x.innerHTML = "Need to ask a question?";
//       raisedHand = false
//       console.log("in else", raisedHand)
//       update = {
//         status: raisedHand,
//         participant: username
//       }
//       message = callFrame.sendAppMessage(update, "*"); 
//     }
//     // console.log(alert())
//   }

  

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